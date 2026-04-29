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

export const providers: ProviderRecord[] = [
  {
    id: "p_amelia_chen",
    name: "Dr. Amelia Chen",
    credentials: "MD, FAAFP",
    specialty: "Family Medicine",
    bio: "Dr. Chen has spent fifteen years caring for families across three generations. She believes the best medicine starts with listening — slowly, carefully, and without rushing — and that the smallest details patients notice are usually the most important ones.",
    photoUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 15,
    languages: ["English", "Mandarin"],
    education: [
      "MD, Stanford University School of Medicine",
      "Family Medicine Residency, UCSF",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_north_park", "loc_riverside"],
    rating: 4.9,
    reviewCount: 312,
    featured: true,
  },
  {
    id: "p_marcus_okafor",
    name: "Dr. Marcus Okafor",
    credentials: "MD, MPH",
    specialty: "Internal Medicine",
    bio: "Dr. Okafor focuses on preventive internal medicine, with a special interest in metabolic and cardiovascular health. He partners with patients on the long arc of their wellbeing — not just the next visit.",
    photoUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 12,
    languages: ["English", "Yoruba"],
    education: [
      "MD, Johns Hopkins University",
      "MPH, Harvard T.H. Chan School of Public Health",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_north_park"],
    rating: 4.8,
    reviewCount: 248,
    featured: true,
  },
  {
    id: "p_sofia_rivera",
    name: "Dr. Sofia Rivera",
    credentials: "MD, FAAP",
    specialty: "Pediatrics",
    bio: "From newborn checkups to teenage transitions, Dr. Rivera is the warm, calm presence families remember for years. She is bilingual and known for her ability to make the most anxious child feel at ease.",
    photoUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 10,
    languages: ["English", "Spanish"],
    education: [
      "MD, University of Pennsylvania",
      "Pediatrics Residency, Boston Children's Hospital",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_riverside", "loc_eastgate"],
    rating: 5.0,
    reviewCount: 421,
    featured: true,
  },
  {
    id: "p_henry_lindgren",
    name: "Dr. Henry Lindgren",
    credentials: "MD",
    specialty: "Cardiology",
    bio: "Dr. Lindgren brings two decades of cardiology experience and a deep commitment to translating complex heart conditions into clear, actionable plans patients can actually live with.",
    photoUrl:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 22,
    languages: ["English", "Swedish"],
    education: [
      "MD, Yale School of Medicine",
      "Cardiology Fellowship, Mayo Clinic",
    ],
    acceptingNewPatients: false,
    locationIds: ["loc_north_park"],
    rating: 4.9,
    reviewCount: 189,
  },
  {
    id: "p_priya_anand",
    name: "Dr. Priya Anand",
    credentials: "MD",
    specialty: "Women's Health",
    bio: "Dr. Anand is committed to whole-person women's health across every life stage — from first visits to menopause and beyond — with a soft-spoken, evidence-first style.",
    photoUrl:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 9,
    languages: ["English", "Hindi", "Punjabi"],
    education: [
      "MD, Columbia University",
      "OB/GYN Residency, NYU Langone",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_eastgate"],
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "p_david_park",
    name: "Dr. David Park",
    credentials: "DO",
    specialty: "Behavioral Health",
    bio: "Dr. Park integrates therapy and medication with a quiet, grounded presence. His patients describe their visits as 'finally feeling heard.' He works closely with primary care to ensure mental and physical health move together.",
    photoUrl:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 14,
    languages: ["English", "Korean"],
    education: [
      "DO, Philadelphia College of Osteopathic Medicine",
      "Psychiatry Residency, UCLA",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_north_park", "loc_eastgate"],
    rating: 5.0,
    reviewCount: 273,
  },
  {
    id: "p_natalie_brooks",
    name: "Dr. Natalie Brooks",
    credentials: "MD, FACP",
    specialty: "Geriatrics",
    bio: "Dr. Brooks specializes in compassionate care for older adults, with a focus on independence, mobility, and preserving the things that bring patients joy in daily life.",
    photoUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 18,
    languages: ["English"],
    education: [
      "MD, Duke University",
      "Geriatrics Fellowship, Mount Sinai",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_riverside"],
    rating: 4.8,
    reviewCount: 142,
  },
  {
    id: "p_jamal_carter",
    name: "Dr. Jamal Carter",
    credentials: "MD",
    specialty: "Sports Medicine",
    bio: "A former collegiate athlete turned physician, Dr. Carter helps patients return to the activities they love — whether that's a marathon, a weekend hike, or simply getting up and down the stairs without pain.",
    photoUrl:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
    yearsExperience: 8,
    languages: ["English"],
    education: [
      "MD, Emory University",
      "Sports Medicine Fellowship, University of Michigan",
    ],
    acceptingNewPatients: true,
    locationIds: ["loc_eastgate", "loc_riverside"],
    rating: 4.9,
    reviewCount: 198,
  },
];

export const services: ServiceRecord[] = [
  {
    id: "s_primary_care",
    slug: "primary-care",
    name: "Primary Care",
    tagline: "A trusted partner for everyday health",
    description:
      "Your primary care team is the steady center of your health — annual physicals, preventive screenings, vaccinations, and the trusted first call when something feels off. We schedule longer visits than most clinics so we can actually listen.",
    icon: "stethoscope",
    imageUrl:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Same-day and next-day visits available",
      "30-minute appointments by default",
      "Direct messaging with your care team",
      "Coordinated specialist referrals",
    ],
    conditionsTreated: [
      "Annual wellness visits",
      "Chronic condition management",
      "Acute illness and injury",
      "Preventive screenings",
      "Vaccinations and travel medicine",
    ],
  },
  {
    id: "s_pediatrics",
    slug: "pediatrics",
    name: "Pediatrics",
    tagline: "Care that grows with your child",
    description:
      "From a newborn's first checkup to college physicals, our pediatrics team provides warm, attentive care across every stage of childhood. We help parents feel informed, prepared, and supported.",
    icon: "baby",
    imageUrl:
      "https://images.unsplash.com/photo-1632053002434-0489c8932bb3?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Newborn through age 21",
      "Bilingual providers available",
      "After-hours nurse line",
      "Developmental and behavioral support",
    ],
    conditionsTreated: [
      "Well-child visits",
      "Immunizations",
      "Asthma and allergies",
      "Sports and school physicals",
      "Adolescent and teen health",
    ],
  },
  {
    id: "s_womens_health",
    slug: "womens-health",
    name: "Women's Health",
    tagline: "Personal, expert care at every stage",
    description:
      "Comprehensive women's health from first visits through postmenopausal care. We center each visit on what matters most to you — never rushed, never one-size-fits-all.",
    icon: "heart-pulse",
    imageUrl:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Annual well-woman exams",
      "Family planning consultations",
      "Menopause support",
      "Pregnancy and postpartum care",
    ],
    conditionsTreated: [
      "Reproductive health",
      "Hormonal concerns",
      "Pelvic health",
      "Bone health screening",
      "Preventive cancer screenings",
    ],
  },
  {
    id: "s_cardiology",
    slug: "cardiology",
    name: "Cardiology",
    tagline: "Heart care, clearly explained",
    description:
      "Our cardiology team partners with you on prevention, diagnostics, and ongoing management — translating complex test results into a plan that fits your real life.",
    icon: "activity",
    imageUrl:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "On-site echocardiograms",
      "Cardiac stress testing",
      "Lifestyle and nutrition coaching",
      "Coordinated care with primary providers",
    ],
    conditionsTreated: [
      "High blood pressure",
      "High cholesterol",
      "Arrhythmias",
      "Heart failure follow-up",
      "Preventive cardiology",
    ],
  },
  {
    id: "s_behavioral_health",
    slug: "behavioral-health",
    name: "Behavioral Health",
    tagline: "Mental wellbeing, treated with care",
    description:
      "Therapy, psychiatric medication management, and integrated mental health support — all under the same roof as your medical care, so the two never feel disconnected.",
    icon: "brain",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Individual therapy",
      "Medication management",
      "Crisis support resources",
      "Coordinated with your primary care team",
    ],
    conditionsTreated: [
      "Anxiety and depression",
      "ADHD",
      "Sleep concerns",
      "Stress and burnout",
      "Adjustment and life transitions",
    ],
  },
  {
    id: "s_geriatrics",
    slug: "geriatrics",
    name: "Geriatrics",
    tagline: "Care that honors a full life",
    description:
      "Specialized care for adults 65 and older, focused on staying independent, mobile, and engaged with the people and activities that matter most.",
    icon: "hand-heart",
    imageUrl:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Comprehensive medication review",
      "Fall prevention programs",
      "Memory and cognitive screening",
      "Family and caregiver support",
    ],
    conditionsTreated: [
      "Multiple chronic conditions",
      "Memory concerns",
      "Mobility and balance",
      "Polypharmacy review",
      "Advance care planning",
    ],
  },
  {
    id: "s_sports_medicine",
    slug: "sports-medicine",
    name: "Sports Medicine",
    tagline: "Get back to what you love",
    description:
      "Diagnose injuries, build recovery plans, and return to your favorite activities with strength and confidence — whether you're competing or simply staying active.",
    icon: "dumbbell",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "On-site imaging coordination",
      "Personalized rehab plans",
      "Concussion management",
      "Joint injections",
    ],
    conditionsTreated: [
      "Sprains and strains",
      "Joint pain",
      "Overuse injuries",
      "Concussion recovery",
      "Performance optimization",
    ],
  },
  {
    id: "s_urgent_care",
    slug: "urgent-care",
    name: "Urgent Care",
    tagline: "When you need care today",
    description:
      "Walk-in care for the unexpected — minor injuries, sudden illness, or anything in between. Open seven days a week with short waits and the same warm, attentive style as the rest of our network.",
    icon: "siren",
    imageUrl:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Walk-ins welcome, seven days a week",
      "On-site lab and basic imaging",
      "Average wait under 25 minutes",
      "Direct handoff to your primary care team",
    ],
    conditionsTreated: [
      "Sprains, cuts, and minor injuries",
      "Cold, flu, and respiratory illness",
      "Skin rashes and infections",
      "Urinary tract infections",
      "Ear and eye irritation",
    ],
  },
];

