import { useParams, Link } from "wouter";
import { useGetProvider, useListLocations } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProviderDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: provider, isLoading } = useGetProvider(id || "");
  const { data: locations } = useListLocations();

  if (isLoading) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Loading...</div>;
  }

  if (!provider) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Provider not found</div>;
  }

  const providerLocations = locations?.filter(l => provider.locationIds.includes(l.id)) || [];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header Profile Section */}
      <div className="bg-muted/30 pt-16 pb-16 border-b">
        <div className="container mx-auto px-4">
          <Link href="/providers" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            &larr; Back to Providers
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3 max-w-sm shrink-0">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg bg-muted relative">
                {provider.photoUrl ? (
                  <img src={provider.photoUrl} alt={provider.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-secondary">No Photo</div>
                )}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {provider.acceptingNewPatients && (
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Accepting New Patients</Badge>
                )}
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-secondary">★</span>
                  <span className="font-medium text-foreground">{provider.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-2">
                {provider.name}, {provider.credentials}
              </h1>
              <p className="text-2xl text-primary mb-6">{provider.specialty}</p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {provider.bio}
              </p>
              
              <div className="flex gap-4">
                <Link href={`/appointments?providerId=${provider.id}`}>
                  <Button size="lg" className="rounded-full px-8 h-14 text-base">Request Appointment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif mb-6">Education & Training</h2>
              <ul className="space-y-4">
                {provider.education.map((edu, i) => (
                  <li key={i} className="flex gap-4 p-4 rounded-2xl bg-card border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      🎓
                    </div>
                    <div>
                      <p className="font-medium">{edu}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif mb-6">Languages Spoken</h2>
              <div className="flex flex-wrap gap-2">
                {provider.languages.map((lang, i) => (
                  <Badge key={i} variant="secondary" className="px-4 py-2 text-sm bg-muted/50 font-normal">
                    {lang}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
          
          <div>
            <h2 className="text-2xl font-serif mb-6">Locations</h2>
            <div className="space-y-4">
              {providerLocations.map(location => (
                <Card key={location.id} className="border-none bg-muted/30 rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">{location.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{location.addressLine1}, {location.city}</p>
                    <Link href={`/locations/${location.id}`}>
                      <Button variant="outline" size="sm" className="w-full rounded-full">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
