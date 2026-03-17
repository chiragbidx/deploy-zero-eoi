import type {
  HeroContent,
  SponsorItem,
  SponsorsContent,
  BenefitItem,
  BenefitsContent,
  FeatureItem,
  FeaturesContent,
  ServiceItem,
  ServicesContent,
  TestimonialItem,
  TestimonialsContent,
  SocialLink,
  TeamMember,
  TeamContent,
  PricingPlan,
  PricingContent,
  ContactInfoBlock,
  ContactContent,
  FaqItem,
  FaqContent,
  FooterLink,
  FooterColumn,
  FooterContent,
  NavRoute,
  NavFeature,
  NavbarContent,
  HomeContent,
} from "./home-types";

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "LeadSync is live",
    titleBefore: "Start your",
    titleHighlight: "CRM",
    titleAfter: "journey with confidence",
    subtitle:
      "LeadSync gives you a head start with a beautiful, production-ready Next.js boilerplate—brand it, extend it, ship it. Drizzle ORM, PostgreSQL, passwordless email auth, and robust dashboard built in.",
    primaryCta: { label: "See Features", href: "#features" },
    secondaryCta: { label: "Contact Team", href: "#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadSync CRM React starter preview",
  },

  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Tailwind" },
      { icon: "Ghost", name: "React" },
      { icon: "Puzzle", name: "TypeScript" },
      { icon: "Squirrel", name: "Next.js" },
      { icon: "Cookie", name: "shadcn/ui" },
      { icon: "Drama", name: "Railway" },
    ],
  },

  benefits: {
    eyebrow: "Why LeadSync",
    heading: "A minimal, modern CRM starter",
    description:
      "Optimized for teams who want a rock-solid, customizable Next.js front end with real authentication, dashboard, team management, and live email flows.",
    items: [
      {
        icon: "Blocks",
        title: "Launch Fast",
        description:
          "Skip boilerplate and focus on your business logic, UI, and integrations.",
      },
      {
        icon: "LineChart",
        title: "Latest Stack",
        description:
          "Next.js 16 App Router, React 19, TypeScript 5, Tailwind—all set up and productionized.",
      },
      {
        icon: "Wallet",
        title: "Secure Auth, Real DB",
        description:
          "Credentials auth, passwordless flows, and live database persistence out of the box.",
      },
      {
        icon: "Sparkle",
        title: "Premium UI",
        description:
          "Polished theming, shadcn components, dark mode, and responsive sections.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "Everything you need to start strong",
    subtitle:
      "Template ships with ready-to-use, database-backed email/password auth, dashboard, team system, and production-grade flows. Invite real users, manage teams, and extend as you grow.",
    items: [
      {
        icon: "TabletSmartphone",
        title: "Responsive Layout",
        description: "Mobile-first, desktop beautiful, works everywhere.",
      },
      {
        icon: "BadgeCheck",
        title: "Production Auth",
        description:
          "End-to-end signup/login, email verification, forgot/reset, session security.",
      },
      {
        icon: "Goal",
        title: "Live Email Flows",
        description:
          "SendGrid integration for verification, passwordless, invitations—all real.",
      },
      {
        icon: "PictureInPicture",
        title: "Ready Dashboard",
        description:
          "Team management, invite flows, member roles—all backed by Drizzle/Postgres.",
      },
      {
        icon: "MousePointerClick",
        title: "Extensible",
        description:
          "Plug in features, expand tables, or connect to your API/backend.",
      },
      {
        icon: "Newspaper",
        title: "Deploy Instantly",
        description:
          "One-click deploy to Vercel or Railway for dev/prod. Ready to go now.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Your foundation, your way",
    subtitle:
      "LeadSync gives you everything you need and nothing you don’t. Backend and database built-in—just extend for your next use case.",
    items: [
      {
        title: "Brand-Ready Template",
        description: "Designed for CRM and SaaS—easy to rebrand and extend. Powered by Chirag Dodiya.",
        pro: false,
      },
      {
        title: "Typed Content System",
        description:
          "Typescript-enforced content in content/home.ts. Safe, developer-friendly editing.",
        pro: false,
      },
      {
        title: "Modern UI Components",
        description: "shadcn/ui with dark mode and best-in-class design.",
        pro: false,
      },
      {
        title: "Easy Host Migration",
        description:
          "No vendor lock-in. Spin up with Railway, Vercel, or anywhere you like.",
        pro: true,
      },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "Loved by developers and product teams",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Alex Morgan",
        role: "Founder, Loop CRM",
        comment:
          "We went live in a weekend, skipping all the boring scaffolding and focusing on our customer journeys.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Sam Lee",
        role: "Product Lead, SiteSync",
        comment:
          "Clean code, smart section organization, and production polish—LeadSync gave us a runway to scale.",
        rating: 4.9,
      },
      {
        image: "/demo-img.jpg",
        name: "Ishani Gupta",
        role: "CTO, LaunchDesk",
        comment:
          "The template got our team collaborating fast. We plugged in our API and demoed in under 24 hours.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Mateo Vasquez",
        role: "Growth, Nextly",
        comment:
          "Saves time, looks great, deploys fast—exactly what we were looking for in a Next.js starter.",
        rating: 5.0,
      },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the LeadSync builders",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "One simple open source plan",
    subtitle:
      "Download and use forever. For custom integrations or commercial help, contact Chirag.",
    priceSuffix: "",
    plans: [
      {
        title: "Open Source",
        popular: true,
        price: 0,
        description: "Full-featured stack, modern code, extensible for any team.",
        buttonText: "Download Starter",
        benefits: [
          "Full source code",
          "MIT licensed",
          "Community support",
          "Easy to extend",
        ],
      },
      {
        title: "Custom Deployment",
        popular: false,
        price: 499,
        description: "Setup, branding, backend, or advanced auth by Chirag.",
        buttonText: "Contact Chirag",
        benefits: [
          "Personalization",
          "Backend/auth wiring",
          "Custom features",
          "Continued support",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Talk to the LeadSync team",
    description:
      "Questions about setup, deployment, or integrations? Directly reach out to the founder for the fastest response.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote, global" },
      phone: { label: "Ping", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Availability", value: ["Mon – Fri", "9AM – 7PM IST"] },
    },
    formSubjects: ["Download Inquiry", "Customization", "Integration Help", "General Question"],
    formSubmitLabel: "Send message",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Questions? Start here",
    items: [
      {
        question: "What makes LeadSync different?",
        answer:
          "Built on real, production-backed flows. Auth, DB, team system and extensibility—all in one.",
      },
      {
        question: "Can I use this in production?",
        answer:
          "Yes! This template is made for real SaaS, CRM, and team portals—no fake UI or mockups.",
      },
      {
        question: "How is content managed?",
        answer:
          "All landing section data is edited in code (content/home.ts), type-safe, and change-friendly.",
      },
      {
        question: "Does it include auth and DB wiring?",
        answer:
          "Yes! Everything from signup/signin to reset and team flows, database included.",
      },
      {
        question: "Do you offer support or custom changes?",
        answer:
          "For bugs, open a GitHub issue. For commercial help or custom features, contact Chirag Dodiya directly.",
      },
    ],
  },

  footer: {
    brandName: "LeadSync",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya/leadsync" },
        ],
      },
    ],
    copyright: "© 2026 LeadSync. Built by Chirag Dodiya.",
    attribution: { label: "Powered by Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "LeadSync",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Sections",
    featureImage: { src: "/demo-img.jpg", alt: "LeadSync preview" },
    features: [
      { title: "Production UI", description: "Strong, beautiful components for a running start." },
      { title: "Rapid Customization", description: "Brand it, remix it, ship it—your way." },
      { title: "Deploy Flexible", description: "Take it to Vercel/Railway or use Docker." },
    ],
    signInLabel: "",
    signUpLabel: "",
    dashboardLabel: "",
    githubLink: {
      href: "https://github.com/chiragdodiya/leadsync",
      ariaLabel: "View LeadSync on GitHub",
    },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}