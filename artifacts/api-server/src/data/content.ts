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
  topSpecialties?: string[];
  expertise?: string[];
  clientFocus?: {
    ages: string[];
    participants: string[];
    ethnicity?: string[];
  };
  treatmentApproach?: {
    therapyTypes: string[];
    other: string[];
  };
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
  sourceUrl?: string;
};

const CLINIC_ID = "loc_meridian";

export const providers: ProviderRecord[] = [
  {
    id: "p_olayemi_olajuyigbe",
    name: "Dr. Olayemi Olajuyigbe",
    credentials: "DNP, PMHNP-BC, CRNP",
    specialty: "Psychiatric Nurse Practitioner",
    bio: "Dr. Olayemi Olajuyigbe is a Board-Certified Psychiatric Nurse Practitioner with over 14 years of experience in health care services in the Baltimore/Washington DC area. A self-motivated outcome-oriented provider giving the best human support to life utilizing psychiatric skills with strong clinical experience through evidence-based practice. Providing medication management to children and adults. His focus is on restoring wellness to individuals and families with different psychiatric disorders through customized and holistic patient-centered care.",
    photoUrl: "/images/dr-olayemi.png",
    yearsExperience: 8,
    languages: ["English", "Yoruba"],
    education: ["DNP, University of South Alabama, 2020", "License: Maryland Board of Nursing — R211046", "Certificate: American Nurses Credentialing Center"],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.9,
    reviewCount: 184,
    featured: true,
    topSpecialties: ["Bipolar Disorder", "Medication Management", "ADHD"],
    expertise: [
      "Addiction", "Alcohol Use", "Anger Management", "Antisocial Personality", "Anxiety",
      "Autism", "Behavioral Issues", "Borderline Personality (BPD)", "Chronic Impulsivity",
      "Depression", "Dissociative Disorders (DID)", "Drug Abuse", "Dual Diagnosis",
      "Education and Learning Disabilities", "Emotional Disturbance", "Geriatric and Seniors",
      "Grief", "Impulse Control Disorders", "Mood Disorders", "Narcissistic Personality (NPD)",
      "Obsessive-Compulsive (OCD)", "Oppositional Defiance (ODD)", "Personality Disorders",
      "Psychosis", "Schizophrenia", "Schizoaffective Disorder", "Self Esteem",
      "Sleep or Insomnia", "Stress", "Substance Use", "Suicidal Ideation", "Teen Violence",
      "Testing and Evaluation", "Trauma and PTSD", "Veterans", "Weight Loss",
    ],
    clientFocus: {
      ages: ["Children (6 to 10)", "Preteen", "Teen", "Adults", "Elders (65+)"],
      participants: ["Individuals", "Couples", "Family"],
      ethnicity: ["Black and African American"],
    },
    treatmentApproach: {
      therapyTypes: ["Cognitive Behavioral (CBT)", "Emotionally Focused", "Interpersonal", "Person-Centered"],
      other: ["Intervention", "Medication Management", "Suboxone Clinic"],
    },
  },
  {
    id: "p_bolanle_olajuyigbe",
    name: "Dr. Bolanle Olajuyigbe",
    credentials: "DNP, PMHNP-BC",
    specialty: "Psychiatric Nurse Practitioner",
    bio: "Bolanle Olajuyigbe is a dedicated nursing educator and practitioner with a Doctor of Nursing Practice and specialized certifications in Psychiatry Mental Health, currently serving as Course Coordinator for NURS 131-C at UDC, with a focus on qualitative research on coping with stress in nursing school. Additionally, Dr. Olajuyigbe has extensive clinical experience at organizations such as Medstar Washington Hospital Center and Wexford Correctional Facility, and contributes to nursing education and community health initiatives in Washington, D.C.",
    photoUrl: "",
    yearsExperience: 11,
    languages: ["English"],
    education: [
      "Post Masters Certificate in Psychiatry Mental Health (PMHNP-BC), Magna Cum Laude, Walden University",
      "Doctor of Nursing Practice, Walden University",
      "Master of Science in Nursing: Nursing Education, Summa Cum Laude, Walden University",
      "Bachelor of Science in Nursing: Nursing Education, University of Ibadan, Nigeria",
    ],
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
    icon: "🧠",
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
    icon: "🌧️",
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
    icon: "⚖️",
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
    icon: "💭",
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
    icon: "🛡️",
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
    icon: "🔬",
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
    icon: "🌱",
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
    icon: "🔄",
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
    addressLine1: "2 E Rolling Crossroads",
    addressLine2: "Suite #207",
    city: "Catonsville",
    state: "MD",
    postalCode: "21228",
    phone: "(443) 851-9085",
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

export const insights: InsightRecord[] = [];

export const stats = {
  providerCount: providers.length,
  locationCount: locations.length,
  patientsServed: 6200,
  averageRating: 4.9,
  yearsInCommunity: 12,
  sameDayAvailability: true,
};
