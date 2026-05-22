import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact, useListLocations } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: locations } = useListLocations();
  const submitContact = useSubmitContact();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    submitContact.mutate(
      { data: values },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have a question? We're here to help. Send us a message or reach out to our clinic directly.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Section */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Send a Message</h2>
            
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <Card className="border-none shadow-md bg-card rounded-3xl overflow-hidden">
                  <div className="bg-primary p-6 text-primary-foreground text-center">
                    <h3 className="text-2xl font-serif">Message Sent</h3>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                      ✓
                    </div>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                    <Button onClick={() => { setIsSuccess(false); form.reset(); }} variant="outline" className="rounded-full">
                      Send another message
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-3xl border shadow-sm">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input className="h-12 bg-muted/50 border-transparent focus-visible:bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" className="h-12 bg-muted/50 border-transparent focus-visible:bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" className="h-12 bg-muted/50 border-transparent focus-visible:bg-background" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What is this regarding?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-muted/50 border-transparent">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="billing">Billing & Insurance</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                            <SelectItem value="medical_records">Medical Records</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            className="min-h-[150px] bg-muted/50 border-transparent focus-visible:bg-background resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-full text-base"
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    For medical emergencies, please dial 911 immediately. Do not use this form for urgent medical concerns.
                  </p>
                </form>
              </Form>
            )}
          </div>

          {/* Locations Section */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Our Clinics</h2>
            <div className="space-y-6">
              {locations?.map(location => (
                <Card key={location.id} className="border-none bg-muted/30 rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{location.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {location.addressLine1}
                      {location.addressLine2 ? `, ${location.addressLine2}` : ""}
                      <br />
                      {location.city}, {location.state} {location.postalCode}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{location.phone}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 overflow-hidden rounded-3xl border bg-card shadow-sm">
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">Find Us</h3>
                <p className="text-muted-foreground">
                  2 E Rolling Crossroads, Suite #207, Catonsville, MD 21228
                </p>
              </div>
              <iframe
                title="Map to Restoration LLC"
                src="https://www.google.com/maps?q=2%20E%20Rolling%20Crossroads%20Suite%20207%20Catonsville%20MD%2021228&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
