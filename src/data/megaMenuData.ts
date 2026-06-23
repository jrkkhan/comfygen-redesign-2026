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
        { label: "Application Consulting Service", href: "/application-consulting-services" },
        { label: "Hybrid Mobile App Development", href: "/hybrid-mobile-app-development" },
        { label: "iOS App Development", href: "/ios-app-development" },
        { label: "Android App Development", href: "/android-app-development" },
        { label: "Flutter Development", href: "/flutter-development-company" },
        { label: "React Native Development", href: "/react-native-development" },
        { label: "Startup App Development", href: "/startup-app-development" },
        { label: "White Label Mobile App Development", href: "/white-label-mobile-app-development" },
        { label: "Roadside Assistance App Development", href: "/roadside-assistance-app-development" },
      ]
    },
    {
      id: "ai-dev",
      title: "AI Development",
      subtitle: "Best AI Development Service",
      icon: "BrainCircuit",
      links: [
        { label: "AI Development", href: "/ai-development" },
        { label: "Generative AI Development", href: "/generative-ai-development" },
        { label: "AI Interview Scheduling Software Development", href: "/ai-interview-scheduling-software-development" },
        { label: "Data Service", href: "/data-service" },
        { label: "Data Analytics", href: "/data-analytics" },
        { label: "Tableau Consulting Services", href: "/tableau-consulting-services" },
        { label: "Hire Data Scientist", href: "/hire-data-scientist" },
        { label: "AWS Analytics Service", href: "/aws-analytics-service" },
        { label: "Business Intelligence", href: "/business-intelligence" },
        { label: "Power BI Consulting Services", href: "/power-bi-consulting-services" },
        { label: "Sales Performance Dashboard", href: "/sales-performance-dashboard" },
      ]
    },
    {
      id: "blockchain-app",
      title: "Blockchain App Development",
      subtitle: "Secure Blockchain-Based App Solutions",
      icon: "Link",
      links: [
        { label: "Blockchain Development", href: "/blockchain-development" },
        { label: "Blockchain Consulting Service", href: "/blockchain-consulting-service" },
        { label: "Substrate Development Company", href: "/substrate-development-company" },
        { label: "Polygon Blockchain Development", href: "/polygon-blockchain-development" },
        { label: "Hyperledger Blockchain Development", href: "/hyperledger-blockchain-development" },
        { label: "Multichain Blockchain Development", href: "/multichain-blockchain-development" },
        { label: "Solana Blockchain Development", href: "/solana-blockchain-development-company" },
        { label: "Stellar Blockchain Development", href: "/stellar-blockchain-development" },
        { label: "Cardano Blockchain Development", href: "/cardano-blockchain-development" },
        { label: "Ethereum Blockchain Development", href: "/ethereum-blockchain-development" },
      ]
    },
    {
      id: "coin-token",
      title: "Coin And Tokens Development",
      subtitle: "Custom Cryptocurrency Creation Made Easy",
      icon: "Coins",
      links: [
        { label: "Crypto Token Development", href: "/crypto-token-development" },
        { label: "ERC-20 Token Development", href: "/erc-20-token-development" },
        { label: "Ethereum Token Development", href: "/ethereum-token-development" },
        { label: "Solana Token Development", href: "/solana-token-development" },
        { label: "Tron Token Development", href: "/tron-token-development" },
        { label: "NFT Token Development", href: "/nft-token-development" },
        { label: "Altcoin Development Services", href: "/altcoin-development-services" },
        { label: "P2P Crypto Exchange Development", href: "/p2p-crypto-exchange-development" },
        { label: "Crypto Trading Bot Development", href: "/crypto-trading-bot-development", isNew: true },
      ]
    },
    {
      id: "full-stack",
      title: "Full Stack Development",
      subtitle: "In-depth End-to-End Development Services",
      icon: "Code",
      links: [
        { label: "Website Development", href: "/website-development" },
        { label: "Web Design", href: "/web-design" },
        { label: "MERN Stack Development", href: "/mern-stack-development" },
        { label: "Node.js App Development", href: "/node-js-app-development" },
        { label: "React Js Development", href: "/react-js-development" },
        { label: "Next Js Development", href: "/next-js-development" },
        { label: "Python Development", href: "/python-development" },
      ]
    },
    {
      id: "hire-developers",
      title: "Hire Dedicated Developers",
      subtitle: "Skilled Developers for Your Projects",
      icon: "UserPlus",
      links: [
        { label: "Hire Mobile App Developer", href: "/hire-mobile-app-developer" },
        { label: "Hire .Net Developer", href: "/hire-net-developer" },
        { label: "Hire Blockchain Developer", href: "/hire-blockchain-developer" },
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
        { label: "Delivery App Development", href: "/delivery-app-development" }, { label: "Salon App Development", href: "/salon-app-development" },
        { label: "Food Delivery App Development", href: "/food-delivery-app-development" }, { label: "Business Directory App Development", href: "/business-directory-app-development" },
        { label: "Pizza Delivery App Development", href: "/pizza-delivery-app-development" }, { label: "Logistics App Development", href: "/logistics-app-development" },
        { label: "Milk Delivery App Development", href: "/milk-delivery-app-development" }, { label: "Home Service App Development", href: "/home-service-app-development" },
        { label: "Flower Delivery App Development", href: "/flower-delivery-app-development" }, { label: "Meat Delivery App Development", href: "/meat-delivery-app-development" },
        { label: "Water Delivery App Development", href: "/water-delivery-app-development" }, { label: "Alcohol Delivery App Development", href: "/alcohol-delivery-app-development" },
        { label: "Taxi App Development", href: "/taxi-app-development" }, { label: "Courier Delivery App Development", href: "/courier-delivery-app-development" },
        { label: "Astrology App Development", href: "/astrology-app-development" }, { label: "Billing Software Development", href: "/billing-software-development" },
        { label: "Ice Cream Delivery App Development", href: "/ice-cream-delivery-app-development" }, { label: "Accounting Software Development", href: "/accounting-software-development" },
        { label: "Fuel Delivery App Development", href: "/fuel-delivery-app-development" }
      ]
    },
    {
      id: "blockchain",
      title: "Blockchain Solution",
      subtitle: "Secure Your Digital Future",
      icon: "Box",
      links: [
        { label: "POW Blockchain Development", href: "/pow-blockchain-development" }, { label: "POA Blockchain Development", href: "/poa-blockchain-development" },
        { label: "DPOS Blockchain Development", href: "/dpos-blockchain-development" }, { label: "DApp Development Company", href: "/dapp-development-company" },
        { label: "DeFi Development Company", href: "/defi-development-company" }, { label: "DeFi Smart Contract Development", href: "/defi-smart-contract-development" },
        { label: "Smart Contract Development", href: "/smart-contract-development" }, { label: "Smart Contract MLM Software", href: "/smart-contract-mlm-software" },
        { label: "ICO Development Company", href: "/ico-development-company" }, { label: "Blockchain Wallet Development Company", href: "/blockchain-wallet-development-company" }
      ]
    },
    {
      id: "mobile-solutions",
      title: "Mobile App Solutions",
      subtitle: "Customized Applications for Every Industry",
      icon: "LayoutGrid",
      links: [
        { label: "Social Media App Development", href: "/social-media-app-development" }, { label: "IoT Development", href: "/iot-development" },
        { label: "Mobile Game Development", href: "/mobile-game-development" }, { label: "News & Web App Development", href: "/news-web-app-development" },
        { label: "Cricket Fast Line App Development", href: "/cricket-fast-line-app-development" }, { label: "Education App Development", href: "/education-app-development" },
        { label: "E-Learning App Development", href: "/e-learning-app-development" }, { label: "Magazine App Development", href: "/magazine-app-development" }
      ]
    },
    {
      id: "web3",
      title: "Web3 Development",
      subtitle: "Building the Future with Web3",
      icon: "CloudRain", // Close approximation for the cloud/network icon
      links: [
        { label: "Metaverse Development Company", href: "/metaverse-development-company" }, { label: "NFT marketplace development", href: "/nft-marketplace-development" }
      ]
    },
    {
      id: "crypto",
      title: "Crypto Development",
      subtitle: "Innovate Your Crypto Vision",
      icon: "Bitcoin",
      links: [
        { label: "Wallet Development Company", href: "/wallet-development-company" }, { label: "Crypto Payment Gateway Development", href: "/crypto-payment-gateway-development" },
        { label: "Crypto Wallet Development", href: "/crypto-wallet-development" }, { label: "Decentralized wallet Development", href: "/decentralized-wallet-development" },
        { label: "Crypto Exchange Services", href: "/crypto-exchange-services" }, { label: "NFT Wallet Development Company", href: "/nft-wallet-development-company" },
        { label: "Crypto MLM Software Development", href: "/crypto-mlm-software-development" }, { label: "White Label Cryptocurrency Wallet Development", href: "/white-label-cryptocurrency-wallet-development" },
        { label: "Crypto White Paper Development", href: "/crypto-white-paper-development" }, { label: "Multi Currency Wallet Development Company", href: "/multi-currency-wallet-development-company" },
        { label: "Decentralized Exchange Development", href: "/decentralized-exchange-development" }, { label: "Defi Wallet Development", href: "/defi-wallet-development" },
        { label: "White Label Crypto Exchange Development", href: "/white-label-crypto-exchange-development" }, { label: "Smart Contract Wallet Development", href: "/smart-contract-wallet-development" },
        { label: "Hybrid Crypto Exchange Development", href: "/hybrid-crypto-exchange-development" }, { label: "Blockchain Wallet Development", href: "/blockchain-wallet-development" },
        { label: "Centralized Crypto Exchange Development", href: "/centralized-crypto-exchange-development" }, { label: "Crypto NFT Exchange Development", href: "/crypto-nft-exchange-development" },
        { label: "Crypto Launchpad Development", href: "/crypto-launchpad-development" }, { label: "Mobile Crypto Wallet Development", href: "/mobile-crypto-wallet-development" },
        { label: "OTC Crypto Exchange Development", href: "/otc-crypto-exchange-development" }, { label: "Web3 Wallet Development", href: "/web3-wallet-development" }
      ]
    }
  ],
  solutionsFeature: {
    image: { label: "/images/hero/team-collaborating.webp", href: "/images-hero-team-collaborating-webp" },
    buttonText: { label: "Connect to expert \u2192", href: "/connect-to-expert-u2192" },
    href: { label: "#", href: "/" }
  },
  industries: [
    {
      id: "healthcare",
      title: "Healthcare App Development",
      subtitle: "Transforming Healthcare with Smart Apps",
      icon: "HeartPulse",
      links: [
        { label: "Healthcare App Development", href: "/healthcare-app-development" }, { label: "Doctor Appointment App Development", href: "/doctor-appointment-app-development" },
        { label: "Medicine Delivery App Development", href: "/medicine-delivery-app-development" }, { label: "Clinical App Development", href: "/clinical-app-development" },
        { label: "Pharmacy App Development", href: "/pharmacy-app-development" }, { label: "Telemedicine App Development", href: "/telemedicine-app-development" },
        { label: "Laboratory App Development", href: "/laboratory-app-development" }, { label: "Health Tracking App Development", href: "/health-tracking-app-development" }
      ]
    },
    {
      id: "finance",
      title: "Finance App Development",
      subtitle: "Transforming Financial Ideas into Apps",
      icon: "Wallet",
      links: [
        { label: "Finance App Development", href: "/finance-app-development" }, { label: "Credit Scoring App Development", href: "/credit-scoring-app-development" },
        { label: "Personal Finance App Development", href: "/personal-finance-app-development" }, { label: "P2P Payment App Development", href: "/p2p-payment-app-development" },
        { label: "Mobile Banking App Development", href: "/mobile-banking-app-development" }, { label: "Car Finance App Development", href: "/car-finance-app-development" },
        { label: "UPI Payment App Development", href: "/upi-payment-app-development" }, { label: "Truck Finance App Development", href: "/truck-finance-app-development" },
        { label: "NeoBank App Development", href: "/neobank-app-development" }, { label: "eWallet App Development", href: "/ewallet-app-development" },
        { label: "Banking Software Development", href: "/banking-software-development" }, { label: "Insurance App Development", href: "/insurance-app-development" },
        { label: "Islamic Banking App Development", href: "/islamic-banking-app-development" }
      ]
    },
    {
      id: "education",
      title: "Education App Development",
      subtitle: "Customized Applications for Every Industry",
      icon: "GraduationCap",
      links: [
        { label: "Education App Development", href: "/education-app-development" }, { label: "E-Learning App Development", href: "/e-learning-app-development" },
        { label: "Tutor App Development", href: "/tutor-app-development" }, { label: "Language learning App Development", href: "/language-learning-app-development" },
        { label: "Exam Preparation App Development", href: "/exam-preparation-app-development" }
      ]
    },
    {
      id: "ecommerce",
      title: "Ecommerce Development",
      subtitle: "Empowering Seamless Online Shopping",
      icon: "ShoppingCart",
      links: [
        { label: "Ecommerce App Development", href: "/ecommerce-app-development" }, { label: "Fashion App Development", href: "/fashion-app-development" },
        { label: "Grocery App Development", href: "/grocery-app-development" }, { label: "FMCG App Development", href: "/fmcg-app-development" },
        { label: "Fashion App Development", href: "/fashion-app-development" }, { label: "Quick Ecommerce Development", href: "/quick-ecommerce-development" }
      ]
    },
    {
      id: "dating",
      title: "Dating App Development",
      subtitle: "Smart Solutions for Digital Romance",
      icon: "Heart",
      links: [
        { label: "Dating App Development", href: "/dating-app-development" }, { label: "Social Dating App Development", href: "/social-dating-app-development" },
        { label: "Matchmaking App Development", href: "/matchmaking-app-development" }, { label: "Video Dating App Development", href: "/video-dating-app-development" }
      ]
    }
  ],
  industriesFeature: {
    image: { label: "/images/hero/team-collaborating.webp", href: "/images-hero-team-collaborating-webp" },
    buttonText: { label: "Connect to expert \u2192", href: "/connect-to-expert-u2192" },
    href: { label: "#", href: "/" }
  },
  company: [
    { title: "About Us", desc: "Who we are & what we do", href: "/about-us", isActive: true },
    { title: "Our Portfolio", desc: "Showcasing Our Successful Projects", href: "/portfolio" },
    { title: "Career At Comfygen", desc: "Join Our Dynamic Team Today", href: "/career-at-comfygen" },
    { title: "Life at Comfygen", desc: "Experience Our Collaborative Work Culture", href: "/life-at-comfygen" },
    { title: "Client Testimonials", desc: "What Our Clients Say About Us", href: "/client-testimonials" },
    { title: "Contact us", desc: "Get in Touch with Us", href: "/contact-us" },
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
