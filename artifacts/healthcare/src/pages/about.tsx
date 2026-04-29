import { useGetStatsOverview } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  const { data: stats } = useGetStatsOverview();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About Meridian Health</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are reimagining neighborhood healthcare. By combining modern clinical excellence with warm, intentional hospitality, we create a healthcare experience you actually look forward to.
          </p>
        </div>
      </section>

      {/* Image / Story block */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/about.jpg" alt="Doctor consulting patient" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">A new standard of care</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Meridian Health was founded on a simple premise: healthcare shouldn't feel clinical. 
                  When you are vulnerable, sick, or seeking guidance, you deserve an environment that puts you at ease.
                </p>
                <p>
                  Our clinics are designed around calmness and transparency. Our providers are selected not just for their clinical excellence, but for their bedside manner and empathy. 
                  We don't rush appointments. We don't overbook our waiting rooms. We simply provide the care you and your family deserve.
                </p>
              </div>
              
              <div className="mt-10">
                <Link href="/providers">
                  <Button size="lg" className="rounded-full px-8">Meet Our Providers</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats && (
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-16">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="text-5xl font-serif mb-3">{stats.patientsServed.toLocaleString()}+</p>
                <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">Patients Served</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <p className="text-5xl font-serif mb-3">{stats.providerCount}</p>
                <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">Expert Providers</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <p className="text-5xl font-serif mb-3">{stats.yearsInCommunity}</p>
                <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">Years in Community</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <p className="text-5xl font-serif mb-3">{stats.averageRating.toFixed(1)}/5</p>
                <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">Average Rating</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every interaction, diagnosis, and treatment plan at Meridian Health.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-medium mb-3">Deep Empathy</h3>
              <p className="text-muted-foreground">We listen first. We believe understanding your life context is just as important as reading your chart.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                🔬
              </div>
              <h3 className="text-xl font-medium mb-3">Clinical Excellence</h3>
              <p className="text-muted-foreground">Warmth without expertise is not enough. Our providers are leaders in their respective fields.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                شف
              </div>
              <h3 className="text-xl font-medium mb-3">Total Transparency</h3>
              <p className="text-muted-foreground">Clear explanations of your health, clear pricing, and clear expectations for your care journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
