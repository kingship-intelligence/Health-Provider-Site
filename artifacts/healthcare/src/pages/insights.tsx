import { useListInsights } from "@workspace/api-client-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Insights() {
  const [category, setCategory] = useState("");
  const { data: insights, isLoading } = useListInsights(category ? { category } : undefined);
  const categories = useMemo(() => ["", "Mental Health", "Wellness", "Insurance", "Medication"], []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-muted/30 pt-20 pb-12 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Health Insights</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Official health coverage information and resources from HealthCare.gov.
          </p>
          <p className="text-sm text-muted-foreground mb-10">
            Content provided by the U.S. Department of Health &amp; Human Services.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button key={cat || "all"} variant={category === cat ? "default" : "outline"} onClick={() => setCategory(cat)}>
                {cat || "All"}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-3xl border bg-muted/50 h-[320px] animate-pulse" />
          ))
        ) : (
          insights?.map((item) => (
            <Link key={item.slug} href={`/insights/${item.slug}`} className="group rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {item.coverImageUrl && (
                <div className="h-40 overflow-hidden">
                  <img src={item.coverImageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.readMinutes} min read</span>
                </div>
                <h2 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
