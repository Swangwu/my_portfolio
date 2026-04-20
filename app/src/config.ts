// Site configuration
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Stephanie Nwangwu | Data Scientist & Energy Engineer",
  description: "Portfolio of Stephanie Nwangwu - Data Scientist specializing in energy analysis, machine learning, and business intelligence.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Stephanie Nwangwu",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#cta" },
  ],
  contactLabel: "Get in Touch",
  contactHref: "mailto:stephanienwangwu@gmail.com",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Stephanie Nwangwu",
  roles: ["Data Scientist", "Energy Engineer", "ML Engineer", "Researcher"],
  backgroundImage: "/images/hero-photo.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I am a passionate data scientist and energy engineer with expertise in transforming complex data into actionable insights. My work spans energy audit analysis, machine learning classification, recommendation systems, and academic research. I specialize in using data to solve real-world problems, particularly in the renewable energy sector and business intelligence.",
  experienceValue: "3",
  experienceLabel: "Years of\nData Experience",
  stats: [
    { value: "10+", label: "Projects\nCompleted" },
    { value: "3+", label: "Research\nPublications" },
    { value: "100%", label: "Commitment to\nExcellence" },
  ],
  images: [
    { src: "/images/portfolio-dashboard.jpg", alt: "Data Visualization Dashboard" },
    { src: "/images/portfolio-energy.jpg", alt: "Solar Energy Project" },
    { src: "/images/portfolio-ml.jpg", alt: "Machine Learning Code" },
    { src: "/images/about-work.jpg", alt: "Research Work" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "What I Do",
  heading: "Services & Expertise",
  services: [
    {
      iconName: "BarChart3",
      title: "Data Analysis & Visualization",
      description: "Transform raw data into compelling visual stories using Power BI, Python, and advanced analytics techniques. From EDA to interactive dashboards.",
      image: "/images/portfolio-dashboard.jpg",
    },
    {
      iconName: "Zap",
      title: "Energy Analysis & Audit",
      description: "Comprehensive energy audits, load demand analysis, and time-series studies to optimize energy consumption and justify renewable energy transitions.",
      image: "/images/portfolio-energy.jpg",
    },
    {
      iconName: "Brain",
      title: "Machine Learning Solutions",
      description: "Build predictive models using Random Forest, classification algorithms, and recommendation systems to drive business decisions and customer insights.",
      image: "/images/portfolio-ml.jpg",
    },
    {
      iconName: "BookOpen",
      title: "Research & Academic Writing",
      description: "Conduct in-depth research on energy systems, publish findings, and create educational content. Expert in academic citation management and technical writing.",
      image: "/images/portfolio-research.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
  link?: string;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "My Work",
  heading: "Featured Projects",
  description: "A selection of my data science and energy analysis projects. Each project represents a unique challenge solved through data-driven insights and technical expertise. Click on any project to view the full work.",
  projects: [
    {
      title: "Energy Audit & Load Demand Analysis",
      category: "Power BI | Time-Series Analysis",
      year: "2024",
      image: "/images/portfolio-energy.jpg",
      featured: true,
      link: "https://drive.google.com/file/d/1FzRtf5duDWe6wOng3AYbQiO_Gp0wV4Er/view",
    },
    {
      title: "Customer Conversion Prediction",
      category: "Machine Learning | Classification",
      year: "2024",
      image: "/images/portfolio-ml.jpg",
      link: "https://docs.google.com/presentation/d/1SiFnSJfc6v5BX20LcZqD-Gcw3VQStn12/edit",
    },
    {
      title: "Amazon Product Recommendation",
      category: "Recommendation Systems | Python",
      year: "2024",
      image: "/images/service-data.jpg",
      link: "/projects/amazon-recommendation.html",
    },
    {
      title: "Food Hub Data Analysis",
      category: "EDA | Business Intelligence",
      year: "2024",
      image: "/images/portfolio-food.jpg",
      link: "/projects/food-hub-analysis.html",
    },
    {
      title: "Stand-Alone Energy Systems Research",
      category: "Academic Research | Nigeria",
      year: "2024",
      image: "/images/portfolio-research.jpg",
      link: "https://iopscience.iop.org/article/10.1088/1755-1315/1322/1/012010",
    },
  ],
  cta: {
    label: "Let's Work Together",
    heading: "Have a project in mind?",
    linkText: "Get in Touch",
    linkHref: "mailto:stephanienwangwu@gmail.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "",
  heading: "",
  testimonials: [],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Data Analyst", "Energy Engineer", "ML Engineer", "Researcher"],
  heading: "Let's Build Something Amazing Together",
  description: "Whether you need data analysis, energy audits, machine learning solutions, or research collaboration, I'm here to help turn your data into insights.",
  buttonText: "Send me an Email",
  buttonHref: "mailto:stephanienwangwu@gmail.com",
  email: "stephanienwangwu@gmail.com",
  backgroundImage: "/images/portfolio-dashboard.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Stephanie Nwangwu",
  description: "Data Scientist and Energy Engineer passionate about transforming complex data into actionable insights for a sustainable future.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#portfolio" },
        { label: "Contact", href: "#cta" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Data Analysis", href: "#services" },
        { label: "Energy Audit", href: "#services" },
        { label: "Machine Learning", href: "#services" },
        { label: "Research", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "stephanienwangwu@gmail.com", href: "mailto:stephanienwangwu@gmail.com" },
        { label: "+234 916 184 6266", href: "tel:+2349161846266" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/stephanie-nwangwu" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/stephanie-nwangwu", label: "LinkedIn" },
    { iconName: "Github", href: "#", label: "GitHub" },
    { iconName: "Mail", href: "mailto:stephanienwangwu@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on my latest projects and research.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Stephanie Nwangwu. All rights reserved.",
  credit: "Built with passion and data",
};