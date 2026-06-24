export interface SolutionPageData {
  // 1. SEO Metadata
  seo: {
    title: string;
    description: string;
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
    stats: {
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
    items: {
      title: string;
      description: string;
    }[];
  };

  // 8. Clone Solutions
  clonesSection: {
    heading: string;
    subHeading: string;
    items: {
      name: string;
      description: string;
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
}
