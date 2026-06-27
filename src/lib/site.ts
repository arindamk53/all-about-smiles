import {
  Sparkles,
  Smile,
  Syringe,
  Gem,
  Anchor,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Central place for all clinic content + media.
 * NOTE: Gallery/clinic imagery uses premium stock placeholders and is meant to
 * be swapped for actual clinic photographs later.
 */

export const clinic = {
  name: "All About Smiles",
  shortName: "All About Smiles",
  tagline: "Specialty dental treatments at reasonable rates",
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneHref: "tel:+910000000000",
  whatsappHref: "https://wa.me/910000000000?text=Hello%20All%20About%20Smiles%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Budhaditya%20De.",
  email: "info@allaboutsmiles.in",
  emailHref: "mailto:info@allaboutsmiles.in",
  address:
    "HA-245, Ground Floor, Bidhannagar (Salt Lake), Kolkata, West Bengal - 700064",
  addressShort: "Bidhannagar, Salt Lake, Kolkata",
  // Interactive Google Maps embed centred on the clinic coordinates
  mapEmbed:
    "https://maps.google.com/maps?q=22.5750644,88.409937&z=15&output=embed",
  mapLink: "https://maps.app.goo.gl/AllAboutSmilesSaltLake",
  mapsCoords: "22.5750644°N, 88.409937°E",
  consultationFee: "₹200",
  regNo: "4769-A, West Bengal State Dental Council, 2016",
  hours: {
    title: "Open 7 Days a Week",
    morning: "10:00 AM – 1:00 PM",
    evening: "6:00 PM – 9:00 PM",
    short: "10 AM – 1 PM & 6 PM – 9 PM",
  },
  listings: ["Practo", "Eka Care"],
};

export const doctor = {
  name: "Dr. Budhaditya De",
  designation: "Dental Surgeon",
  experience: "9 Years Experience",
  image: new URL("../assets/doctor.png", import.meta.url).href,
  specialization: "Oral & Maxillofacial Pathology and Oral Microbiology",
  qualifications: [
    { degree: "BDS", detail: "Burdwan Dental College, 2016" },
    { degree: "MDS", detail: "Dr. R. Ahmed Dental College Hospital, 2021" },
  ],
  story:
    "At All About Smiles, we believe world-class dental care should be accessible, gentle and stress-free. Led by Dr. Budhaditya De, our clinic blends state-of-the-art technology with a patient-first philosophy — from routine check-ups to advanced maxillofacial procedures. We're open all seven days of the week so quality care fits around your schedule, never the other way around.",
};

export type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
};

export const services: ServiceCategory[] = [
  {
    icon: Sparkles,
    title: "Cosmetic & Aesthetic",
    blurb: "Craft a confident, camera-ready smile.",
    items: ["Smile Makeovers", "Tooth Reshaping"],
  },
  {
    icon: Smile,
    title: "Orthodontics",
    blurb: "Straighten and align for lasting results.",
    items: ["Braces & Ortho Appliances", "Orthodontic Treatment"],
  },
  {
    icon: Syringe,
    title: "Oral Surgery",
    blurb: "Safe, precise surgical expertise.",
    items: ["Wisdom Tooth Extraction", "Surgical Extraction", "Maxillofacial Surgery"],
  },
  {
    icon: Gem,
    title: "Restorations & Prostho",
    blurb: "Rebuild form, function and comfort.",
    items: ["Crowns", "Bridges", "Dentures (Acrylic, Metal-Based, Immediate)", "Maxillofacial Prosthetics"],
  },
  {
    icon: Anchor,
    title: "Implants",
    blurb: "Permanent, natural-feeling replacements.",
    items: ["Dental Implant Fixing"],
  },
  {
    icon: ShieldCheck,
    title: "Preventive & Endodontics",
    blurb: "Protect, detect and save your natural teeth.",
    items: ["Scaling / Polishing", "Root Canal Treatment", "Gum Treatments", "Dental X-Ray", "Oral Lesions Screening"],
  },
];

/** Full descriptive list for the appointment "Service Required" dropdown. */
export const serviceOptions: string[] = [
  "Cosmetic & Aesthetic — Smile Makeover",
  "Cosmetic & Aesthetic — Tooth Reshaping",
  "Orthodontics — Braces & Ortho Appliances",
  "Orthodontics — Orthodontic Treatment",
  "Oral Surgery — Wisdom Tooth Extraction",
  "Oral Surgery — Surgical Extraction",
  "Oral Surgery — Maxillofacial Surgery",
  "Restorations — Crowns",
  "Restorations — Bridges",
  "Restorations — Dentures",
  "Restorations — Maxillofacial Prosthetics",
  "Implants — Dental Implant Fixing",
  "Preventive — Scaling / Polishing",
  "Endodontics — Root Canal Treatment",
  "Preventive — Gum Treatment",
  "Diagnostics — Dental X-Ray",
  "Screening — Oral Lesions Screening",
  "General Consultation",
];

type GalleryItem = { src: string; caption: string; tag: string };

const px = (id: number, w = 1100) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  hero: px(38055771, 1920),
  heroPatient: px(6627574, 1100),
  doctor: px(37458046, 900),
  gallery: [
    { src: px(38055771, 1100), caption: "Modern Clinic Interior", tag: "Interior" },
    { src: px(38055773, 1100), caption: "Welcoming Reception", tag: "Reception" },
    { src: px(5355863, 1100), caption: "Treatment Suite", tag: "Treatment" },
    { src: px(6627574, 900), caption: "Happy Patients", tag: "Care" },
    { src: px(5355905, 1100), caption: "Advanced Dental Equipment", tag: "Equipment" },
    { src: px(4269268, 1100), caption: "Consultation Room", tag: "Consultation" },
  ] as GalleryItem[],
};

export type Testimonial = {
  name: string;
  detail: string;
  quote: string;
  initials: string;
  accent: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ritika Sharma",
    detail: "Smile Makeover · Salt Lake",
    initials: "RS",
    accent: "from-teal-400 to-teal-600",
    quote:
      "Dr. De completely transformed my smile and the rates were far more reasonable than anywhere else I'd checked. The whole experience was gentle and reassuring.",
  },
  {
    name: "Anirban Roy",
    detail: "Root Canal Treatment · Kolkata",
    initials: "AR",
    accent: "from-gold-400 to-gold-600",
    quote:
      "I'm usually terrified of dentists, but the care here was unbelievably calm and painless. Being able to walk in on a Sunday evening saved me so much hassle.",
  },
  {
    name: "Priyanka Das",
    detail: "Orthodontics · Bidhannagar",
    initials: "PD",
    accent: "from-navy-400 to-navy-600",
    quote:
      "Open all seven days and genuinely affordable — a rare combination. The clinic is spotless and modern, and the team explains every step. Highly recommend.",
  },
];
