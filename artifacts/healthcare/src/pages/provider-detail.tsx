import { useParams, Link } from "wouter";
import { ProviderProfile } from "@/components/provider-profile";

export default function ProviderDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Provider not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-muted/30 pt-16 pb-16 border-b">
        <div className="container mx-auto px-4">
          <Link href="/providers" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            &larr; Back to Providers
          </Link>
          <ProviderProfile providerId={id} />
        </div>
      </div>
    </div>
  );
}
