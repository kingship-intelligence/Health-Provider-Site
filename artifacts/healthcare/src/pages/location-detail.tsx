import { useParams, Link } from "wouter";
import { useGetLocation, useListProviders } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LocationDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: location, isLoading } = useGetLocation(id || "");
  const { data: providers } = useListProviders({ locationId: id });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Loading...</div>;
  }

  if (!location) {
    return <div className="container mx-auto px-4 py-24 min-h-screen">Location not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero Image */}
      <div className="h-[40vh] min-h-[300px] w-full relative">
        {location.imageUrl ? (
          <img src={location.imageUrl} alt={location.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">No Image</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative -mt-32">
        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg border max-w-4xl">
          <Link href="/locations" className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block">
            &larr; Back to Locations
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">{location.name}</h1>
              <p className="text-xl text-muted-foreground mb-2">
                {location.addressLine1}
                {location.addressLine2 ? `, ${location.addressLine2}` : ""}
              </p>
              <p className="text-xl text-muted-foreground mb-6">
                {location.city}, {location.state} {location.postalCode}
              </p>
              <p className="text-lg font-medium">{location.phone}</p>
            </div>
            
            <Link href={`/appointments?locationId=${location.id}`}>
              <Button size="lg" className="rounded-full px-8 h-14 text-base w-full md:w-auto">Book Here</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Hours & Services */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-serif mb-6">Hours</h2>
              <Card className="border-none bg-muted/30 rounded-2xl">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {location.hours.map((h, i) => (
                      <li key={i} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{h.day}</span>
                        <span className="text-muted-foreground">{h.opens} - {h.closes}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif mb-6">Services Offered</h2>
              <div className="flex flex-wrap gap-2">
                {location.services.map((service, i) => (
                  <Badge key={i} variant="secondary" className="px-4 py-2 font-normal bg-card border rounded-full">
                    {service}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {/* Providers at this location */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif mb-6">Providers at this location</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {providers?.length === 0 ? (
                <p className="text-muted-foreground">No providers listed for this location yet.</p>
              ) : (
                providers?.map(provider => (
                  <Link key={provider.id} href={`/providers/${provider.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer border-none bg-muted/30 rounded-2xl h-full">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-card shrink-0 shadow-sm">
                          {provider.photoUrl ? (
                            <img src={provider.photoUrl} alt={provider.name} className="w-full h-full object-cover" />
                          ) : null}
                        </div>
                        <div>
                          <h3 className="font-medium line-clamp-1">{provider.name}</h3>
                          <p className="text-sm text-primary">{provider.specialty}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
