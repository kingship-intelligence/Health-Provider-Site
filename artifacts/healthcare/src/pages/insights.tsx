import { useListInsights } from "@workspace/api-client-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Insights() {
  const [category, setCategory] = useState("");
  const { data: insights } = useListInsights(category ? { category } : undefined);
  const categories = useMemo(() => ["", "Wellness", "Anxiety", "ADHD", "Medication", "Trauma"], []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-muted/30 pt-20 pb-12 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Psychiatry Insights</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Expert advice, wellness tips, and clinical perspectives from the Restoration LLC team.
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
        {insights?.map((item) => (
          <Link key={item.slug} href={`/insights/${item.slug}`} className="group rounded-3xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</h2>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">{item.category}</p>
            <p className="text-muted-foreground">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
