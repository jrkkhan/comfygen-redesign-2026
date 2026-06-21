export interface MegaMenuLink {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface MegaMenuCategory {
  title: string;
  links: MegaMenuLink[];
}

export const megaMenuData = {
  service: [
    {
      id: "mobile-app",
      title: "Mobile App Development",
      subtitle: "Innovative Solutions for Every Platform",
      icon: "Smartphone",
      links: [
        { label: "Mobile App Development", href: "/mobile-app-development" },
        { label: "Application Consulting Service", href: "#" },
        { label: "Hybrid Mobile App Development", href: "#" },
        { label: "iOS App Development", href: "#" },
        { label: "Android App Development", href: "#" },
        { label: "Flutter Development", href: "#" },
        { label: "React Native Development", href: "#" },
        { label: "Startup App Development", href: "#" },
        { label: "White Label Mobile App Development", href: "#" },
        { label: "Roadside Assistance App Development", href: "#" },
      ]
    },
    {
      id: "ai-dev",
      title: "AI Development",
      subtitle: "Best AI Development Service",
      icon: "BrainCircuit",
      links: [
        { label: "AI Development", href: "#" },
        { label: "Generative AI Development", href: "#" },
        { label: "AI Interview Scheduling Software Development", href: "#" },
        { label: "Data Service", href: "#" },
        { label: "Data Analytics", href: "#" },
        { label: "Tableau Consulting Services", href: "#" },
        { label: "Hire Data Scientist", href: "#" },
        { label: "AWS Analytics Service", href: "#" },
        { label: "Business Intelligence", href: "#" },
        { label: "Power BI Consulting Services", href: "#" },
        { label: "Sales Performance Dashboard", href: "#" },
      ]
    },
    {
      id: "blockchain-app",
      title: "Blockchain App Development",
      subtitle: "Secure Blockchain-Based App Solutions",
      icon: "Link",
      links: [
        { label: "Blockchain Development", href: "#" },
        { label: "Blockchain Consulting Service", href: "#" },
        { label: "Substrate Development Company", href: "#" },
        { label: "Polygon Blockchain Development", href: "#" },
        { label: "Hyperledger Blockchain Development", href: "#" },
        { label: "Multichain Blockchain Development", href: "#" },
        { label: "Solana Blockchain Development", href: "#" },
        { label: "Stellar Blockchain Development", href: "#" },
        { label: "Cardano Blockchain Development", href: "#" },
        { label: "Ethereum Blockchain Development", href: "#" },
      ]
    },
    {
      id: "coin-token",
      title: "Coin And Tokens Development",
      subtitle: "Custom Cryptocurrency Creation Made Easy",
      icon: "Coins",
      links: [
        { label: "Crypto Token Development", href: "#" },
        { label: "ERC-20 Token Development", href: "#" },
        { label: "Ethereum Token Development", href: "#" },
        { label: "Solana Token Development", href: "#" },
        { label: "Tron Token Development", href: "#" },
        { label: "NFT Token Development", href: "#" },
        { label: "Altcoin Development Services", href: "#" },
        { label: "P2P Crypto Exchange Development", href: "#" },
        { label: "Crypto Trading Bot Development", href: "#", isNew: true },
      ]
    },
    {
      id: "full-stack",
      title: "Full Stack Development",
      subtitle: "In-depth End-to-End Development Services",
      icon: "Code",
      links: [
        { label: "Website Development", href: "#" },
        { label: "Web Design", href: "#" },
        { label: "MERN Stack Development", href: "#" },
        { label: "Node.js App Development", href: "#" },
        { label: "React Js Development", href: "#" },
        { label: "Next Js Development", href: "#" },
        { label: "Python Development", href: "#" },
      ]
    },
    {
      id: "hire-developers",
      title: "Hire Dedicated Developers",
      subtitle: "Skilled Developers for Your Projects",
      icon: "UserPlus",
      links: [
        { label: "Hire Mobile App Developer", href: "#" },
        { label: "Hire .Net Developer", href: "#" },
        { label: "Hire Blockchain Developer", href: "#" },
      ]
    }
  ],
  serviceFeature: {
    image: "/images/hero/team-collaborating.webp",
    buttonText: "Connect to expert \u2192",
    href: "#"
  },
  solutions: [
    {
      id: "on-demand",
      title: "On Demand Mobile App",
      subtitle: "Tailored Apps for Instant Needs",
      icon: "User",
      links: [
        "Delivery App Development", "Salon App Development",
        "Food Delivery App Development", "Business Directory App Development",
        "Pizza Delivery App Development", "Logistics App Development",
        "Milk Delivery App Development", "Home Service App Development",
        "Flower Delivery App Development", "Meat Delivery App Development",
        "Water Delivery App Development", "Alcohol Delivery App Development",
        "Taxi App Development", "Courier Delivery App Development",
        "Astrology App Development", "Billing Software Development",
        "Ice Cream Delivery App Development", "Accounting Software Development",
        "Fuel Delivery App Development"
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain Solution",
      subtitle: "Secure Your Digital Future",
      icon: "Box",
      links: [
        "POW Blockchain Development", "POA Blockchain Development",
        "DPOS Blockchain Development", "DApp Development Company",
        "DeFi Development Company", "DeFi Smart Contract Development",
        "Smart Contract Development", "Smart Contract MLM Software",
        "ICO Development Company", "Blockchain Wallet Development Company"
      ]
    },
    {
      id: "mobile-solutions",
      title: "Mobile App Solutions",
      subtitle: "Customized Applications for Every Industry",
      icon: "LayoutGrid",
      links: [
        "Social Media App Development", "IoT Development",
        "Mobile Game Development", "News & Web App Development",
        "Cricket Fast Line App Development", "Education App Development",
        "E-Learning App Development", "Magazine App Development"
      ]
    },
    {
      id: "web3",
      title: "Web3 Development",
      subtitle: "Building the Future with Web3",
      icon: "CloudRain", // Close approximation for the cloud/network icon
      links: [
        "Metaverse Development Company", "NFT marketplace development"
      ]
    },
    {
      id: "crypto",
      title: "Crypto Development",
      subtitle: "Innovate Your Crypto Vision",
      icon: "Bitcoin",
      links: [
        "Wallet Development Company", "Crypto Payment Gateway Development",
        "Crypto Wallet Development", "Decentralized wallet Development",
        "Crypto Exchange Services", "NFT Wallet Development Company",
        "Crypto MLM Software Development", "White Label Cryptocurrency Wallet Development",
        "Crypto White Paper Development", "Multi Currency Wallet Development Company",
        "Decentralized Exchange Development", "Defi Wallet Development",
        "White Label Crypto Exchange Development", "Smart Contract Wallet Development",
        "Hybrid Crypto Exchange Development", "Blockchain Wallet Development",
        "Centralized Crypto Exchange Development", "Crypto NFT Exchange Development",
        "Crypto Launchpad Development", "Mobile Crypto Wallet Development",
        "OTC Crypto Exchange Development", "Web3 Wallet Development"
      ]
    }
  ],
  solutionsFeature: {
    image: "/images/hero/team-collaborating.webp",
    buttonText: "Connect to expert \u2192",
    href: "#"
  },
  industries: [
    {
      id: "healthcare",
      title: "Healthcare App Development",
      subtitle: "Transforming Healthcare with Smart Apps",
      icon: "HeartPulse",
      links: [
        "Healthcare App Development", "Doctor Appointment App Development",
        "Medicine Delivery App Development", "Clinical App Development",
        "Pharmacy App Development", "Telemedicine App Development",
        "Laboratory App Development", "Health Tracking App Development"
      ]
    },
    {
      id: "finance",
      title: "Finance App Development",
      subtitle: "Transforming Financial Ideas into Apps",
      icon: "Wallet",
      links: [
        "Finance App Development", "Credit Scoring App Development",
        "Personal Finance App Development", "P2P Payment App Development",
        "Mobile Banking App Development", "Car Finance App Development",
        "UPI Payment App Development", "Truck Finance App Development",
        "NeoBank App Development", "eWallet App Development",
        "Banking Software Development", "Insurance App Development",
        "Islamic Banking App Development"
      ]
    },
    {
      id: "education",
      title: "Education App Development",
      subtitle: "Customized Applications for Every Industry",
      icon: "GraduationCap",
      links: [
        "Education App Development", "E-Learning App Development",
        "Tutor App Development", "Language learning App Development",
        "Exam Preparation App Development"
      ]
    },
    {
      id: "ecommerce",
      title: "Ecommerce Development",
      subtitle: "Empowering Seamless Online Shopping",
      icon: "ShoppingCart",
      links: [
        "Ecommerce App Development", "Fashion App Development",
        "Grocery App Development", "FMCG App Development",
        "Fashion App Development", "Quick Ecommerce Development"
      ]
    },
    {
      id: "dating",
      title: "Dating App Development",
      subtitle: "Smart Solutions for Digital Romance",
      icon: "Heart",
      links: [
        "Dating App Development", "Social Dating App Development",
        "Matchmaking App Development", "Video Dating App Development"
      ]
    }
  ],
  industriesFeature: {
    image: "/images/hero/team-collaborating.webp",
    buttonText: "Connect to expert \u2192",
    href: "#"
  },
  company: [
    { title: "About Us", desc: "Who we are & what we do", href: "/about-us", isActive: true },
    { title: "Our Portfolio", desc: "Showcasing Our Successful Projects", href: "#" },
    { title: "Career At comfygen", desc: "Join Our Dynamic Team Today", href: "#" },
    { title: "Life at Comfygen", desc: "Experience Our Collaborative Work Culture", href: "/life-at-comfygen" },
    { title: "Client Testimonials", desc: "What Our Clients Say About Us", href: "/client-testimonials" },
    { title: "Contact us", desc: "Get in Touch with Us", href: "#" },
    { title: "Our Blog", desc: "Read our latest articles", href: "#" }
  ],
  companyFeature: {
    image: "/images/hero/team-collaborating.webp",
    buttonText: "Connect to expert \u2192",
    href: "#"
  },
  companyBlog: {
    title: "Our Blog",
    postTitle: "Cost To Develop Social Dating App Like Coffee Meets Bagel",
    date: "24 December 2024",
    href: "#",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80"
  }
};
