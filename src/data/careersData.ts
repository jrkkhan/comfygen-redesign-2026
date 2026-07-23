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
    title: "Flexible Work Environment",
    description: "Enjoy a supportive work culture with flexibility that helps you maintain productivity and work-life balance.",
    icon: "clock"
  },
  {
    title: "Career Growth Opportunities",
    description: "Learn new skills, explore new technologies, and grow your career through continuous learning and development opportunities.",
    icon: "laptop"
  },
  {
    title: "Learning & Development",
    description: "Access resources, mentorship, and opportunities to enhance your technical and professional skills.",
    icon: "book"
  },
  {
    title: "Collaborative Culture",
    description: "Work with talented professionals in a team environment built on creativity, innovation, and knowledge sharing.",
    icon: "globe"
  },
  {
    title: "Recognition & Rewards",
    description: "Your contributions matter. We appreciate dedication, creativity, and the impact you bring to the team.",
    icon: "heart"
  },
  {
    title: "Team Activities & Events",
    description: "Connect with colleagues through team activities, celebrations, and events that build strong workplace relationships.",
    icon: "plane"
  }
];
