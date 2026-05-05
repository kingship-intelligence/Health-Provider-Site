export type ProviderRecord = {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  bio: string;
  photoUrl: string;
  yearsExperience: number;
  languages: string[];
  education: string[];
  acceptingNewPatients: boolean;
  locationIds: string[];
  rating: number;
  reviewCount: number;
  featured?: boolean;
};

export type ServiceRecord = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  imageUrl: string;
  highlights: string[];
  conditionsTreated: string[];
};

export type LocationRecord = {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  imageUrl: string;
  hours: { day: string; opens: string; closes: string }[];
  services: string[];
};

export type TestimonialRecord = {
  id: string;
  patientName: string;
  patientLocation: string;
  rating: number;
  quote: string;
  serviceName: string;
  providerName: string;
};

export type InsightRecord = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  readMinutes: number;
  coverImageUrl: string;
  authorName: string;
  publishedAt: string;
};

const CLINIC_ID = "loc_meridian";

export const providers: ProviderRecord[] = [
  {
    id: "p_olayemi_olajuyigbe",
    name: "Dr. Olayemi Olajuyigbe",
    credentials: "MD",
    specialty: "Adult Psychiatry",
    bio: "Dr. Olayemi Olajuyigbe provides careful, evidence-based psychiatric care for adults managing mood, anxiety, and attention concerns. She is known for clear communication, thoughtful medication decisions, and an unhurried visit style.",
    photoUrl: "@assets/Dr_Olayemi_Olajuyigbe_1777996052596.png",
    yearsExperience: 14,
    languages: ["English"],
    education: ["MD, University of Ibadan", "Psychiatry Residency, University of Lagos"],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.9,
    reviewCount: 184,
    featured: true,
  },
  {
    id: "p_bolanle_olajuyigbe",
    name: "Dr. Bolanle Olajuyigbe",
    credentials: "MD",
    specialty: "Child & Adolescent Psychiatry",
    bio: "Dr. Bolanle Olajuyigbe supports children, teens, and families with compassionate psychiatric care. She emphasizes collaboration, practical treatment planning, and helping families feel informed at every step.",
    photoUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 11,
    languages: ["English"],
    education: ["MD, University of Lagos", "Child & Adolescent Psychiatry Fellowship"],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 5.0,
    reviewCount: 156,
    featured: true,
  },
];

export const services: ServiceRecord[] = [
  {
    id: "s_adhd",
    slug: "adhd",
    name: "ADHD",
    tagline: "Comprehensive assessment and treatment for Attention-Deficit/Hyperactivity Disorder",
    description:
      "We provide comprehensive psychiatric assessment and treatment for ADHD with careful attention to symptoms, functioning, and your goals.",
    icon: "ADHD",
    imageUrl:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Detailed diagnostic evaluation", "Medication management when appropriate", "Adult and adolescent care", "Coaching and behavioral support"],
    conditionsTreated: ["Inattention", "Hyperactivity", "Impulsivity", "Executive dysfunction"],
  },
  {
    id: "s_depression",
    slug: "major-depression",
    name: "Major Depression",
    tagline: "Evidence-based treatments for depressive disorders",
    description:
      "Evidence-based treatment for depressive disorders, including psychotherapy, medication management, and ongoing support.",
    icon: "Depression",
    imageUrl:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Psychiatric evaluation", "Medication management", "Therapy coordination", "Relapse prevention planning"],
    conditionsTreated: ["Persistent sadness", "Low motivation", "Sleep disruption", "Loss of interest"],
  },
  {
    id: "s_bipolar",
    slug: "bipolar-disorder",
    name: "Bipolar Disorder",
    tagline: "Specialized care for mood stabilization and management",
    description:
      "Specialized care focused on mood stabilization, diagnosis, and ongoing management for bipolar disorders.",
    icon: "Bipolar",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Mood monitoring", "Medication optimization", "Family education", "Long-term follow-up"],
    conditionsTreated: ["Bipolar I", "Bipolar II", "Hypomania", "Mania"],
  },
  {
    id: "s_anxiety",
    slug: "anxiety-disorders",
    name: "Anxiety Disorders",
    tagline: "Treatment for generalized anxiety, social phobia, and panic disorders",
    description:
      "Treatment for generalized anxiety, social phobia, and panic disorders with practical, evidence-based care.",
    icon: "Anxiety",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Anxiety assessment", "CBT-informed treatment planning", "Medication support", "Panic management strategies"],
    conditionsTreated: ["Generalized anxiety", "Social phobia", "Panic disorder", "Phobias"],
  },
  {
    id: "s_ptsd",
    slug: "ptsd",
    name: "PTSD",
    tagline: "Trauma-informed care for Post-Traumatic Stress Disorder",
    description:
      "Trauma-informed psychiatric care for Post-Traumatic Stress Disorder with sensitivity, structure, and support.",
    icon: "PTSD",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Trauma-informed evaluations", "Safety-first treatment approach", "Medication management", "Therapy referral support"],
    conditionsTreated: ["PTSD", "Acute stress", "Trauma-related symptoms"],
  },
  {
    id: "s_schizophrenia",
    slug: "schizophrenia",
    name: "Schizophrenia",
    tagline: "Comprehensive treatment plans for psychotic disorders",
    description:
      "Comprehensive treatment plans for psychotic disorders, centered on stabilization, continuity, and family support.",
    icon: "Psychosis",
    imageUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Diagnostic clarity", "Ongoing medication management", "Care coordination", "Supportive family communication"],
    conditionsTreated: ["Schizophrenia", "Psychosis", "Schizoaffective disorder"],
  },
  {
    id: "s_substance",
    slug: "substance-abuse",
    name: "Substance Abuse",
    tagline: "Support and treatment for substance use disorders",
    description:
      "Support and treatment for substance use disorders with a compassionate, nonjudgmental approach.",
    icon: "Recovery",
    imageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Recovery-focused planning", "Medication support", "Relapse prevention", "Integrated treatment referrals"],
    conditionsTreated: ["Alcohol use disorder", "Opioid use disorder", "Substance misuse"],
  },
  {
    id: "s_ocd",
    slug: "ocd",
    name: "OCD",
    tagline: "Specialized approaches for Obsessive-Compulsive Disorder",
    description:
      "Specialized psychiatric approaches for Obsessive-Compulsive Disorder, including careful diagnosis and coordinated treatment.",
    icon: "OCD",
    imageUrl:
      "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Thoughtful assessment", "Medication management", "Therapy collaboration", "Symptom monitoring"],
    conditionsTreated: ["Obsessions", "Compulsions", "Intrusive thoughts"],
  },
];