export const locations: LocationRecord[] = [
  {
    id: "loc_north_park",
    name: "North Park Clinic",
    addressLine1: "412 Linden Avenue",
    addressLine2: "Suite 200",
    city: "North Park",
    state: "OR",
    postalCode: "97214",
    phone: "(503) 555-0148",
    imageUrl:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    hours: [
      { day: "Monday", opens: "07:30", closes: "19:00" },
      { day: "Tuesday", opens: "07:30", closes: "19:00" },
      { day: "Wednesday", opens: "07:30", closes: "19:00" },
      { day: "Thursday", opens: "07:30", closes: "19:00" },
      { day: "Friday", opens: "07:30", closes: "18:00" },
      { day: "Saturday", opens: "09:00", closes: "15:00" },
      { day: "Sunday", opens: "Closed", closes: "Closed" },
    ],
    services: [
      "Primary Care",
      "Internal Medicine",
      "Cardiology",
      "Behavioral Health",
      "Lab Services",
    ],
  },
  {
    id: "loc_riverside",
    name: "Riverside Family Center",
    addressLine1: "88 Willow Bend Road",
    addressLine2: null,
    city: "Riverside",
    state: "OR",
    postalCode: "97232",
    phone: "(503) 555-0172",
    imageUrl:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    hours: [
      { day: "Monday", opens: "08:00", closes: "18:00" },
      { day: "Tuesday", opens: "08:00", closes: "18:00" },
      { day: "Wednesday", opens: "08:00", closes: "18:00" },
      { day: "Thursday", opens: "08:00", closes: "18:00" },
      { day: "Friday", opens: "08:00", closes: "17:00" },
      { day: "Saturday", opens: "09:00", closes: "13:00" },
      { day: "Sunday", opens: "Closed", closes: "Closed" },
    ],
    services: [
      "Primary Care",
      "Pediatrics",
      "Geriatrics",
      "Sports Medicine",
      "Lab Services",
    ],
  },
  {
    id: "loc_eastgate",
    name: "Eastgate Wellness Studio",
    addressLine1: "2210 Cedar Hollow Drive",
    addressLine2: "Building C",
    city: "Eastgate",
    state: "OR",
    postalCode: "97266",
    phone: "(503) 555-0193",
    imageUrl:
      "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?auto=format&fit=crop&w=1200&q=80",
    hours: [
      { day: "Monday", opens: "07:00", closes: "20:00" },
      { day: "Tuesday", opens: "07:00", closes: "20:00" },
      { day: "Wednesday", opens: "07:00", closes: "20:00" },
      { day: "Thursday", opens: "07:00", closes: "20:00" },
      { day: "Friday", opens: "07:00", closes: "19:00" },
      { day: "Saturday", opens: "08:00", closes: "16:00" },
      { day: "Sunday", opens: "10:00", closes: "14:00" },
    ],
    services: [
      "Pediatrics",
      "Women's Health",
      "Behavioral Health",
      "Sports Medicine",
      "Urgent Care",
    ],
  },
];

