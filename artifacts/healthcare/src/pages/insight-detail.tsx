import { useParams, Link } from "wouter";
import { useGetInsight } from "@workspace/api-client-react";
import { Badge } from "@/components/ui/badge";

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: insight, isLoading } = useGetInsight(slug || "");

  if (isLoading) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Loading...</div>;
  }

  if (!insight) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Image */}
      <div className="h-[50vh] w-full relative bg-muted">
        {insight.coverImageUrl && (
          <img src={insight.coverImageUrl} alt={insight.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative -mt-48 max-w-4xl">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg border">
          <Link href="/insights" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            &larr; Back to Insights
          </Link>
          
          <div className="mb-6 flex items-center gap-4">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-sm font-normal px-4 py-1">
              {insight.category}
            </Badge>
            <span className="text-muted-foreground text-sm">{insight.readMinutes} min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            {insight.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-10 pb-10 border-b">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium text-lg">
              {insight.authorName[0]}
            </div>
            <div>
              <p className="font-medium">{insight.authorName}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(insight.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">
            {/* Minimal markdown rendering handling newlines */}
            {insight.body.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={i}>{paragraph.substring(2)}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="mt-8 mb-4">{paragraph.substring(3)}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="mt-6 mb-3">{paragraph.substring(4)}</h3>;
              }
              return <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
