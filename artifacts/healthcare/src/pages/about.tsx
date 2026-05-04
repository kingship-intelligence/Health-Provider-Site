import { useGetStatsOverview } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  const { data: stats } = useGetStatsOverview();

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="pt-24 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About Restoration LLC</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are reimagining what psychiatric care can feel like. By pairing rigorous evidence-based treatment with the warmth and time mental health work actually deserves, we create a clinic experience patients return to with confidence.
          </p>
        </div>
      </section>
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
                  Restoration LLC was founded on a simple premise: mental health care shouldn't feel rushed, transactional, or cold.
                  When you are reaching out for help, you deserve a space that lets you slow down and be heard.
                </p>
                <p>
                  Our clinic is designed around calmness and transparency. Our psychiatrists and therapists are selected not only for their clinical excellence, but for their warmth and depth of presence.
                  We schedule longer visits, prescribe carefully, and coordinate therapy and medication as one connected plan.
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every conversation, evaluation, and treatment plan at Restoration LLC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-primary">I</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Deep Listening</h3>
              <p className="text-muted-foreground">We listen first. Understanding your story is just as important as reviewing your symptoms.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-primary">II</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Clinical Excellence</h3>
              <p className="text-muted-foreground">Warmth without expertise is not enough. Our clinicians are leaders in evidence-based psychiatric care.</p>
            </div>
            <div className="bg-card p-8 rounded-3xl border shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl text-primary">III</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Total Transparency</h3>
              <p className="text-muted-foreground">Clear explanations of your treatment plan, clear conversations about medication, and clear expectations every step.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