export const testimonials: TestimonialRecord[] = [
  {
    id: "t_1",
    patientName: "Elena Marquez",
    patientLocation: "Riverside",
    rating: 5,
    quote:
      "For the first time in years, I left a doctor's appointment feeling like someone actually heard me. Dr. Rivera changed how my whole family thinks about going to the doctor.",
    serviceName: "Pediatrics",
    providerName: "Dr. Sofia Rivera",
  },
  {
    id: "t_2",
    patientName: "Owen Whittaker",
    patientLocation: "North Park",
    rating: 5,
    quote:
      "I came in for a regular physical and ended up with the most thorough preventive plan I've ever had. Calm, kind, and incredibly competent.",
    serviceName: "Internal Medicine",
    providerName: "Dr. Marcus Okafor",
  },
  {
    id: "t_3",
    patientName: "Priya Shah",
    patientLocation: "Eastgate",
    rating: 5,
    quote:
      "Therapy and primary care under one roof, and they actually talk to each other. It feels like my care is finally a team effort, not a stack of disconnected appointments.",
    serviceName: "Behavioral Health",
    providerName: "Dr. David Park",
  },
  {
    id: "t_4",
    patientName: "James Holloway",
    patientLocation: "Riverside",
    rating: 5,
    quote:
      "Walked in for a knee that had been bothering me for months. A clear plan, no scare tactics, and I'm back to running on weekends. I tell everyone about this place.",
    serviceName: "Sports Medicine",
    providerName: "Dr. Jamal Carter",
  },
];

