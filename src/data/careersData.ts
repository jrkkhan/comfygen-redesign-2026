export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

export const departments = ["All", "Engineering", "Design", "Marketing", "Product"];

export const jobsData: Job[] = [
  {
    id: "frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "We are looking for an experienced Frontend Engineer with deep knowledge of React and Next.js to build pixel-perfect, highly performant user interfaces."
  },
  {
    id: "backend-engineer",
    title: "Backend Node.js Developer",
    department: "Engineering",
    location: "Jaipur, India",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Join our core team to design and develop scalable backend APIs using Node.js, Express, and PostgreSQL for our enterprise clients."
  },
  {
    id: "ui-ux-designer",
    title: "Lead UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Shape the future of our digital products. You will lead the design of complex web applications, focusing on modern aesthetics and smooth user experiences."
  },
  {
    id: "product-manager",
    title: "Technical Product Manager",
    department: "Product",
    location: "Jaipur, India / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Act as the bridge between our clients and engineering teams. You'll gather requirements, create roadmaps, and ensure timely delivery of software products."
  },
  {
    id: "seo-specialist",
    title: "SEO Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    experience: "2+ Years",
    description: "Drive organic growth through technical SEO, keyword strategy, and content optimization across our digital properties."
  },
  {
    id: "react-native-developer",
    title: "React Native Developer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    experience: "2+ Years",
    description: "Help us build beautiful cross-platform mobile apps for iOS and Android. Experience with mobile animations and state management is a must."
  }
];

export const perks = [
  {
    title: "Remote-First",
    description: "Work from anywhere in the world. We care about output, not hours spent at a desk.",
    icon: "globe"
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your dependents, plus a monthly wellness stipend.",
    icon: "heart"
  },
  {
    title: "Learning Budget",
    description: "Annual stipend for courses, books, and conferences to help you grow your skills.",
    icon: "book"
  },
  {
    title: "Flexible Hours",
    description: "Set your own schedule. As long as you overlap with core hours for meetings, you decide when you work.",
    icon: "clock"
  },
  {
    title: "Latest Gear",
    description: "We'll set you up with a top-of-the-line MacBook and accessories to ensure you do your best work.",
    icon: "laptop"
  },
  {
    title: "Annual Retreats",
    description: "Once a year we fly the whole team out to a beautiful location to bond, work, and relax together.",
    icon: "plane"
  }
];
