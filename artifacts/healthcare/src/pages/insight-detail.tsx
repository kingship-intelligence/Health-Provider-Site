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

  const isHtml = insight.body.includes("<");

  return (
    <div className="min-h-screen bg-background pb-24">
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
          
          {isHtml ? (
            <div
              className="prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-li:text-muted-foreground prose-strong:text-foreground max-w-none
                [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:mt-6 [&_h3]:mb-3
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2
                [&_p]:mb-4 [&_p]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: insight.body }}
            />
          ) : (
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary max-w-none">
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
          )}

          {(insight as any).sourceUrl && (
            <div className="mt-10 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Source:{" "}
                <a
                  href={(insight as any).sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  HealthCare.gov
                </a>
                {" "}&mdash; An official website of the U.S. Department of Health &amp; Human Services.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