const insightBody = (paragraphs: string[]) => paragraphs.join("\n\n");

export const insights: InsightRecord[] = [
  {
    id: "i_sleep_health",
    slug: "the-quiet-medicine-of-sleep",
    title: "The Quiet Medicine of Sleep",
    excerpt:
      "If we could prescribe one thing to almost every patient who walks in our doors, it would not be a pill — it would be a full night of sleep.",
    body: insightBody([
      "Sleep is the most underrated intervention in modern medicine. We tend to look for the next supplement, the next routine, the next gadget — when our bodies are quietly asking us for something far simpler.",
      "Adults need seven to nine hours of consistent sleep to support immune function, mood regulation, cardiovascular health, and metabolic balance. Even a single short night can change how the body responds to insulin and stress.",
      "If you are struggling, the smallest changes often help most: keep a steady wake time, dim the lights an hour before bed, and treat your bedroom like the quietest room in the house. If sleep does not improve, talk to your primary care team — there may be more going on, and we can help.",
    ]),
    category: "Wellness",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Amelia Chen",
    publishedAt: "2026-04-12T10:00:00.000Z",
  },
  {
    id: "i_cholesterol",
    slug: "what-your-cholesterol-numbers-actually-mean",
    title: "What Your Cholesterol Numbers Actually Mean",
    excerpt:
      "Cholesterol gets discussed like a single villain. The truth is more nuanced — and a lot more empowering.",
    body: insightBody([
      "When you see a cholesterol panel, you are looking at several different particles, each telling a different story. LDL, HDL, triglycerides, and increasingly Lp(a) all matter — and the right plan depends on which numbers are elevated, by how much, and your personal cardiovascular risk.",
      "Lifestyle remains the foundation: regular activity, a Mediterranean-style eating pattern, and stress management make a measurable difference for most patients. For some, medication is the right call — and modern options have a strong safety profile.",
      "If your numbers feel confusing, ask your provider to walk through them with you. A good visit should leave you knowing what to do next, and why.",
    ]),
    category: "Cardiology",
    readMinutes: 5,
    coverImageUrl:
      "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Henry Lindgren",
    publishedAt: "2026-04-04T10:00:00.000Z",
  },
  {
    id: "i_anxiety",
    slug: "talking-to-your-doctor-about-anxiety",
    title: "Talking to Your Doctor About Anxiety",
    excerpt:
      "Bringing up anxiety can feel harder than it should. Here is how to start the conversation, and what to expect once you do.",
    body: insightBody([
      "Anxiety shows up in many forms — racing thoughts, sleep that won't settle, a tight chest, or a nervous system that just won't downshift. None of these are weakness. They are signals that deserve attention.",
      "When you bring it up with your provider, you do not need the perfect words. Saying 'I have not felt like myself' is enough to start. Together you can decide whether therapy, medication, lifestyle adjustments, or some combination is the right next step for you.",
      "If you are unsure where to begin, schedule a visit with your primary care provider. They know you, and they can connect you with the right care.",
    ]),
    category: "Behavioral Health",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. David Park",
    publishedAt: "2026-03-21T10:00:00.000Z",
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
      "If a screen routine has slipped or feels out of control, your pediatrician can help you reset, without judgment.",
    ]),
    category: "Pediatrics",
    readMinutes: 3,
    coverImageUrl:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Sofia Rivera",
    publishedAt: "2026-03-08T10:00:00.000Z",
  },
  {
    id: "i_perimenopause",
    slug: "perimenopause-what-no-one-told-you",
    title: "Perimenopause: What No One Told You",
    excerpt:
      "The years leading up to menopause can be confusing — but they don't have to be lonely. A primer on what's happening and what helps.",
    body: insightBody([
      "Perimenopause can begin in your forties, sometimes earlier. Sleep changes, mood shifts, irregular cycles, and unpredictable temperature regulation are all common — and they are not in your head.",
      "Modern care offers a wide range of safe, effective options, from lifestyle support to hormonal and non-hormonal therapy. The right plan should match your goals, not a one-size-fits-all template.",
      "If you have been dismissed in the past, please try again. Bring your questions and your symptoms — and expect to be listened to.",
    ]),
    category: "Women's Health",
    readMinutes: 5,
    coverImageUrl:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Priya Anand",
    publishedAt: "2026-02-22T10:00:00.000Z",
  },
  {
    id: "i_aging_strong",
    slug: "aging-strong-the-medicine-of-movement",
    title: "Aging Strong: The Medicine of Movement",
    excerpt:
      "Strength and balance are not luxuries — they are some of the most powerful medicines we have for staying independent.",
    body: insightBody([
      "Muscle is the protective scaffolding of healthy aging. Adults who maintain regular strength training have lower rates of falls, better balance, and a meaningfully different trajectory of independence in their seventies and beyond.",
      "You do not need a gym, a coach, or expensive equipment to begin. A few simple movements — sit-to-stands, gentle squats, balance work — done consistently are enough to start meaningful change.",
      "If you are not sure where to begin, ask your provider. We can connect you with safe, personalized guidance to start where you are.",
    ]),
    category: "Geriatrics",
    readMinutes: 4,
    coverImageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    authorName: "Dr. Natalie Brooks",
    publishedAt: "2026-02-10T10:00:00.000Z",
  },
];

export const stats = {
  providerCount: providers.length,
  locationCount: locations.length,
  patientsServed: 48000,
  averageRating: 4.9,
  yearsInCommunity: 17,
  sameDayAvailability: true,
};
