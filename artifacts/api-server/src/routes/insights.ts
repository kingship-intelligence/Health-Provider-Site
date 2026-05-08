import { Router, type IRouter } from "express";
import {
  ListInsightsQueryParams,
  ListInsightsResponse,
  GetInsightParams,
  GetInsightResponse,
} from "@workspace/api-zod";
import type { InsightRecord } from "../data/content";

const router: IRouter = Router();

const HEALTHCARE_GOV = "https://www.healthcare.gov";
const HTML_ENTITIES: Record<string, string> = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
  mdash: "\u2014",
  ndash: "\u2013",
};

const CURATED_ARTICLES: { url: string; category: string; coverImageUrl: string }[] = [
  {
    url: "/coverage/mental-health-substance-abuse-coverage",
    category: "Mental Health",
    coverImageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/coverage/preventive-care-benefits",
    category: "Wellness",
    coverImageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/coverage/what-marketplace-plans-cover",
    category: "Insurance",
    coverImageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/coverage/pre-existing-conditions",
    category: "Insurance",
    coverImageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/using-marketplace-coverage/prescription-medications",
    category: "Medication",
    coverImageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/why-coverage-is-important/coverage-protects-you",
    category: "Insurance",
    coverImageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/preventive-care-adults",
    category: "Wellness",
    coverImageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/preventive-care-children",
    category: "Wellness",
    coverImageUrl: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    url: "/using-marketplace-coverage/improving-your-health",
    category: "Wellness",
    coverImageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
  },
];

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&(nbsp|amp|lt|gt|quot|#39|rsquo|ldquo|rdquo|mdash|ndash);/g, (entity) => {
      return HTML_ENTITIES[entity.slice(1, -1)] ?? entity;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function getStringField(value: unknown, key: string): string | undefined {
  if (!value || typeof value !== "object") return undefined;

  const candidate = (value as Record<string, unknown>)[key];
  return typeof candidate === "string" ? candidate : undefined;
}

function urlToSlug(url: string): string {
  return url.replace(/^\//, "").replace(/\//g, "-");
}

function estimateReadMinutes(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 200));
}

let cachedInsights: InsightRecord[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

async function fetchInsights(): Promise<InsightRecord[]> {
  const now = Date.now();
  if (cachedInsights && now - cacheTime < CACHE_TTL) {
    return cachedInsights;
  }

  const results: InsightRecord[] = [];

  const settled = await Promise.allSettled(
    CURATED_ARTICLES.map(async (article) => {
      const res = await fetch(`${HEALTHCARE_GOV}${article.url}.json`);
      if (!res.ok) return null;
      const data = await res.json();
      const content = getStringField(data, "content") ?? "";
      const title = getStringField(data, "title") ?? "";
      const date = getStringField(data, "date");
      const plainText = stripHtml(content);
      const excerpt = plainText.slice(0, 200).replace(/\s\S*$/, "") + "...";

      return {
        id: `hcg_${urlToSlug(article.url)}`,
        slug: urlToSlug(article.url),
        title: title.trim(),
        excerpt,
        body: content,
        category: article.category,
        readMinutes: estimateReadMinutes(plainText),
        coverImageUrl: article.coverImageUrl,
        authorName: "HealthCare.gov",
        publishedAt: date ? new Date(date).toISOString() : new Date().toISOString(),
        sourceUrl: `${HEALTHCARE_GOV}${article.url}`,
      } satisfies InsightRecord;
    }),
  );

  for (const r of settled) {
    if (r.status === "fulfilled" && r.value) {
      results.push(r.value);
    }
  }

  cachedInsights = results;
  cacheTime = now;
  return results;
}

router.get("/insights", async (req, res): Promise<void> => {
  const parsed = ListInsightsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { category } = parsed.data;
  let result = await fetchInsights();
  if (category) {
    const needle = category.toLowerCase();
    result = result.filter((i) => i.category.toLowerCase() === needle);
  }

  result = [...result].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  res.json(ListInsightsResponse.parse(result));
});

router.get("/insights/:slug", async (req, res): Promise<void> => {
  const params = GetInsightParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const allInsights = await fetchInsights();
  const insight = allInsights.find((i) => i.slug === params.data.slug);
  if (!insight) {
    res.status(404).json({ error: "Insight not found" });
    return;
  }

  res.json(GetInsightResponse.parse(insight));
});

export default router;
