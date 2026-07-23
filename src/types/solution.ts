export interface SolutionPageData {
  author?: string;
  // 1. SEO Metadata
  seo: {
    title: string;
    description: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords: string | string[];
    metaRobots?: string;
    canonicalURL?: string;
    structuredData?: any;
    metaImage?: any;
  };

  // 2. Hero Section
  heroSection: {
    badgeText: string;
    titlePreHighlight: string;
    highlightText: string;
    titlePostHighlight: string;
    description: string;
  };

  // 3. About Section
  aboutSection: {
    title: string;
    paragraph: string;
    bullets: string[];
    image?: string;
    buttontext?: string;
    buttonLink?: string;
    stats?: {
      label: string;
      value: string;
    }[];
  };

  // 4. App Modules (Tablet UI)
  servicesSection: {
    heading: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  modulesSection: {
    heading: string;
    subHeading: string;
    items: {
      id: string;
      label: string;
      shortLabel: string;
      features: string[];
      icon?: string;
      buttontext?: string;
      buttonlink?: string;
      image?: string;
    }[];
  };

  // 5. Major Problems & Solutions
  problemsSection: {
    heading: string;
    subHeading: string;
    items: {
      title: string;
      problem: string;
      solution: string;
    }[];
  };

  // 6. Solution Offerings
  offeringsSection: {
    heading: string;
    subHeading: string;
    items: {
      title: string;
      description: string;
      icon?: any;
    }[];
  };

  // 7. Advanced Tech Features
  techFeaturesSection: {
    heading: string;
    subHeading: string;
    items?: {
      title: string;
      description: string;
    }[];
    cards?: any[];
  };

  // 8. Clone Solutions
  clonesSection: {
    heading: string;
    subHeading: string;
    items: {
      name: string;
      description: string;
      image?: string;
    }[];
    mockup: {
      type: "service" | "crypto" | "social";
      labels: {
        header: string;
        searchPlaceholder: string;
        categoriesTitle: string;
        listTitle: string;
      };
    };
  };

  // 9. Pricing & Packages
  pricingSection: {
    heading: string;
    subHeading: string;
    items: {
      tierName: string;
      price: string;
      description: string;
      features: string[];
      timeline?: string;
    }[];
  };

  // 10. Frequently Asked Questions
  faqSection: {
    heading: string;
    subHeading: string;
    items: {
      question: string;
      answer: string;
    }[];
  };

  // 11. Demo Video (Floating)
  demoVideo?: {
    title?: string;
    videoUrl: string;
    thumbnailUrl?: string;
  };
}
