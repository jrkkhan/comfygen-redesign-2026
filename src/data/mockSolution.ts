import { SolutionPageData } from "@/types/solution";

export const mockSolutionData: SolutionPageData = {
  seo: {
    title: "Food Delivery App Development Company | Custom & White-Label",
    description: "Launch a complete food delivery ecosystem with our custom, scalable, and white-label food delivery app development solutions for iOS and Android.",
    keywords: ["food delivery app development", "restaurant app development", "white-label food delivery app", "on-demand delivery app"]
  },
  heroSection: {
    badgeText: "Food Delivery Solution",
    titlePreHighlight: "Build the Next Big ",
    highlightText: "Food Delivery App",
    titlePostHighlight: " Like Swiggy & UberEats",
    description: "Launch a complete food delivery ecosystem with our custom, scalable, and white-label food delivery app development solutions. Connect customers, restaurants, and delivery agents effortlessly."
  },
  aboutSection: {
    title: "Why Invest in Food Delivery App Development?",
    paragraph: "The global food delivery market is exploding, and customer expectations have never been higher. To succeed, you need more than just a basic ordering app—you need a robust, scalable ecosystem that seamlessly connects hungry customers, busy restaurants, and delivery fleets in real-time.",
    bullets: [
      "Custom-built for your specific regional market and audience.",
      "100% White-labeled with your branding and domain.",
      "Scalable microservices architecture to handle millions of orders.",
      "Advanced AI-driven routing and delivery optimization.",
      "Seamless integration with third-party POS and payment gateways.",
      "Full source code ownership with zero recurring platform fees."
    ],
    stats: [
      { label: "Orders Processed", value: "10M+" },
      { label: "App Uptime", value: "99.9%" },
      { label: "Restaurants Onboarded", value: "5000+" }
    ]
  },
  servicesSection: {
    heading: "Mobile and Web App Development Services",
    subtitle: "Our Skilled Developers Build AI-Powered Apps With Modern Frameworks To Enhance Business Performance.",
    items: []
  },
  modulesSection: {
    heading: "Complete Ecosystem Architecture",
    subHeading: "A fully integrated suite of premium applications designed to streamline your food delivery operations, from customer ordering to final delivery.",
    items: [
      {
        id: "user",
        label: "Customer App",
        shortLabel: "Customer",
        features: ["Smart Search & Filters", "Live Order Tracking", "Multiple Payment Gateways", "Ratings & Reviews", "Loyalty Programs", "Push Notifications"]
      },
      {
        id: "vendor",
        label: "Restaurant Panel",
        shortLabel: "Restaurant",
        features: ["Menu & Catalog Management", "Order Accept/Reject", "Revenue Analytics", "Offer & Discount Engine", "Inventory Tracking", "Customer Feedback"]
      },
      {
        id: "driver",
        label: "Driver App",
        shortLabel: "Driver",
        features: ["Real-time Route Optimization", "Earnings Dashboard", "In-app Chat & Calling", "Availability Toggle", "Delivery Proof (OTP/Photo)", "Navigation Integration"]
      },
      {
        id: "admin",
        label: "Super Admin",
        shortLabel: "Admin",
        features: ["Global Dashboard", "Commission Management", "User & Vendor Control", "Dispute Resolution", "Heatmap Analytics", "Content Management System"]
      }
    ]
  },
  problemsSection: {
    heading: "Major Problems in Food Delivery App Development",
    subHeading: "We understand the exact hurdles you face while building a food delivery business. Here is how our architecture solves them natively.",
    items: [
      { title: "High Aggregator Commissions", problem: "Third-party apps charge 20-30% commission per order.", solution: "Build your own platform and keep 100% of your revenue and profits." },
      { title: "No Customer Data Ownership", problem: "You don't own your customer data, preventing direct marketing.", solution: "Gain complete access to customer data, order history, and preferences." },
      { title: "Poor Delivery Routing", problem: "Inefficient routes lead to cold food and unhappy customers.", solution: "AI-powered algorithms for real-time route optimization and batching." },
      { title: "Limited Brand Identity", problem: "Your brand is hidden behind the aggregator's generic interface.", solution: "A 100% white-labeled app that highlights your brand's unique identity." },
      { title: "Scaling Bottlenecks", problem: "Basic apps crash during peak hours or festival seasons.", solution: "Enterprise-grade scalable cloud architecture that auto-scales on demand." }
    ]
  },
  offeringsSection: {
    heading: "Our Food Delivery App Offerings",
    subHeading: "Customized solutions to scale your restaurant chain or aggregator business.",
    items: [
      { title: "Aggregator App Development", description: "Build a multi-vendor platform like Swiggy connecting multiple restaurants with customers." },
      { title: "Single Restaurant App", description: "A dedicated application for your restaurant chain to take direct orders and bypass commissions." },
      { title: "Cloud Kitchen Solution", description: "Tailor-made software for dark kitchens to manage multiple brands from a single dashboard." },
      { title: "Grocery Delivery Apps", description: "Expand your delivery horizons with specialized modules for grocery and daily essentials." },
      { title: "Meal Kit Delivery", description: "Subscription-based delivery software for weekly meal kits and diet plans." },
      { title: "Catering Management", description: "Bulk order management system for large-scale catering businesses and events." }
    ]
  },
  techFeaturesSection: {
    heading: "Emerging Technologies",
    subHeading: "We build intelligent, scalable systems powered by the latest technologies to keep you ahead of the competition.",
    items: [
      { title: "AI-Powered Recommendations", description: "Machine learning algorithms that suggest dishes based on user behavior." },
      { title: "Real-time WebSocket Tracking", description: "Sub-second latency live tracking of delivery agents on interactive maps." },
      { title: "Predictive ETA Engine", description: "Highly accurate delivery time estimates considering traffic and prep time." },
      { title: "Fraud Detection System", description: "Automated flagging of fake orders and suspicious transaction patterns." },
      { title: "Automated Dispatch", description: "Smart auto-assignment of orders to the nearest and best-rated delivery agents." },
      { title: "Voice Search Integration", description: "Allow users to search for food using natural language voice commands." }
    ]
  },
  clonesSection: {
    heading: "Looking for a Specific Market Clone?",
    subHeading: "We provide highly customizable, ready-to-launch clone scripts inspired by industry leaders to get your business off the ground in weeks, not months.",
    items: [
      { name: "Swiggy Clone", description: "Launch a multi-vendor food delivery platform." },
      { name: "UberEats Clone", description: "Premium, highly scalable food aggregator solution." },
      { name: "Zomato Clone", description: "Food delivery with restaurant discovery and reviews." },
      { name: "DoorDash Clone", description: "Logistics-first food delivery platform." }
    ],
    mockup: {
      type: "service",
      labels: {
        header: "Current Location",
        searchPlaceholder: "Search restaurants or food...",
        categoriesTitle: "Categories",
        listTitle: "Featured Near You"
      }
    }
  },
  pricingSection: {
    heading: "Transparent Pricing & Packages",
    subHeading: "Choose the perfect plan to launch your food delivery business. No hidden costs, 100% source code ownership.",
    items: [
      {
        tierName: "MVP Build",
        price: "$10,000",
        description: "Perfect for startups testing the market with essential features.",
        features: ["Customer iOS & Android App", "Basic Restaurant Panel", "Driver App", "Standard Admin Dashboard", "3 Months Free Support", "Source Code Included"]
      },
      {
        tierName: "Growth Solution",
        price: "$25,000",
        description: "For scaling businesses needing advanced routing and analytics.",
        features: ["Everything in MVP", "AI Route Optimization", "Marketing & Promo Engine", "Advanced Analytics", "6 Months Free Support", "Custom Branding"]
      },
      {
        tierName: "Enterprise Ecosystem",
        price: "Custom",
        description: "For large chains requiring highly custom microservices architecture.",
        features: ["Everything in Growth", "Multi-City/Country Support", "POS & ERP Integration", "Dedicated Project Manager", "12 Months Free Support", "Unlimited Revisions"]
      }
    ]
  },
  faqSection: {
    heading: "Frequently Asked Questions",
    subHeading: "Find answers to the most commonly asked questions regarding our food delivery app development services.",
    items: [
      { question: "How long does it take to develop a food delivery app?", answer: "A standard white-label solution can be launched in 4-6 weeks. Custom development from scratch usually takes 3-4 months depending on feature complexity." },
      { question: "Do I get the complete source code?", answer: "Yes, you will have 100% ownership of the intellectual property and the complete source code upon final payment." },
      { question: "Can you integrate my existing POS system?", answer: "Absolutely. We have experience integrating with major POS systems and can build custom APIs for any legacy systems you might be using." },
      { question: "Is the application scalable for thousands of concurrent users?", answer: "Yes, we use a robust cloud-native microservices architecture on AWS/Google Cloud designed to auto-scale during peak traffic." },
      { question: "Do you provide post-launch maintenance and support?", answer: "Yes, we offer complimentary support for 3-12 months post-launch depending on your chosen package, with optional extended AMCs." },
      { question: "What payment gateways do you support?", answer: "We can integrate any local or international payment gateway like Stripe, PayPal, Razorpay, CCAvenue, or Apple/Google Pay." }
    ]
  }
};
