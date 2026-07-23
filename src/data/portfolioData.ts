export interface PortfolioProject {
  id: string;
  title: string;
  desc: string;
  image: string;
  category: string;
  clientName: string;
  duration: string;
  technologies: string[];
  fullChallenge: string;
  fullSolution: string;
  results: string[];
  gallery: string[];
}

export const portfolioCategories = [
  "All", "Taxi", "Fitness", "Blockchain", "Dating", "Food", 
  "NEWS", "Education", "Ecommerce", "Finance", "Medicine Delivery", "Astrology"
];

export const portfolioData: PortfolioProject[] = [
  {
    id: "urban-ride-hailing",
    title: "Urban Ride-Hailing",
    desc: "Challenge: A Startup Wanted To Enter The Competitive Ride-Hailing Market With A Unique Offering...",
    image: "/images/portfolio/ride-app.webp",
    category: "Taxi",
    clientName: "Urban Mobility Corp",
    duration: "6 Months",
    technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
    fullChallenge: "A startup wanted to enter the competitive ride-hailing market with a unique offering. They needed an application that could handle high concurrency, provide real-time tracking with minimal latency, and offer a seamless payment experience for users.",
    fullSolution: "We developed a comprehensive Uber-like taxi application. The solution included dedicated native-feel apps for riders and drivers using React Native. The backend was powered by Node.js and MongoDB to handle thousands of concurrent requests. We integrated Google Maps API for precise routing and Socket.io for real-time location updates.",
    results: [
      "Successfully launched in 3 major cities within 6 months.",
      "Achieved 100k+ downloads in the first quarter.",
      "Reduced average wait time by 20% compared to local competitors.",
      "Maintained a 4.8/5 app store rating."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp",
      "/images/portfolio/fitness-app.webp",
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "fitclub-mobile-app",
    title: "Fitclub Mobile App",
    desc: "Welcome To FitClub, Where Your Fitness Journey Meets Innovation. Seamlessly Sculpt Your Well-Being...",
    image: "/images/portfolio/fitness-app.webp",
    category: "Fitness",
    clientName: "FitClub Inc",
    duration: "4 Months",
    technologies: ["Flutter", "Firebase", "HealthKit API", "Stripe"],
    fullChallenge: "FitClub needed a digital platform to extend their physical gym experience. They wanted an app where users could track workouts, book classes, and engage with personal trainers virtually.",
    fullSolution: "We built a cross-platform mobile application using Flutter. The app features personalized workout plans, live class streaming, and integration with Apple HealthKit and Google Fit for comprehensive health tracking. We also implemented a secure payment gateway for premium subscriptions.",
    results: [
      "Increased user engagement by 45%.",
      "Boosted premium class bookings by 30%.",
      "Seamlessly integrated over 10,000 active users from legacy systems."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  },
  {
    id: "crypto-wallet-tracker",
    title: "Crypto Wallet Tracker",
    desc: "Secure and manage your crypto assets with real-time tracking, advanced security features, and seamless portfolio integration.",
    image: "/images/portfolio/ride-app.webp",
    category: "Blockchain",
    clientName: "BlockSafe Solutions",
    duration: "8 Months",
    technologies: ["Next.js", "Solidity", "Web3.js", "Tailwind CSS"],
    fullChallenge: "The client needed a highly secure, non-custodial crypto wallet that allowed users to track multiple assets across various blockchains without compromising on speed or security.",
    fullSolution: "Developed a robust decentralized application (dApp) using Next.js and Web3.js. Implemented custom smart contracts using Solidity for secure token swapping. The UI was designed with Tailwind CSS for a modern, dark-mode focused aesthetic.",
    results: [
      "Handled over $10M in transaction volume in the first month.",
      "Zero security breaches reported.",
      "Supported 5+ major blockchains out of the box."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "love-match-app",
    title: "Love Match App",
    desc: "Find your perfect match with our AI-driven matchmaking algorithm, ensuring meaningful connections and safe dating experiences.",
    image: "/images/portfolio/fitness-app.webp",
    category: "Dating",
    clientName: "Romance Tech LLC",
    duration: "5 Months",
    technologies: ["React Native", "Python", "TensorFlow", "AWS"],
    fullChallenge: "Creating a safe and engaging dating environment while filtering out fake profiles and providing highly accurate matches based on user behavior and preferences.",
    fullSolution: "Integrated a custom AI engine built with Python and TensorFlow to analyze user preferences and suggest matches. We implemented strict facial recognition for profile verification to ensure safety.",
    results: [
      "Achieved a 60% higher match success rate than previous algorithms.",
      "Reduced fake profiles by 99%.",
      "Reached #5 in the App Store Lifestyle category."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  },
  {
    id: "quick-bite-delivery",
    title: "Quick Bite Delivery",
    desc: "Order your favorite food online and get it delivered in minutes. Featuring live tracking and contactless delivery options.",
    image: "/images/portfolio/ride-app.webp",
    category: "Food",
    clientName: "QuickBite",
    duration: "7 Months",
    technologies: ["React", "React Native", "Node.js", "PostgreSQL"],
    fullChallenge: "Building a three-way marketplace connecting restaurants, delivery partners, and customers, requiring real-time synchronization across all three applications.",
    fullSolution: "We architected a microservices-based backend to handle distinct logic for the three user bases. Real-time order tracking was built using WebSockets, and a robust driver allocation algorithm was implemented to optimize delivery routes.",
    results: [
      "Onboarded 500+ restaurants in the first two months.",
      "Average delivery time reduced to under 30 minutes.",
      "Processed over 10,000 orders daily."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "global-news-aggregator",
    title: "Global News Aggregator",
    desc: "Get the latest news from around the world personalized to your interests. Clean UI with minimal distractions.",
    image: "/images/portfolio/fitness-app.webp",
    category: "NEWS",
    clientName: "GlobalNews Media",
    duration: "3 Months",
    technologies: ["Next.js", "Tailwind CSS", "Redis", "News API"],
    fullChallenge: "Delivering real-time news updates globally while maintaining a sub-second page load speed and handling sudden traffic spikes during breaking news.",
    fullSolution: "Leveraged Next.js Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) combined with Redis caching. The front-end was designed to be hyper-minimalist, focusing entirely on readability.",
    results: [
      "Achieved a perfect 100/100 Google Lighthouse performance score.",
      "Handled a 500% traffic spike during major global events seamlessly.",
      "Increased average session duration by 2 minutes."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  },
  {
    id: "learn-grow-platform",
    title: "Learn & Grow Platform",
    desc: "Interactive courses for kids and adults. Gamified learning experience to make education fun and engaging.",
    image: "/images/portfolio/ride-app.webp",
    category: "Education",
    clientName: "EduTech Pioneers",
    duration: "6 Months",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    fullChallenge: "Creating a scalable Learning Management System (LMS) that supports heavy video streaming, interactive quizzes, and gamification elements.",
    fullSolution: "Developed a robust backend with Laravel to handle course management and user progress tracking. Videos were encoded and streamed efficiently using AWS S3 and CloudFront. Vue.js powered a highly interactive and responsive front-end.",
    results: [
      "Supported 50,000+ active learners.",
      "Hosted over 1,000 hours of high-definition video content.",
      "Increased course completion rates by 35% through gamification."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "fashion-hub-ecommerce",
    title: "Fashion Hub Ecommerce",
    desc: "Shop the latest trends in fashion. A seamless shopping experience with AR try-on features and personalized recommendations.",
    image: "/images/portfolio/fitness-app.webp",
    category: "Ecommerce",
    clientName: "Fashion Hub",
    duration: "5 Months",
    technologies: ["Next.js", "Shopify Plus", "Three.js", "Tailwind CSS"],
    fullChallenge: "Integrating complex Augmented Reality (AR) try-on features into a fast, headless e-commerce storefront without sacrificing performance.",
    fullSolution: "Built a headless Shopify storefront using Next.js. We utilized Three.js for the AR try-on components, ensuring they were dynamically loaded only when requested to keep the initial page load incredibly fast.",
    results: [
      "Increased conversion rates by 25%.",
      "Reduced product return rates by 15% due to the AR try-on feature.",
      "Achieved sub-2 second load times for the entire catalog."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  },
  {
    id: "personal-finance-manager",
    title: "Personal Finance Manager",
    desc: "Track your expenses and grow your wealth. Smart budgeting tools and investment insights at your fingertips.",
    image: "/images/portfolio/ride-app.webp",
    category: "Finance",
    clientName: "WealthTech Inc",
    duration: "6 Months",
    technologies: ["React Native", "Node.js", "Plaid API", "PostgreSQL"],
    fullChallenge: "Securely aggregating financial data from multiple banking institutions while presenting complex analytics in an easy-to-understand mobile interface.",
    fullSolution: "Integrated the Plaid API for secure, read-only bank data connections. Designed intuitive charts and graphs using custom visualization libraries. Implemented strict encryption and security protocols (SOC2 compliant) to protect user data.",
    results: [
      "Users successfully connected over 100,000 bank accounts.",
      "Ranked in the Top 10 Finance apps within 3 months of launch.",
      "Zero data breaches."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "mediquick-delivery",
    title: "MediQuick Delivery",
    desc: "Get medicines delivered to your doorstep. Upload prescriptions and consult with doctors online seamlessly.",
    image: "/images/portfolio/fitness-app.webp",
    category: "Medicine Delivery",
    clientName: "MediQuick Health",
    duration: "5 Months",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Twilio API"],
    fullChallenge: "Developing a HIPAA-compliant platform that handles sensitive patient prescriptions, integrates tele-consultations, and manages rapid delivery logistics.",
    fullSolution: "Created a secure ecosystem using Flutter and Firebase. Implemented end-to-end encryption for patient records and prescriptions. Integrated Twilio for secure, in-app video consultations with doctors before medicine dispatch.",
    results: [
      "Processed 5,000+ prescriptions safely in the first month.",
      "Achieved a 4.9/5 satisfaction rating from patients.",
      "Expanded service area to 5 new cities within the year."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  },
  {
    id: "astro-future-predictions",
    title: "Astro Future Predictions",
    desc: "Daily horoscopes and astrology readings based on precise planetary alignments. Connect with expert astrologers.",
    image: "/images/portfolio/ride-app.webp",
    category: "Astrology",
    clientName: "AstroTech Solutions",
    duration: "4 Months",
    technologies: ["React", "Node.js", "WebRTC", "Stripe"],
    fullChallenge: "Providing a robust platform for seamless, high-quality audio/video calls between users and astrologers, along with complex real-time billing per minute.",
    fullSolution: "Utilized WebRTC for low-latency peer-to-peer communication. Developed a custom billing engine using Stripe to accurately charge users by the minute during live sessions. Created an intuitive dashboard for astrologers to manage their availability.",
    results: [
      "Facilitated over 10,000 hours of live consultations.",
      "Maintained 99.9% uptime for the video calling infrastructure.",
      "Increased astrologer revenue by 40% through the new platform."
    ],
    gallery: [
      "/images/portfolio/ride-app.webp"
    ]
  },
  {
    id: "city-cab-service",
    title: "City Cab Service",
    desc: "Reliable and fast taxi service in your city. Ride-sharing options and corporate packages available.",
    image: "/images/portfolio/fitness-app.webp",
    category: "Taxi",
    clientName: "CityCab Services",
    duration: "6 Months",
    technologies: ["React Native", "Java Spring Boot", "MySQL", "RabbitMQ"],
    fullChallenge: "Upgrading a legacy taxi dispatch system to a modern app-based solution without disrupting ongoing daily operations of a fleet of 1,000+ vehicles.",
    fullSolution: "We phased the rollout carefully. Built a robust Java Spring Boot backend to handle complex dispatch algorithms and integrated RabbitMQ for reliable message queuing between drivers and the central system.",
    results: [
      "Successfully transitioned 1,000+ drivers with zero downtime.",
      "Increased daily rides by 25% due to the improved user app.",
      "Reduced operational overhead by automating dispatch."
    ],
    gallery: [
      "/images/portfolio/fitness-app.webp"
    ]
  }
];
