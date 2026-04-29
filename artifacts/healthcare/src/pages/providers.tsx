import { useState } from "wouter/use-location";
import { Link } from "wouter";
import { useListProviders, useListLocations } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import React from "react";

export default function Providers() {
  const [specialtyFilter, setSpecialtyFilter] = React.useState<string>("");
  const [locationFilter, setLocationFilter] = React.useState<string>("");

  const { data: providers, isLoading } = useListProviders({
    specialty: specialtyFilter || undefined,
    locationId: locationFilter || undefined,
  });

  const { data: locations } = useListLocations();

  // Get unique specialties for filter
  const { data: allProviders } = useListProviders();
  const specialties = Array.from(new Set(allProviders?.map(p => p.specialty) || []));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/30 pt-16 pb-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif mb-4">Our Providers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Expert care starts with expert people. Find the right provider for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl bg-card p-4 rounded-2xl shadow-sm border">
            <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
              <SelectTrigger className="w-full bg-transparent border-none shadow-none focus:ring-0">
                <SelectValue placeholder="Any Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Specialty</SelectItem>
                {specialties.map(s => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="hidden sm:block w-px bg-border my-2" />

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full bg-transparent border-none shadow-none focus:ring-0">
                <SelectValue placeholder="Any Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Location</SelectItem>
                {locations?.map(l => (
                  <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {(specialtyFilter || locationFilter) && (
              <Button 
                variant="ghost" 
                onClick={() => { setSpecialtyFilter(""); setLocationFilter(""); }}
                className="shrink-0 text-muted-foreground hover:text-foreground"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-1">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <Card key={i} className="animate-pulse h-[400px] border-none bg-muted/50 rounded-2xl" />
            ))}
          </div>
        ) : providers?.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-dashed">
            <h3 className="text-xl font-medium mb-2">No providers found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
            <Button variant="outline" onClick={() => { setSpecialtyFilter(""); setLocationFilter(""); }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {providers?.map((provider, i) => (
              <motion.div
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
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
                          <Badge className="bg-primary text-primary-foreground hover:bg-primary shadow-sm border-none backdrop-blur-md">Accepting Patients</Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <h3 className="font-medium text-lg truncate">{provider.name}, {provider.credentials}</h3>
                      <p className="text-primary text-sm mb-3">{provider.specialty}</p>
                      
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span className="text-secondary">★</span>
                        <span className="font-medium text-foreground">{provider.rating.toFixed(1)}</span>
                        <span>({provider.reviewCount} reviews)</span>
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
