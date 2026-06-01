import { useListProviders } from "@workspace/api-client-react";
import { ProviderProfile } from "@/components/provider-profile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FEATURED_PROVIDER_ID, isFeaturedProvider } from "@/lib/providers";
import React from "react";

export default function Providers() {
  const { data: allProviders, isLoading } = useListProviders();
  const featuredProviders = allProviders?.filter((p) => isFeaturedProvider(p.id)) ?? [];
  const [selectedProviderId, setSelectedProviderId] = React.useState(FEATURED_PROVIDER_ID);

  React.useEffect(() => {
    if (featuredProviders.length > 0 && !featuredProviders.some((p) => p.id === selectedProviderId)) {
      setSelectedProviderId(featuredProviders[0].id);
    }
  }, [featuredProviders, selectedProviderId]);

  const selectedProvider = featuredProviders.find((p) => p.id === selectedProviderId);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/30 pt-16 pb-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif mb-4">Our Provider</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Meet Dr. Olayemi Olajuyigbe (Dr. Yemi), Board-Certified Psychiatric Nurse Practitioner.
          </p>
          <div className="max-w-md bg-card p-4 rounded-2xl shadow-sm border">
            <label htmlFor="provider-select" className="text-sm font-medium text-muted-foreground mb-2 block">
              Provider
            </label>
            <Select
              value={selectedProviderId}
              onValueChange={setSelectedProviderId}
              disabled={isLoading || featuredProviders.length === 0}
            >
              <SelectTrigger id="provider-select" className="w-full bg-transparent">
                <SelectValue placeholder="Select a provider" />
              </SelectTrigger>
              <SelectContent>
                {featuredProviders.map((provider) => (
                  <SelectItem key={provider.id} value={provider.id}>
                    {provider.name}, {provider.credentials}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 flex-1">
        {isLoading ? (
          <div className="py-24 text-center text-muted-foreground">Loading...</div>
        ) : featuredProviders.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-dashed">
            <h3 className="text-xl font-medium mb-2">Provider not available</h3>
            <p className="text-muted-foreground">Please check back soon.</p>
          </div>
        ) : (
          <ProviderProfile providerId={selectedProvider?.id ?? FEATURED_PROVIDER_ID} />
        )}
      </div>
    </div>
  );
}
