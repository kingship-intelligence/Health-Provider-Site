import { Link } from "wouter";
import { useListServices } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Services() {
  const { data: services, isLoading } = useListServices();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/service-bg.jpg" alt="Services" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">We Focus On</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Specialized psychiatric care for various mental health conditions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 flex-1">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="animate-pulse h-[250px] border-none bg-muted/50 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer border hover:border-primary/20 bg-card group overflow-hidden rounded-3xl">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-primary-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-serif mb-3">{service.name}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.tagline}</p>
                      <div className="text-primary font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform">
                        Learn more &rarr;
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
