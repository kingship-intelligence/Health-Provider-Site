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
    id: "p_amelia_chen",
    name: "Dr. Amelia Chen",
    credentials: "MD",
    specialty: "Adult Psychiatry",
    bio: "Dr. Chen has spent fifteen years helping adults navigate anxiety, depression, and life transitions. She believes the best psychiatric care begins with listening — slowly, carefully, and without rushing — and combines thoughtful medication management with a deep respect for each patient's story.",
    photoUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 15,
    languages: ["English", "Mandarin"],
    education: [
      "MD, Stanford University School of Medicine",
      "Psychiatry Residency, UCSF",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.9,
    reviewCount: 312,
    featured: true,
  },
  {
    id: "p_marcus_okafor",
    name: "Dr. Marcus Okafor",
    credentials: "MD, MPH",
    specialty: "Adult Psychiatry",
    bio: "Dr. Okafor focuses on mood disorders, ADHD, and the intersection of physical and mental health. He partners with patients on the long arc of their wellbeing — never rushing toward a prescription before truly understanding the picture.",
    photoUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 12,
    languages: ["English", "Yoruba"],
    education: [
      "MD, Johns Hopkins University",
      "Psychiatry Residency, Massachusetts General Hospital",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.8,
    reviewCount: 248,
    featured: true,
  },
  {
    id: "p_sofia_rivera",
    name: "Dr. Sofia Rivera",
    credentials: "MD",
    specialty: "Child & Adolescent Psychiatry",
    bio: "From early childhood through the teen years, Dr. Rivera is the warm, calm presence families remember. She is bilingual and known for her ability to make even the most anxious child feel heard, while gently guiding parents alongside.",
    photoUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 10,
    languages: ["English", "Spanish"],
    education: [
      "MD, University of Pennsylvania",
      "Child & Adolescent Psychiatry Fellowship, Boston Children's Hospital",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 5.0,
    reviewCount: 421,
    featured: true,
  },
  {
    id: "p_priya_anand",
    name: "Dr. Priya Anand",
    credentials: "PsyD",
    specialty: "Clinical Psychology",
    bio: "Dr. Anand is a clinical psychologist specializing in cognitive behavioral therapy, EMDR, and trauma-focused care. Her approach is structured, compassionate, and grounded in what the evidence actually shows.",
    photoUrl:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 9,
    languages: ["English", "Hindi", "Punjabi"],
    education: [
      "PsyD, Columbia University",
      "Clinical Internship, NYU Langone",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.9,
    reviewCount: 156,
    featured: true,
  },
  {
    id: "p_david_park",
    name: "Dr. David Park",
    credentials: "DO",
    specialty: "Adult Psychiatry",
    bio: "Dr. Park integrates therapy and medication management with a quiet, grounded presence. His patients describe their visits as 'finally feeling heard.' He focuses on depression, OCD, and treatment-resistant conditions.",
    photoUrl:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 14,
    languages: ["English", "Korean"],
    education: [
      "DO, Philadelphia College of Osteopathic Medicine",
      "Psychiatry Residency, UCLA",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 5.0,
    reviewCount: 273,
  },
  {
    id: "p_natalie_brooks",
    name: "Natalie Brooks",
    credentials: "LCSW",
    specialty: "Psychotherapy",
    bio: "Natalie is a licensed clinical social worker offering individual therapy for adults navigating anxiety, grief, and life transitions. Her style is warm, direct, and deeply collaborative.",
    photoUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 11,
    languages: ["English"],
    education: [
      "MSW, Smith College School for Social Work",
      "Licensed Clinical Social Worker (LCSW)",
    ],
    acceptingNewPatients: true,
    locationIds: [CLINIC_ID],
    rating: 4.9,
    reviewCount: 142,
  },
];

export const services: ServiceRecord[] = [
  {
    id: "s_adult_psychiatry",
    slug: "adult-psychiatry",
    name: "Adult Psychiatry",
    tagline: "Thoughtful psychiatric care for adults",
    description:
      "Comprehensive psychiatric evaluation and treatment for adults navigating depression, anxiety, ADHD, OCD, bipolar disorder, and more. We schedule longer visits than most clinics so we can actually understand what is going on.",
    icon: "stethoscope",
    imageUrl:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "60-minute initial evaluations",
      "30-minute follow-ups, never rushed",
      "Coordinated medication management",
      "Direct messaging with your care team",
    ],
    conditionsTreated: [
      "Depression",
      "Anxiety disorders",
      "ADHD",
      "OCD",
      "Bipolar disorder",
      "Treatment-resistant conditions",
    ],
  },
  {
    id: "s_child_psychiatry",
    slug: "child-and-adolescent-psychiatry",
    name: "Child & Adolescent Psychiatry",
    tagline: "Specialized mental health care for kids and teens",
    description:
      "Warm, attentive psychiatric care for children and adolescents, with parents fully involved in the process. We work alongside schools and pediatricians to make sure care feels coordinated, not fragmented.",
    icon: "baby",
    imageUrl:
      "https://images.unsplash.com/photo-1632053002434-0489c8932bb3?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Ages 6 through 21",
      "Bilingual providers available",
      "Parent and caregiver coaching",
      "School and pediatrician coordination",
    ],
    conditionsTreated: [
      "ADHD evaluations",
      "Childhood anxiety",
      "Adolescent depression",
      "Behavioral concerns",
      "Mood disorders",
    ],
  },
  {
    id: "s_therapy",
    slug: "therapy-and-psychotherapy",
    name: "Therapy & Psychotherapy",
    tagline: "Evidence-based talk therapy",
    description:
      "Individual therapy with licensed psychologists and clinical social workers. We match you with a therapist whose style and specialty fit your goals — no guessing, no shuffling.",
    icon: "message-circle",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Cognitive Behavioral Therapy (CBT)",
      "EMDR for trauma",
      "Acceptance and Commitment Therapy (ACT)",
      "Personalized therapist matching",
    ],
    conditionsTreated: [
      "Anxiety and depression",
      "Trauma and PTSD",
      "Grief and loss",
      "Stress and burnout",
      "Life transitions",
    ],
  },
  {
    id: "s_medication_management",
    slug: "medication-management",
    name: "Medication Management",
    tagline: "Careful, conservative, and clear",
    description:
      "Ongoing psychiatric medication management with the time and attention this work deserves. We explain trade-offs honestly, adjust thoughtfully, and never prescribe before we understand the full picture.",
    icon: "pill",
    imageUrl:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Conservative, evidence-based prescribing",
      "Telehealth follow-ups available",
      "Coordinated with your therapist",
      "Plain-language explanations of options",
    ],
    conditionsTreated: [
      "Antidepressant management",
      "Stimulant management for ADHD",
      "Mood stabilizer optimization",
      "Anti-anxiety treatment",
      "Genetic testing guidance",
    ],
  },
  {
    id: "s_adhd",
    slug: "adhd-evaluation-and-treatment",
    name: "ADHD Evaluation & Treatment",
    tagline: "Clarity, then a plan",
    description:
      "Comprehensive ADHD evaluations for adolescents and adults, followed by a personalized treatment plan combining behavioral strategies, coaching, and — when appropriate — medication.",
    icon: "compass",
    imageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Structured diagnostic interviews",
      "Validated rating scales",
      "Adult and adolescent evaluations",
      "Coordinated coaching support",
    ],
    conditionsTreated: [
      "Adult ADHD",
      "Adolescent ADHD",
      "Executive function challenges",
      "Co-occurring anxiety",
      "Workplace accommodations",
    ],
  },
  {
    id: "s_trauma",
    slug: "trauma-and-ptsd-care",
    name: "Trauma & PTSD Care",
    tagline: "Specialized support for the hardest experiences",
    description:
      "Trauma-focused therapy delivered by clinicians specifically trained in evidence-based modalities. We move at your pace, with care and skill.",
    icon: "shield",
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "EMDR-trained clinicians",
      "Trauma-focused CBT",
      "Phased, paced approach",
      "Coordinated psychiatric support",
    ],
    conditionsTreated: [
      "PTSD",
      "Complex trauma",
      "Childhood trauma",
      "Acute stress reactions",
      "Grief and loss",
    ],
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
    services: [
      "Adult Psychiatry",
      "Child & Adolescent Psychiatry",
      "Therapy & Psychotherapy",
      "Medication Management",
      "ADHD Evaluation",
      "Trauma & PTSD Care",
    ],
  },
];

