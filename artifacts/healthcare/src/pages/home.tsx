import { useListFeaturedProviders, useGetStatsOverview, useListServices, useListTestimonials, useListInsights } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { data: stats } = useGetStatsOverview();
  const { data: featuredProviders } = useListFeaturedProviders();
  const { data: services } = useListServices();
  const { data: testimonials } = useListTestimonials();
  const { data: insights } = useListInsights();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero.jpg" alt="Modern clinic waiting room" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight"
            >
              Healthcare that feels like <span className="text-primary italic">home</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              A modern, patient-centered network bringing warm, expert care back to your neighborhood. No cold waiting rooms. No rushed visits.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/appointments">
                <Button size="lg" className="text-base h-14 px-8 rounded-full">Request Appointment</Button>
              </Link>
              <Link href="/locations">
                <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-background/50 backdrop-blur">Find a Location</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      {stats && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-serif mb-2">{stats.patientsServed.toLocaleString()}+</p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Patients Served</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">{stats.providerCount}</p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Expert Providers</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">{stats.locationCount}</p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Neighborhood Clinics</p>
              </div>
              <div>
                <p className="text-4xl font-serif mb-2">{stats.averageRating.toFixed(1)}/5</p>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Care for your whole family</h2>
            <p className="text-muted-foreground text-lg">We offer comprehensive services designed to keep you healthy, not just treat you when you're sick.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services?.slice(0, 6).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-none bg-card group overflow-hidden rounded-2xl">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {/* Assuming icon is a name or unicode, fallback to initial */}
                        <span className="text-2xl">{service.icon || service.name[0]}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{service.name}</h3>
                      <p className="text-muted-foreground">{service.tagline}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-full">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Providers */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Meet our clinical leaders</h2>
              <p className="text-muted-foreground text-lg">Experienced, compassionate providers who take the time to listen.</p>
            </div>
            <Link href="/providers" className="hidden md:block">
              <Button variant="ghost">Browse Directory &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredProviders?.slice(0, 4).map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/providers/${provider.id}`}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-all rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                      {provider.photoUrl ? (
                        <img src={provider.photoUrl} alt={provider.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-secondary">No Photo</div>
                      )}
                      {provider.acceptingNewPatients && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary text-primary-foreground hover:bg-primary shadow-sm border-none">Accepting Patients</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-medium text-lg truncate">{provider.name}, {provider.credentials}</h3>
                      <p className="text-primary text-sm mb-2">{provider.specialty}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Don't just take our word for it</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.slice(0, 2).map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card p-8 rounded-3xl text-left shadow-sm border"
              >
                <div className="flex text-secondary mb-4">
                  {[...Array(t.rating)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="text-lg text-foreground italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">{t.patientName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{t.patientName}</p>
                    <p className="text-xs text-muted-foreground">{t.serviceName} Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
