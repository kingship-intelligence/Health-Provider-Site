import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { insuranceLogos } from "@/lib/insurance-logos";

const acceptedInsurance = [
  "Aetna",
  "Amerigroup",
  "Aetna Medicaid",
  "Cigna",
  "Johns Hopkins HealthCare",
  "Priority Partners",
  "MD Physicians Care",
  "Medicare",
  "United Healthcare",
  "University of MD Health Plans",
  "Medstar Medicaid",
  "Medicaid of Maryland",
  "CareFirst BCBS",
  "Tricare",
  "UHC",
];

const medicaidProviders = [
  "United Healthcare",
  "Medicare",
  "University of Maryland Medical System Health Plans",
  "Aetna",
  "Cigna",
  "Johns Hopkins Medicine",
  "AmeriSolutions",
  "Johns Hopkins Healthcare",
];

const infoCards = [
  {
    title: "Verifying Your Insurance",
    description:
      "We recommend contacting your insurance provider directly to verify your mental health benefits and coverage details before your appointment.",
  },
  {
    title: "Billing & Payments",
    description:
      "We will bill your insurance company directly for services rendered. Any copayments, deductibles, or coinsurance are due at the time of service.",
  },
  {
    title: "Questions About Coverage?",
    description:
      "Our administrative staff is available to help answer questions about insurance coverage and payment options. Contact us for assistance.",
  },
];

export default function Insurance() {
  const renderInsuranceCard = (name: string, i: number) => {
    const logo = insuranceLogos[name];

    return (
      <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
        <Card className="border-none bg-card shadow-sm rounded-2xl h-full">
          <CardContent className="p-5 flex min-h-[100px] flex-col items-center justify-center gap-3 text-center">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="max-h-12 max-w-[140px] object-contain" />
            ) : null}
            <p className="font-medium">{name}</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <section className="pt-24 pb-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Accepted Insurance Providers</h1>
          <p className="text-lg text-muted-foreground">
            We partner with major insurance companies to ensure you receive the care you need
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-10 text-center">Insurance Plans</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {acceptedInsurance.map(renderInsuranceCard)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-10 text-center">Medicaid Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {medicaidProviders.map(renderInsuranceCard)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">Insurance Information</h2>
            <p className="text-muted-foreground text-lg">Understanding your coverage and benefits</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infoCards.map((card) => (
              <Card key={card.title} className="border-none bg-muted/30 rounded-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8">Contact Us About Coverage</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