export const testimonials: TestimonialRecord[] = [
  {
    id: "t_1",
    patientName: "Elena Marquez",
    patientLocation: "North Park",
    rating: 5,
    quote:
      "For the first time in years, I left a psychiatry appointment feeling like someone actually heard me. My teen looks forward to seeing Dr. Rivera, which I never thought I'd say.",
    serviceName: "Child & Adolescent Psychiatry",
    providerName: "Dr. Sofia Rivera",
  },
  {
    id: "t_2",
    patientName: "Owen Whittaker",
    patientLocation: "Riverside",
    rating: 5,
    quote:
      "I came in scared about starting medication. Dr. Okafor walked me through every option, every trade-off, and never rushed me. Calm, kind, and incredibly competent.",
    serviceName: "Adult Psychiatry",
    providerName: "Dr. Marcus Okafor",
  },
  {
    id: "t_3",
    patientName: "Priya Shah",
    patientLocation: "Eastgate",
    rating: 5,
    quote:
      "Therapy and medication management under one roof, and they actually talk to each other. It feels like my care is finally a team effort, not a stack of disconnected appointments.",
    serviceName: "Medication Management",
    providerName: "Dr. David Park",
  },
  {
    id: "t_4",
    patientName: "James Holloway",
    patientLocation: "North Park",
    rating: 5,
    quote:
      "After years of half-hearted ADHD care, this was the first place that took the time to really evaluate me. The plan they built actually fits my life.",
    serviceName: "ADHD Evaluation & Treatment",
    providerName: "Dr. Amelia Chen",
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
    authorName: "Dr. Amelia Chen",
    publishedAt: "2026-04-12T10:00:00.000Z",
  },
  {
    id: "i_anxiety",
    slug: "talking-to-your-doctor-about-anxiety",
    title: "Talking to Your Psychiatrist About Anxiety",
    excerpt:
      "Bringing up anxiety can feel harder than it should. Here is how to start the conversation, and what to expect once you do.",
    body: insightBody([
      "Anxiety shows up in many forms — racing thoughts, sleep that won't settle, a tight chest, or a nervous system that just won't downshift. None of these are weakness. They are signals that deserve attention.",
      "When you bring it up with your psychiatrist, you do not need the perfect words. Saying 'I have not felt like myself' is enough to start. Together you can decide whether therapy, medication, lifestyle adjustments, or some combination is the right next step for you.",
      "If you are unsure where to begin, schedule an evaluation with one of our psychiatrists. We will take the time to understand the full picture before recommending anything.",
    ]),
    category: "Anxiety",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. David Park",
    publishedAt: "2026-04-04T10:00:00.000Z",
  },
  {
    id: "i_kids_screen_time",
    slug: "screen-time-and-young-kids-a-realistic-guide",
    title: "Screen Time and Young Kids: A Realistic Guide",
    excerpt:
      "Forget the guilt. Here's a calm, evidence-based approach families can actually live with.",
    body: insightBody([
      "Screens are part of modern life — and that is okay. The question is not 'all or none,' but 'when, how, and what.' Co-watching, predictable limits, and protecting sleep are far more important than the exact number of minutes.",
      "Young brains learn best through faces, language, movement, and play. Build a daily rhythm where screens are one ingredient — not the main course — and watch how naturally things settle.",
      "If a screen routine has slipped or feels out of control, our child psychiatry team can help you reset, without judgment.",
    ]),
    category: "Pediatrics",
    readMinutes: 3,
    coverImageUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Sofia Rivera",
    publishedAt: "2026-03-21T10:00:00.000Z",
  },
  {
    id: "i_adhd_adult",
    slug: "adult-adhd-when-the-pieces-finally-click",
    title: "Adult ADHD: When the Pieces Finally Click",
    excerpt:
      "More adults are recognizing ADHD in themselves than ever before. Here is what evaluation actually looks like — and what comes next.",
    body: insightBody([
      "Many adults arrive in our office having spent years feeling 'different' without a name for it. A proper ADHD evaluation is structured, takes time, and considers other conditions that can look similar.",
      "Treatment is rarely just medication. Coaching, structure, accommodations, and therapy all play a role — and the best plans combine several of them.",
      "If you have been wondering whether ADHD is part of your story, an evaluation can bring real clarity, even if the answer is no.",
    ]),
    category: "ADHD",
    readMinutes: 5,
    coverImageUrl:
      "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Amelia Chen",
    publishedAt: "2026-03-08T10:00:00.000Z",
  },
  {
    id: "i_meds",
    slug: "what-to-expect-when-starting-an-antidepressant",
    title: "What to Expect When Starting an Antidepressant",
    excerpt:
      "Starting medication is a big decision. Here is an honest, plain-language guide to what the first few weeks usually look like.",
    body: insightBody([
      "Antidepressants don't work like an off-switch for sadness. Most people notice subtle changes in sleep, appetite, or energy first, with mood improvements following over several weeks.",
      "Side effects are usually mild and often improve. Stay in close contact with your psychiatrist during the first month — small adjustments can make a meaningful difference.",
      "If you have questions, please ask. There is no such thing as a wrong question when you are deciding whether and how to take a medication.",
    ]),
    category: "Medication",
    readMinutes: 5,
    coverImageUrl:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Marcus Okafor",
    publishedAt: "2026-02-22T10:00:00.000Z",
  },
  {
    id: "i_trauma",
    slug: "trauma-therapy-what-actually-helps",
    title: "Trauma Therapy: What Actually Helps",
    excerpt:
      "Modern trauma care is gentler, more structured, and more effective than what most people imagine.",
    body: insightBody([
      "Effective trauma therapy doesn't require reliving every detail of what happened. Modalities like EMDR and trauma-focused CBT are paced, structured, and proven to help.",
      "The first step is feeling safe in the room with your clinician. We move at your pace, and we never push you somewhere you are not ready to go.",
      "If you have been carrying something heavy for a long time, please know there is a path forward — and it is gentler than you might think.",
    ]),
    category: "Trauma",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Priya Anand",
    publishedAt: "2026-02-10T10:00:00.000Z",
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
