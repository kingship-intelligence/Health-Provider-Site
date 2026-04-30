import { Link } from "wouter";
import { useListLocations } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Locations() {
  const { data: locations, isLoading } = useListLocations();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="bg-muted/30 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Locations</h1>
          <p className="text-lg text-muted-foreground">
            A calm, beautifully designed clinic in the heart of North Park. Come visit us in person.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-1">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Card key={i} className="animate-pulse h-[400px] border-none bg-muted/50 rounded-3xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations?.map((location, i) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow rounded-3xl overflow-hidden group">
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    {location.imageUrl ? (
                      <img src={location.imageUrl} alt={location.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-secondary/20" />
                    )}
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif mb-2">{location.name}</h3>
                    <p className="text-muted-foreground mb-6 h-12">
                      {location.addressLine1}
                      {location.addressLine2 ? `, ${location.addressLine2}` : ""}
                      <br />
                      {location.city}, {location.state} {location.postalCode}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-medium text-sm">{location.phone}</p>
                      <Link href={`/locations/${location.id}`}>
                        <Button variant="outline" className="rounded-full">Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
