import {
  useGetStatsOverview,
  useListServices,
  useListTestimonials,
} from "@workspace/api-client-react";
import { Link } from "wouter";
import { APPOINTMENT_REQUEST_URL } from "@/lib/site-links";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HomeChatbot } from "@/components/home-chatbot";
import { formatFixed, formatNumber, toSafeNumber } from "@/lib/format-number";
import { insuranceLogos } from "@/lib/insurance-logos";

const sectionViewport = { once: true, amount: 0.2 };

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featuredInsurance = [
  "Aetna",
  "Cigna",
  "United Healthcare",
  "CareFirst BCBS",
  "Medicare",
  "Medicaid of Maryland",
  "Johns Hopkins HealthCare",
  "Tricare",
];

export default function Home() {
  const { data: stats } = useGetStatsOverview();
  const { data: services } = useListServices();
  const { data: testimonials } = useListTestimonials();
  const statsOverview = {
    patientsServed: formatNumber(stats?.patientsServed),
    providerCount: toSafeNumber(stats?.providerCount),
    yearsInCommunity: toSafeNumber(stats?.yearsInCommunity),
    averageRating: formatFixed(stats?.averageRating, 1),
  };

  return (
    <div className="flex flex-col">
      <section className="relative pt-24 pb-32 overflow-hidden bg-muted">
        <div className="absolute inset-0 z-0">
          <motion.img
            src="/images/hero.jpg"
            alt="Modern clinic waiting room"
            className="w-full h-full object-cover opacity-20"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        <motion.div
          className="absolute right-10 top-24 z-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-10 left-12 z-0 h-32 w-32 rounded-full bg-secondary/25 blur-3xl"
          animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              Let's Create Your Path <span className="text-primary italic">To Wellness</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl text-muted-foreground mb-8">
              At Restoration LLC, we provide personalized psychiatric care that helps you restore balance and find your path to mental wellness. Your journey to better mental health starts here.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href={APPOINTMENT_REQUEST_URL} target="_blank" rel="noreferrer">
                  <Button size="lg" className="text-base h-14 px-8 rounded-full">Request Appointment</Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact"><Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-background/50 backdrop-blur">Contact Us</Button></Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={staggerContainer}>
            <motion.div variants={fadeInUp} transition={{ duration: 0.45 }}>
              <p className="text-4xl font-serif mb-2">{statsOverview.patientsServed}+</p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Patients Served</p>
            </motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.45 }}><p className="text-4xl font-serif mb-2">{statsOverview.providerCount}</p><p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Psychiatrists & Therapists</p></motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.45 }}><p className="text-4xl font-serif mb-2">{statsOverview.yearsInCommunity}</p><p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Years in Community</p></motion.div>
            <motion.div variants={fadeInUp} transition={{ duration: 0.45 }}>
              <p className="text-4xl font-serif mb-2">{statsOverview.averageRating}/5</p>
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">Average Rating</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">We offer medication management for the conditions we treat and psychotherapy services to support mental wellness.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services?.map((service, i) => (
              <motion.div key={service.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: i * 0.07, duration: 0.45 }} whileHover={{ y: -6, scale: 1.02 }}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-none bg-card group overflow-hidden rounded-2xl"><CardContent className="p-8"><h3 className="text-xl font-medium mb-2">{service.name}</h3><p className="text-muted-foreground">{service.tagline}</p></CardContent></Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h2 className="text-3xl md:text-4xl font-serif mb-12" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeInUp} transition={{ duration: 0.5 }}>Don't just take our word for it</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: i * 0.15, duration: 0.45 }} whileHover={{ y: -4 }} className="bg-card p-8 rounded-3xl text-left shadow-sm border">
                <div className="flex text-secondary mb-4">{[...Array(t.rating)].map((_, j) => (<span key={j}>★</span>))}</div>
                <p className="text-lg text-foreground italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4"><Avatar><AvatarFallback className="bg-primary/10 text-primary">{t.patientName[0]}</AvatarFallback></Avatar><div><p className="font-medium text-sm">{t.patientName}</p><p className="text-xs text-muted-foreground">{t.serviceName} Patient</p></div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-10" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Insurance We Accept</h2>
            <p className="text-muted-foreground text-lg">We partner with major insurance companies to ensure you receive the care you need</p>
          </motion.div>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={staggerContainer}>
            {featuredInsurance.map((name) => (
              <motion.div key={name} variants={fadeInUp} transition={{ duration: 0.35 }} whileHover={{ y: -3, scale: 1.03 }} className="bg-card border rounded-2xl px-5 py-4 text-sm font-medium shadow-sm flex min-h-[108px] flex-col items-center justify-center gap-3">
                <img src={insuranceLogos[name]} alt={`${name} logo`} className="max-h-12 max-w-[140px] object-contain" />
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeInUp} transition={{ duration: 0.45 }} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link href="/insurance"><Button variant="outline" size="lg" className="rounded-full px-8">View All Accepted Insurance</Button></Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <motion.div className="container mx-auto px-4 text-center max-w-2xl" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Work Hours</h2>
          <motion.div className="space-y-3 text-lg" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={staggerContainer}>
            <motion.p variants={fadeInUp} transition={{ duration: 0.35 }} className="flex justify-between max-w-sm mx-auto"><span className="text-muted-foreground">Mon – Fri</span><span className="font-medium">9am – 9pm</span></motion.p>
            <motion.p variants={fadeInUp} transition={{ duration: 0.35 }} className="flex justify-between max-w-sm mx-auto"><span className="text-muted-foreground">Sat</span><span className="font-medium">10am – 4pm</span></motion.p>
            <motion.p variants={fadeInUp} transition={{ duration: 0.35 }} className="flex justify-between max-w-sm mx-auto"><span className="text-muted-foreground">Sun</span><span className="font-medium">Closed</span></motion.p>
          </motion.div>
        </motion.div>
      </section>
      <HomeChatbot />
    </div>
  );
}
