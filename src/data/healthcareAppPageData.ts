import { Smartphone, ShieldPlus, HeartPulse, Stethoscope, Video, CalendarCheck, FileHeart, Building2 } from 'lucide-react';
// import { SolutionPageData } from "@/types/solution";

export const healthcareAppPageData: any = {
  hero: {
    badgeText: "HIPAA-Compliant Healthcare App Development",
    title: "Healthcare App Development Company",
    description: "Enhance patient care and streamline hospital operations with Comfygen’s HIPAA-compliant healthcare app development solutions. We build mobile applications tailored for hospitals, clinics, and healthcare startups.",
    primaryButtonText: "Talk With Expert",
    primaryButtonLink: "/contact-us",
    secondaryButtonText: "Explore Portfolio",
    secondaryButtonLink: "#portfolio",
    imageSrc: "/images/hero/team-collaborating.webp", // Dummy image from existing repo
    imageAlt: "Healthcare App Development"
  },
  about: {
    title: "Innovative Healthcare Solutions",
    paragraphs: [
      "We architect and build bespoke healthcare mobile applications from the ground up designed around your clinical workflows, patient journey, and regulatory environment.",
      "Our solutions ensure HIPAA-compliant architecture, cross-platform iOS & Android development, real-time patient data access, and scalable cloud-native infrastructure."
    ]
  },
  offerings: {
    heading: "Custom Healthcare App Development",
    subHeading: "We build the right digital solution for your specific care delivery model.",
    items: [
      {
        title: "Telemedicine App Development",
        description: "Secure virtual consultation platforms with encrypted video & audio calls, and e-prescriptions.",
        icon: Video
      },
      {
        title: "Doctor Appointment App",
        description: "Smart scheduling with automated reminders, multi-specialty management, and secure payment collection.",
        icon: CalendarCheck
      },
      {
        title: "Remote Patient Monitoring",
        description: "Connect IoT-enabled wearables for real-time vital tracking and early warning alerts.",
        icon: HeartPulse
      },
      {
        title: "EHR & EMR Apps",
        description: "HL7 & FHIR-compliant systems for modern encrypted digital record management.",
        icon: FileHeart
      },
      {
        title: "Hospital Management",
        description: "Digitize patient registration, scheduling, billing, and discharge into one centralized platform.",
        icon: Building2
      },
      {
        title: "Pharmacy App Development",
        description: "Digital prescription upload, AI medicine substitution, and real-time delivery GPS tracking.",
        icon: ShieldPlus
      },
      {
        title: "Clinical App Development",
        description: "Decision-support tools, clinical trial apps, and care coordination platforms.",
        icon: Stethoscope
      },
      {
        title: "Health Tracking Apps",
        description: "Wearable-connected wellness apps for fitness and chronic disease management.",
        icon: Smartphone
      }
    ]
  },
  problemStatement: {
    heading: "Why Invest in Custom Healthcare App Development Now?",
    subHeading: "The healthcare app market is booming. Growing at a 45.2% CAGR.",
    problems: [
      {
        title: "Workforce Shortages",
        description: "Higher patient expectations and lack of staff drive the need for automated, digital-first care."
      },
      {
        title: "Strict Data Rules",
        description: "Ensuring HIPAA compliance requires specialized systems beyond off-the-shelf software."
      }
    ],
    solutions: [
      {
        title: "Operational Efficiency",
        description: "Reduce administrative load and improve care quality with custom mobile platforms."
      },
      {
        title: "New Revenue Lines",
        description: "Open new income streams via telehealth, remote monitoring, and direct-to-patient services."
      }
    ]
  },
  modules: {
    heading: "Smart Panels Built for Healthcare Ecosystem",
    subHeading: "Secure, intuitive dashboards designed for patients, doctors, and hospital administrators.",
    items: [
      {
        id: "user",
        label: "Patient Panel",
        shortLabel: "Patient",
        features: [
          "Easy Appointment Booking & Cancellation",
          "Online Doctor Consultation (Chat/Video)",
          "Access to Digital Prescriptions & Reports",
          "Secure Online Payment Options",
          "Medicine Ordering & Delivery Tracking",
          "Push Notifications for Reminders",
          "Wearable Device Integration",
          "Family Member Profile Management"
        ]
      },
      {
        id: "vendor",
        label: "Doctor Panel",
        shortLabel: "Doctor",
        features: [
          "Manage Patient Profiles & Medical History",
          "Appointment & Availability Management",
          "Real-time Chat & Video Consultation Tools",
          "ePrescription Creation & Sharing",
          "Access to Patient Reports & Analytics",
          "Secure Data Sharing & Compliance",
          "Automated Revenue & Payment Tracking",
          "Multi-Clinic Schedule Management"
        ]
      },
      {
        id: "admin",
        label: "Admin Panel",
        shortLabel: "Admin",
        features: [
          "Centralized Dashboard for Monitoring",
          "Manage Patients, Doctors, and Staff",
          "Secure Role-based Access Control",
          "Analytics and Performance Reporting",
          "Appointment and Transaction Management",
          "Revenue Tracking and Compliance",
          "HIPAA-Compliant Audit Logs",
          "Integrated Marketing & Promotions"
        ]
      }
    ]
  },
  advancedTech: {
    heading: "Our Healthcare App Technology Capabilities",
    subHeading: "Leveraging next-gen technologies for secure, smart, and scalable apps.",
    features: [
      {
        title: "Artificial Intelligence (AI)",
        description: "Predictive analysis, automated diagnosis, and smart decision-making.",
        icon: "🧠"
      },
      {
        title: "Generative AI",
        description: "Automate report creation, generate medical insights, and enhance consultations.",
        icon: "✨"
      },
      {
        title: "Internet of Things (IoT)",
        description: "Real-time monitoring of patient vitals and remote diagnostics via wearables.",
        icon: "⌚"
      },
      {
        title: "Blockchain Technology",
        description: "Transparent, tamper-proof data exchange between patients and doctors.",
        icon: "🔗"
      }
    ]
  }
};
