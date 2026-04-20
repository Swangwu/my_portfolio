// Site Configuration
// Folayimika Molade - The Energy Storyteller Portfolio

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Folayimika Molade | The Energy Storyteller",
  siteDescription: "Energy Communications, Policy & Narrative Strategy Specialist working at the intersection of clean energy, governance, and storytelling in Africa.",
};

// Hero Section
export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: { label: string; href: string }[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "ENERGY",
  heroImage: "/hero-portrait.png",
  heroImageAlt: "Folayimika Molade - The Energy Storyteller",
  overlayText: "The Energy Storyteller",
  brandName: "FM",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Crafting Narratives",
  titleLine2: "That Power Change",
  description: "I work at the intersection of clean energy, governance, and storytelling in Africa. With a proven track record of reaching over 500,000 people and delivering 200%+ engagement growth, I translate complex energy and policy concepts into compelling narratives that drive impact and inspire action.",
  portfolioImages: [
    { src: "/portfolio-solar-rural.jpg", alt: "Solar mini-grid installation in rural African community" },
    { src: "/portfolio-agriculture.jpg", alt: "Solar-powered agricultural irrigation system" },
    { src: "/portfolio-documentary.jpg", alt: "Documentary filming in rural community" },
    { src: "/portfolio-industrial.jpg", alt: "Industrial solar installation" },
    { src: "/portfolio-podcast.jpg", alt: "Podcast studio for energy storytelling" },
  ],
  accentText: "Selected Works — 2024",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Work",
  titleRegular: "Signature",
  titleItalic: "Projects",
  viewAllText: "View All Projects",
  viewAllHref: "#work",
  viewProjectText: "View Project",
  projects: [
    {
      id: 1,
      title: "Mini-Grid Impact Documentary",
      category: "Documentary",
      year: "2024",
      image: "/project-minigrid.jpg",
      description: "Traveled to rural communities across Nigeria to document solar mini-grid projects through video and photography. Captured authentic stories of transformation, reaching 500,000+ audience and showcasing how clean energy impacts livelihoods.",
    },
    {
      id: 2,
      title: "NRIEF Editorial & Documentary",
      category: "Event Coverage",
      year: "2024",
      image: "/project-nrief.jpg",
      description: "Produced comprehensive content for the National Renewable Energy Investment Forum, reaching 5,000+ stakeholders. Created photo essays, video highlights, and written narratives that translated technical energy topics into accessible stories.",
    },
    {
      id: 3,
      title: "InfraCredit × Ceesolar Partnership",
      category: "Strategic Communications",
      year: "2024",
      image: "/project-infracredit.jpg",
      description: "Led communications strategy for the solar financing partnership between InfraCredit and Ceesolar. Developed messaging framework, press materials, and media outreach ensuring visibility across key energy and finance publications.",
    },
    {
      id: 4,
      title: "Multi-Sector Solar Storytelling",
      category: "Brand Campaign",
      year: "2023",
      image: "/portfolio-agriculture.jpg",
      description: "Documented solar applications across agriculture (Dobi Agrico, Aryan Farm) and industrial sectors (Brandco warehouse). Created sector-specific narratives demonstrating versatility and impact of renewable energy solutions.",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "What I Offer",
  titleLine1: "Services That",
  titleLine2Italic: "Drive Impact",
  description: "From strategic communications to documentary production, I offer a comprehensive suite of services designed to amplify your message and connect with audiences across Africa's energy sector.",
  services: [
    {
      iconName: "Sparkles",
      title: "Strategic Communication",
      description: "Develop comprehensive communication frameworks that align with your business objectives. From messaging strategy to stakeholder engagement, I help organizations articulate their vision and drive meaningful conversations.",
    },
    {
      iconName: "Camera",
      title: "Documentary & Videography",
      description: "Produce compelling video content that captures the human stories behind energy projects. From concept to final edit, I create documentaries that resonate with audiences and showcase real-world impact.",
    },
    {
      iconName: "Users",
      title: "Brand & Narrative Strategy",
      description: "Build authentic brand narratives that differentiate your organization in the competitive energy landscape. Develop storytelling frameworks that connect technical expertise with human emotion.",
    },
    {
      iconName: "Diamond",
      title: "Policy Communication",
      description: "Translate complex policy and regulatory concepts into accessible narratives. Bridge the gap between technical experts and general audiences, making energy policy understandable and engaging.",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "By The Numbers",
  titleRegular: "Impact That",
  titleItalic: "Speaks",
  statsLabel: "Key Metrics",
  stats: [
    { value: 500, suffix: "K+", label: "People Reached" },
    { value: 200, suffix: "%+", label: "Engagement Growth" },
    { value: 170, suffix: "K+", label: "LinkedIn Impressions" },
    { value: 4, suffix: "+", label: "Mini-Grid Communities" },
  ],
  featureCards: [
    {
      image: "/feature-storytelling.jpg",
      imageAlt: "Storytelling and creative direction",
      title: "Storytelling Excellence",
      description: "Award-winning narrative craft that transforms technical content into compelling human stories.",
    },
    {
      image: "/feature-strategy.jpg",
      imageAlt: "Strategic communication planning",
      title: "Strategic Vision",
      description: "Deep understanding of Africa's energy landscape combined with cutting-edge communication strategies.",
    },
  ],
  wideImage: "/wide-landscape.jpg",
  wideImageAlt: "African landscape with solar energy future",
  wideTitle: "Powering Africa's Energy Narrative",
  wideDescription: "Every story told is a step toward a sustainable future. Let's tell yours.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Client Stories",
  titleRegular: "What They",
  titleItalic: "Say",
  testimonials: [
    {
      id: 1,
      name: "Sarah Okafor",
      role: "CEO, Ceesolar Energy",
      image: "/testimonial-1.jpg",
      quote: "Folayimika transformed our brand presence completely. His storytelling approach helped us connect with communities and stakeholders in ways we never imagined. The 200% engagement growth speaks for itself.",
    },
    {
      id: 2,
      name: "Amara Nwosu",
      role: "Communications Director, ISPR Hub",
      image: "/testimonial-2.jpg",
      quote: "Working with Folayimika was a game-changer for our policy communications. He has an exceptional ability to translate complex energy concepts into narratives that resonate with diverse audiences.",
    },
    {
      id: 3,
      name: "Dr. Emmanuel Adeyemi",
      role: "Program Director, NRIEF",
      image: "/testimonial-3.jpg",
      quote: "The documentary work Folayimika produced for our forum was outstanding. He captured the essence of our mission and delivered content that exceeded our expectations in both quality and impact.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently",
  titleItalic: "Asked",
  ctaText: "Still have questions?",
  ctaButtonText: "Get in Touch",
  ctaHref: "#contact",
  faqs: [
    {
      id: "faq-1",
      question: "What industries do you specialize in?",
      answer: "I specialize in the energy sector, particularly renewable energy, clean tech, and sustainable development. My experience spans solar power, mini-grids, agricultural energy solutions, and industrial applications. I also work with policy organizations and SDG-focused initiatives across Africa.",
    },
    {
      id: "faq-2",
      question: "What types of projects do you take on?",
      answer: "I handle a range of projects including brand strategy, documentary production, event coverage, podcast production, and strategic communications. Whether you need a comprehensive campaign or specific content pieces, I tailor my approach to meet your objectives.",
    },
    {
      id: "faq-3",
      question: "How do you measure success?",
      answer: "Success metrics vary by project but typically include engagement rates, reach and impressions, audience sentiment, and business outcomes. For example, my work with Ceesolar achieved 200%+ engagement growth and 170K+ LinkedIn impressions in just 7 months.",
    },
    {
      id: "faq-4",
      question: "What is your creative process?",
      answer: "My process begins with deep discovery—understanding your goals, audience, and unique value proposition. From there, I develop a strategic narrative framework, create content that aligns with your brand voice, and continuously optimize based on performance data and feedback.",
    },
    {
      id: "faq-5",
      question: "Do you work with international clients?",
      answer: "Absolutely. While my focus is on Africa's energy sector, I work with international organizations, NGOs, and companies looking to establish or strengthen their presence in African markets. I bring local insights combined with global communication standards.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  contactLabel: string;
  email: string;
  locationText: string;
  navigationLabel: string;
  navLinks: FooterLink[];
  socialLabel: string;
  socialLinks: SocialLink[];
  tagline: string;
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "FOLAYIMIKA",
  contactLabel: "Get in Touch",
  email: "folayimikamolade742@gmail.com",
  locationText: "Abuja, F.C.T\nNigeria",
  navigationLabel: "Navigation",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ],
  socialLabel: "Follow Along",
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/folayimika-molade-5a6066266", label: "LinkedIn" },
    { iconName: "Twitter", href: "#", label: "Twitter" },
    { iconName: "Instagram", href: "#", label: "Instagram" },
    { iconName: "Mail", href: "mailto:folayimikamolade742@gmail.com", label: "Email" },
  ],
  tagline: "The Energy Storyteller\nPowering Narratives That Matter",
  copyright: "© 2025 Folayimika Molade. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
