import { useState } from "react";
import { Link } from "wouter";
import { useListInsights } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Wellness", "Nutrition", "Mental Health", "Prevention", "Family Care"];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const { data: insights, isLoading } = useListInsights(
    activeCategory !== "All" ? { category: activeCategory } : undefined
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-muted/30 pt-20 pb-12 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Health Insights</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Expert advice, wellness tips, and clinical perspectives from the Meridian Psychiatry team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-1">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i} className="animate-pulse h-[400px] border-none bg-muted/50 rounded-3xl" />
            ))}
          </div>
        ) : insights?.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-dashed">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights?.map((insight, i) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/insights/${insight.slug}`}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden group cursor-pointer bg-card">
                    <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                      {insight.coverImageUrl ? (
                        <img src={insight.coverImageUrl} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-secondary/20" />
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 text-foreground backdrop-blur-md hover:bg-background border-none font-medium">
                          {insight.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span>{new Date(insight.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span>{insight.readMinutes} min read</span>
                      </div>
                      <h3 className="text-xl font-serif mb-3 line-clamp-2 group-hover:text-primary transition-colors">{insight.title}</h3>
                      <p className="text-muted-foreground line-clamp-3 mb-6">{insight.excerpt}</p>
                      
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-xs">
                          {insight.authorName[0]}
                        </div>
                        <span className="text-sm font-medium">{insight.authorName}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