export const locations: LocationRecord[] = [
  {
    id: CLINIC_ID,
    name: "Restoration LLC",
    addressLine1: "412 Linden Avenue",
    addressLine2: "Suite 200",
    city: "North Park",
    state: "OR",
    postalCode: "97214",
    phone: "(503) 555-0148",
    imageUrl:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    hours: [
      { day: "Monday", opens: "08:00", closes: "19:00" },
      { day: "Tuesday", opens: "08:00", closes: "19:00" },
      { day: "Wednesday", opens: "08:00", closes: "19:00" },
      { day: "Thursday", opens: "08:00", closes: "19:00" },
      { day: "Friday", opens: "08:00", closes: "17:00" },
      { day: "Saturday", opens: "09:00", closes: "14:00" },
      { day: "Sunday", opens: "Closed", closes: "Closed" },
    ],
    services: ["ADHD", "Major Depression", "Bipolar Disorder", "Anxiety Disorders", "PTSD", "Schizophrenia", "Substance Abuse", "OCD"],
  },
];

export const testimonials: TestimonialRecord[] = [
  {
    id: "t_1",
    patientName: "Elena Marquez",
    patientLocation: "North Park",
    rating: 5,
    quote:
      "For the first time in years, I left a psychiatry appointment feeling like someone actually heard me. My teen looks forward to seeing Dr. Bolanle, which I never thought I'd say.",
    serviceName: "Child & Adolescent Psychiatry",
    providerName: "Dr. Bolanle Olajuyigbe",
  },
  {
    id: "t_2",
    patientName: "Owen Whittaker",
    patientLocation: "North Park",
    rating: 5,
    quote:
      "I came in scared about starting medication. Dr. Olayemi walked me through every option, every trade-off, and never rushed me. Calm, kind, and incredibly competent.",
    serviceName: "Adult Psychiatry",
    providerName: "Dr. Olayemi Olajuyigbe",
  },
];

const insightBody = (paragraphs: string[]) => paragraphs.join("\n\n");

export const insights: InsightRecord[] = [
  {
    id: "i_sleep_health",
    slug: "the-quiet-medicine-of-sleep",
    title: "The Quiet Medicine of Sleep",
    excerpt:
      "If we could prescribe one thing to almost every patient who walks through our doors, it would not be a pill — it would be a full night of sleep.",
    body: insightBody([
      "Sleep is the most underrated intervention in mental health. We tend to look for the next supplement, the next routine, the next medication — when our minds are quietly asking us for something far simpler.",
      "Adults need seven to nine hours of consistent sleep to support mood regulation, attention, and emotional resilience. Even a single short night can change how the brain responds to stress and reward.",
      "If you are struggling, the smallest changes often help most: keep a steady wake time, dim the lights an hour before bed, and treat your bedroom like the quietest room in the house. If sleep does not improve, talk to your psychiatrist — there may be more going on, and we can help.",
    ]),
    category: "Wellness",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Olayemi Olajuyigbe",
    publishedAt: "2026-04-12T10:00:00.000Z",
  },
];

export const stats = {
  providerCount: providers.length,
  locationCount: locations.length,
  patientsServed: 6200,
  averageRating: 4.9,
  yearsInCommunity: 12,
  sameDayAvailability: true,
};
