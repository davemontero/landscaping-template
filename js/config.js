// =========================
// SITE CONFIGURATION
// =========================

const siteConfig = {
  businessName: "GreenLine Landscaping",
  phone: "(615) 555-9876",
  email: "contact@greenline.com",
  serviceArea: "Nashville, TN and surrounding areas",
  form: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "0b5cb5e0-ef48-4560-9468-ca2a16b911ea",
    subject: "New Quote Request - GreenLine Landscaping",
    successMessage: "Thanks! Your request has been sent successfully.",
    errorMessage: "Something went wrong. Please try again.",
  },
  services: [
    {
      icon: "🌱",
      title: "Lawn Care",
      description:
        "Professional lawn maintenance to keep your property healthy, clean, and looking its best.",
    },
    {
      icon: "🌿",
      title: "Landscaping Design",
      description:
        "Custom landscape designs that improve the beauty, function, and value of your outdoor space.",
    },
    {
      icon: "🍂",
      title: "Mulching",
      description:
        "Quality mulch installation to improve soil health, retain moisture, and give your landscape a finished look.",
    },
    {
      icon: "🌳",
      title: "Tree & Shrub Care",
      description:
        "Ongoing care for trees and shrubs, including trimming, shaping, and general maintenance.",
    },
  ],
  testimonials: [
    {
      quote:
        "GreenLine transformed our backyard. The team was professional, reliable, and the results exceeded our expectations.",
      name: "Sarah M.",
    },
    {
      quote:
        "They completely redesigned our front yard and made the entire process easy from start to finish.",
      name: "James R.",
    },
    {
      quote:
        "Great communication, excellent work, and our yard has never looked better.",
      name: "Michael T.",
    },
    {
      quote:
        "Excellent service and attention to detail. We highly recommend GreenLine.",
      name: "Jennifer L.",
    },
  ],
  images: {
    hero: "images/hero.jpg",

    about: {
      src: "images/about.jpg",
      alt: "Professional landscaper maintaining a residential yard",
    },

    gallery: [
      {
        src: "images/project-1.jpg",
        alt: "Residential backyard landscaping project",
      },
      {
        src: "images/project-2.jpg",
        alt: "Front yard landscape design",
      },
      {
        src: "images/project-3.jpg",
        alt: "Garden landscaping project",
      },
      {
        src: "images/project-4.jpg",
        alt: "Landscaped outdoor patio",
      },
    ],
  },
  theme: {
    primary: "#2f6b3f",
    primaryDark: "#214d2d",
    secondary: "#8a9a5b",
  },
  hero: {
    eyebrow: "Professional Landscaping Services",
    title: "Beautiful Outdoor Spaces, Built to Last.",
    text: "We design, build, and maintain outdoor spaces that make your property look its best.",
    primaryButton: "Get a Free Quote",
    secondaryButton: "Call Us",
  },
  about: {
    eyebrow: "About Us",
    title: "Outdoor Spaces Designed With Care",
    paragraphs: [
      "GreenLine Landscaping is a local landscaping company dedicated to creating beautiful, functional outdoor spaces.",
      "From routine maintenance to complete landscape transformations, we focus on quality work, clear communication, and dependable service.",
    ],
    buttonText: "Learn More",
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Let's Talk About Your Project",
    text: "Ready to improve your outdoor space? Contact us today for a free consultation.",
  },
  cta: {
    title: "Ready to Transform Your Outdoor Space?",
    buttonText: "Get a Free Quote",
  },

  footer: {
    backToTop: "Back to Top",
  },
};

export default siteConfig;
