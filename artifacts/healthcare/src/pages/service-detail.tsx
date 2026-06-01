import { useParams, Link } from "wouter";
import { APPOINTMENT_REQUEST_URL } from "@/lib/site-links";
import { useGetService, useListProviders } from "@workspace/api-client-react";
import { isFeaturedProvider } from "@/lib/providers";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProviderAvatar } from "@/components/provider-avatar";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: service, isLoading } = useGetService(slug || "");
  const { data: providers } = useListProviders({ specialty: service?.name });
  const featuredProviders = providers?.filter((p) => isFeaturedProvider(p.id)) ?? [];

  if (isLoading) return <div className="container mx-auto px-4 py-24 min-h-screen">Loading...</div>;
  if (!service) return <div className="container mx-auto px-4 py-24 min-h-screen">Service not found</div>;

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-muted/30 pt-16 pb-16 border-b">
        <div className="container mx-auto px-4">
          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block">
            &larr; Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 max-w-2xl">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">{service.name}</h1>
              <p className="text-2xl text-muted-foreground font-serif italic mb-6">{service.tagline}</p>
              <p className="text-lg leading-relaxed mb-8">{service.description}</p>
              <a href={APPOINTMENT_REQUEST_URL} target="_blank" rel="noreferrer">
                <Button size="lg" className="rounded-full px-8 h-14 text-base">Request Appointment</Button>
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
                <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-serif mb-6">Highlights</h2>
              <ul className="space-y-4">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-lg">{highlight}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-serif mb-6">Conditions Treated</h2>
              <div className="flex flex-wrap gap-2">
                {service.conditionsTreated.map((condition, i) => (
                  <Badge key={i} variant="outline" className="px-4 py-2 text-sm bg-card rounded-full font-normal border-muted-foreground/20">
                    {condition}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
          <div>
            <div className="bg-muted/30 rounded-3xl p-8 border">
              <h2 className="text-2xl font-serif mb-8">Specialists in {service.name}</h2>
              <div className="space-y-4">
                {featuredProviders.length === 0 ? (
                  <p className="text-muted-foreground">We are currently adding providers for this specialty.</p>
                ) : (
                  featuredProviders.map((provider) => (
                    <Link key={provider.id} href={`/providers/${provider.id}`}>
                      <Card className="hover:shadow-md transition-shadow cursor-pointer border-none rounded-2xl">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-muted shrink-0">
                            <ProviderAvatar photoUrl={provider.photoUrl} name={provider.name} />
                          </div>
                          <div>
                            <h3 className="font-medium">{provider.name}, {provider.credentials}</h3>
                            <p className="text-sm text-primary">{provider.specialty}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))
                )}
                {featuredProviders.length > 0 && (
                  <div className="pt-4 text-center">
                    <Link href="/providers">
                      <Button variant="ghost" className="w-full">View Provider Profile</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
