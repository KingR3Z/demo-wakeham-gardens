export const client = {
  // Business Details
  name: "Wakeham Gardens",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Salisbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07879 333449",
  email: "",
  website: "",

  // Location
  address: "Salisbury",
  city: "Salisbury",
  county: "",
  postcode: "",
  basedIn: "Salisbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Angela Brenchley", rating: 5, text: "What started out as a garden clearance and maintenance job turned into a fairly comprehensive garden re-design.  Throughout Lou has been absolutely fantastic, and very patient with two people who know close to nothing.  Lou listened to our …  +7 ", date: "3 years ago" },
    { name: "john boylan", rating: 5, text: "Louise has produced some wonderful designs. The work is so detailed and the back up support is fantastic. In fact Louise has given us three design options and our only issue is trying to decide between them as they are all so good. Exactly what we wa", date: "2 years ago" },
    { name: "Dibs", rating: 5, text: "Louise did an excellent job on taming our very overgrown garden as well as a superb overhaul of our weed infested lawn which was more nettles than turf. She then put down new turf which rooted well and looks fantastic. …  ", date: "4 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Wakeham Gardens | Landscaper in Salisbury",
    description: "Professional landscaper in Salisbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
