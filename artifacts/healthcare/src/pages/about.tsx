import { useGetStatsOverview } from "@workspace/api-client-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  ["Respect", "Treating every patient with dignity and honoring their individual journey"],
  ["Empathy", "Understanding and sharing the feelings of our patients"],
  ["Support", "Providing comprehensive care throughout the treatment process"],
  ["Reliable", "Consistent, dependable care you can count on"],
  ["Timely", "Respecting your time with prompt and efficient service"],
  ["Outstanding", "Committed to excellence in all aspects of care"],
  ["Accessible", "Making our services available to those who need them"],
  ["Immaculate", "Maintaining the highest standards of care and professionalism"],
];

export default function About() {
  const { data: stats } = useGetStatsOverview();

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="pt-24 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">About Us</h1>
          <p className="text-2xl font-serif text-primary mb-6">20+ Years Caring About You</p>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>Welcome to Restoration LLC!</p>
            <p>Where Mental Health services are provided for optimum wellness through Evidence-based practice. We have clinic visits and a telehealth platform that enables our providers to connect with clients through video/audio. We have created a clinical experience that truly meets patients where they are on a platform that is easy to use for both clinicians and patients.</p>
            <p>We are committed to delivering fast, reliable, and efficient service to clients in the comfort of their homes.</p>
            <p>We have created a platform in revolutionizing the mental health services.</p>
            <p>All client provider communications are protected via security and encryption technology.</p>
            <p>Strict adherence to HIPAA BAA regulations and ethics regarding confidentiality maintained.</p>
            <p>We provide outpatient mental health services to ages ranging from 6 years to Geriatric Population.</p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <img src="/images/about.jpg" alt="Restoration LLC team" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full md:w-1/2 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Restoration LLC Team</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>Our care is built around calm, evidence-based treatment and a patient experience designed to feel safe, clear, and supportive.</p>
                <p>We believe mental health care should be accessible, secure, and centered on dignity at every step.</p>
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map(([title, desc]) => (
              <div key={title} className="bg-card p-6 rounded-3xl border shadow-sm">
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
