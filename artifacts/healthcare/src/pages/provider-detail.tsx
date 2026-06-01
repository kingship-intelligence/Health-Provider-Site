import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { ProviderProfile } from "@/components/provider-profile";
import { FEATURED_PROVIDER_ID, isFeaturedProvider } from "@/lib/providers";

export default function ProviderDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const providerId = id || FEATURED_PROVIDER_ID;

  useEffect(() => {
    if (id && !isFeaturedProvider(id)) {
      setLocation("/providers");
    }
  }, [id, setLocation]);

  if (id && !isFeaturedProvider(id)) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-muted/30 pt-16 pb-16 border-b">
        <div className="container mx-auto px-4">
          <ProviderProfile providerId={providerId} />
        </div>
      </div>
    </div>
  );
}
