import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
import { Services } from "@/components/common/Services";
import { SolutionCards } from "@/components/common/SolutionCards";
import { ExtraInfoCards } from "@/components/common/ExtraInfoCards";
import { CallToAction } from "@/components/common/CallToAction";
import { Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather } from "lucide-react";
import { AboutInfo } from "@/components/common/AboutInfo";
import { Awards } from "@/components/common/Awards";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { WhyChooseUs } from "@/components/common/WhyChooseUs";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@/components/common/Portfolio").then((mod) => mod.Portfolio));
const Testimonials = dynamic(() => import("@/components/common/Testimonials").then((mod) => mod.Testimonials));
const Industries = dynamic(() => import("@/components/common/Industries").then((mod) => mod.Industries));
const TechStack = dynamic(() => import("@/components/common/TechStack").then((mod) => mod.TechStack));
const Team = dynamic(() => import("@/components/common/Team").then((mod) => mod.Team));
const FAQ = dynamic(() => import("@/components/common/FAQ").then((mod) => mod.FAQ));
const Blog = dynamic(() => import("@/components/common/Blog").then((mod) => mod.Blog));
const Footer = dynamic(() => import("@/components/common/Footer").then((mod) => mod.Footer));

export const metadata = {
  title: "Mobile App Development | Comfygen",
  description: "Leading mobile app development services.",
};

const mobileServices = [
  {
    title: "Custom Mobile App Development",
    description: "We build custom mobile applications tailored specifically to your business goals and user needs, ensuring high performance and scalability.",
    icon: Smartphone,
    isBlueLink: true,
    className: "lg:min-h-[460px]"
  },
  {
    title: "Android App Development",
    description: "Our Android developers create robust and scalable apps for the global Android market using modern tools and frameworks like Kotlin.",
    icon: Bot
  },
  {
    title: "iOS App Development",
    description: "We design and develop premium, high-quality iOS applications for iPhone and iPad, delivering seamless user experiences through Swift.",
    icon: MonitorSmartphone
  },
  {
    title: "Cross-Platform App Development",
    description: "Maximize your reach with apps that run perfectly on both iOS and Android from a single codebase, saving time and development costs.",
    icon: Layers
  },
  {
    title: "React Native App Development",
    description: "Harness the power of React Native to build beautiful, fast, and native-feeling mobile applications with a unified JavaScript codebase.",
    icon: Component,
    className: "lg:min-h-[440px]"
  },
  {
    title: "Flutter App Development",
    description: "We offer top-rated Flutter app development services to create expressive, flexible, and high-performance apps with beautiful UI and smooth UX.",
    icon: Feather
  }
];

const mobileWhyChooseUsReasons = [
  { id: '01', title: 'Top Mobile App Developers', desc: 'We have a dedicated team of elite mobile app developers with extensive experience building award-winning iOS, Android, and Cross-Platform applications.' },
  { id: '02', title: 'Agile Development Process', desc: 'Our agile methodology ensures rapid development, flexibility, and constant communication so your app hits the market faster without compromising quality.' },
  { id: '03', title: 'Seamless UI/UX Design', desc: 'We design intuitive and immersive user interfaces specifically tailored for mobile devices, maximizing user retention and engagement.' },
  { id: '04', title: 'App Store Submission Support', desc: 'We handle the entire deployment process, ensuring your application strictly complies with Google Play Store and Apple App Store guidelines.' },
  { id: '05', title: 'Data Security & Compliance', desc: 'Our mobile apps are fortified with state-of-the-art encryption and comply with global data protection regulations to keep user data secure.' },
  { id: '06', title: 'Post-Launch Maintenance', desc: 'We offer robust post-launch support and regular updates to ensure your mobile application remains compatible with the latest OS versions and devices.' },
];

const mobileFaqs = [
  {
    question: 'How much does it cost to build a mobile app?',
    answer: 'The cost of developing a mobile app depends on various factors such as platform (iOS, Android, or both), features, UI/UX complexity, and third-party integrations. We offer customized quotes after understanding your specific requirements.'
  },
  {
    question: 'How long does it take to develop a custom mobile app?',
    answer: 'A standard mobile app takes anywhere between 3 to 6 months to design, develop, and launch. However, highly complex enterprise apps or apps with advanced AI/IoT integrations may take longer.'
  },
  {
    question: 'Do you develop for both iOS and Android?',
    answer: 'Yes, we offer both native app development (Swift for iOS, Kotlin for Android) and cross-platform app development (Flutter, React Native) to ensure your app reaches the widest audience possible.'
  },
  {
    question: 'Will you help submit the app to the App Store and Google Play?',
    answer: 'Absolutely! We handle the entire deployment process, including app store optimization (ASO) and submission to both Apple App Store and Google Play Store, ensuring compliance with their strict guidelines.'
  },
  {
    question: 'Do you sign an NDA before discussing my app idea?',
    answer: 'Yes, we prioritize your confidentiality and IP protection. We always sign a Non-Disclosure Agreement (NDA) before any initial discussions or sharing of project details.'
  },
  {
    question: 'Do you provide maintenance and support after the app is launched?',
    answer: 'Yes, we provide ongoing maintenance, bug fixes, performance monitoring, and OS compatibility updates to ensure your app continues to perform flawlessly after launch.'
  }
];

const mobileSolutionsData = [
  {
    title: "Healthcare Mobile App Development",
    description: "As an affordable custom mobile app development company in India. We provide healthcare app development services for medical, including doctor appointment scheduling, access to patient records, and increased telemedicine app development services."
  },
  {
    title: "Mobile Banking App Development",
    description: "We develop a mobile banking app to provide secure and efficient financial transactions. Also, simplify payment processing, enhance the user experience, and provide real-time transaction tracking, making financial management hassle-free for users."
  },
  {
    title: "Food Delivery App Development",
    description: "As a top mobile application development firm in Jaipur, India. We provide food delivery app development solutions. Develop a food delivery app with us like Swiggy, Zomato, or Uber Eats and boost your mobile app business."
  },
  {
    title: "News & Media Streaming Apps",
    description: "Stay informed with custom news application development that provides real-time updates, articles, and multimedia content. News applications provide a personalized news experience that makes sure users receive relevant information at their fingertips."
  },
  {
    title: "Messaging and VoIP Apps",
    description: "Communication is key in every business. Messaging and VoIP applications provide secure messaging, voice, and video call functionalities that make it easy for teams and clients to stay connected and collaborate easily."
  },
  {
    title: "E-learning & Educational Apps",
    description: "Our mobile application development company provides interactive e-learning app development with video classes, live sessions, assessments, and progress tracking to support modern digital education and remote learning."
  },
  {
    title: "eCommerce & Shopping Apps",
    description: "We are a top-rated mobile app development company in Jaipur, India. Transforms user market experience with custom eCommerce development that provides a user-friendly interface, secure payment gateways, and advanced inventory management."
  },
  {
    title: "Booking, Ticketing & Travel Apps",
    description: "From travel to events, develop booking and ticketing applications. These mobile apps enhance the user experience by offering perfect navigation, secure payments, and instant confirmation."
  },
  {
    title: "Investment & Trading Apps",
    description: "We build advanced trading apps that offer portfolio management, live market insights, analytics, and secure transactions to support smart financial decision-making."
  },
  {
    title: "Dating & Social Networking Apps",
    description: "Develop a custom dating app and social apps with Comfygen, the best dating mobile application development company in Jaipur, India. We provide custom dating apps like Tinder, Bumble, and Matchmaking apps that facilitate meaningful connections"
  },
  {
    title: "Insurance & Claims Apps",
    description: "We provide insurance app development solutions to simplify policy management, claim submissions, tracking, and customer support for improved digital service delivery."
  },
  {
    title: "Instant Delivery App Development",
    description: "We build instant delivery apps like Blinkit with live GPS tracking, automated dispatch, quick checkout, and real-time order updates to deliver items faster and improve customer satisfaction for hyperlocal delivery businesses."
  },
  {
    title: "Alcohol Delivery App Solutions",
    description: "Develop legal and secure alcohol delivery apps with age verification, digital catalog, in-app offers, and real-time tracking. Our on-demand Alcohol delivery app development company in Jaipur enables smooth doorstep delivery experiences."
  },
  {
    title: "Home Services App Solution",
    description: "We provide a home services app development with scheduling, service provider profiles, secure payments, reviews, and real-time booking management to simplify home services for users and service professionals."
  },
  {
    title: "Taxi Booking Mobile App",
    description: "Build a ride-hailing taxi booking app like Uber and Ola with GPS navigation, fare calculation, driver tracking, wallet payments, and instant ride booking for reliable on-demand transportation services."
  }
];

const mobileExtraInfoData = [
  {
    title: "AI / ML",
    description: <p>We integrate <a href="#" className="text-primary hover:underline">AI and ML</a> in your mobile applications; which is going to automate many operations; like testing and debugging the glitches inside. Also, get ready to improve the app's performance and gain maximum user retention with the ultimate user experience.</p>
  },
  {
    title: "AR / VR",
    description: "AR enables the users to try the product or service virtually before finalizing the deal. Whereas, VR will transport the users into a virtual world to gain an immersive experience. This technology will make your app look futuristic, in which the users will pay attention and engage more."
  },
  {
    title: "5G Technology",
    description: "Build your mobile application enabled with 5G technology, which helps it to process quicker, provide the ultimate user experience, and establish some efficiency among users."
  },
  {
    title: "Big Data",
    description: "We utilize the new and latest modernized database; such as MongoDB, Cassandra, and Hadoop. It helps in deploying huge data on the cloud, reducing the cost and improving the performance of the application."
  },
  {
    title: "Blockchain Integration",
    description: <p>We assure you that integrating <a href="#" className="text-primary hover:underline">blockchain</a> into your application leads to building your app as the most competitive one in the marketplace afterward. The decentralized applications enable the users, as well as businesses to gain transparency, immutability, more security, helping every transaction to be tracked & safe, and much more.</p>
  },
  {
    title: "IoT",
    description: "We build smart, connected apps that integrate seamlessly with IoT devices to deliver real-time insights and automation. Our mobile app development team combines innovation with the latest technologies to create intelligent solutions that elevate both user experience and business performance."
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Dark Hero Section Container */}
      <div className="relative min-h-screen overflow-hidden bg-[#02040a] flex flex-col z-[100]">

        {/* Webp Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-background.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <div className="flex-1 flex flex-col justify-center">
            <Hero
              title={<>Custom Mobile App<br className="hidden md:block" /> Development Services</>}
              subtitle="Transform your ideas into high-performance mobile applications. Comfygen delivers scalable, secure, and user-centric mobile apps for iOS and Android platforms."
              primaryButtonText="Get a Free Quote"
            />
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex-1">
        <Services
          title={<><span className="text-primary !font-heading">Mobile App</span><br />Development Services</>}
          subtitle="Explore our comprehensive suite of mobile application development services tailored to fuel your digital growth."
          services={mobileServices}
        />
        <AboutInfo
          title="Future Ready Mobile App Development Solutions for Global Businesses"
          paragraphs={[
            "Future Ready Mobile App Development Solutions for Global Businesses Comfygen Technologies is a trusted mobile app development company in Jaipur, India, delivering high-performing mobile apps for startups and enterprises. Based in Jaipur, we build feature-rich Android, iOS, and cross-platform apps for Healthcare, Fintech, Blockchain, Education, Gaming, On-Demand, and Entertainment industries.",
            "With fast deployment, easy customisation, and end-to-end support, our white label App Development solutions are ideal for anyone looking to save mobile app development time, reduce costs, and stay ahead of the competition."
          ]}
          imageSrc="/images/mobile-app-development/mobile-app-development-aboutinfo.webp"
          imageAlt="Mobile app development about info"
          buttonText="Consult Our Experts"
        />
        <Awards />
        <ProcessSteps />
        <WhyChooseUs
          title={<><span className="text-primary !font-heading">Why Choose Comfygen</span> For Your<br className="hidden md:block" /> Mobile App Development?</>}
          reasons={mobileWhyChooseUsReasons}
        />

        <Portfolio />
        <SolutionCards
          title="AI-Powered Mobile App Development"
          subtitle="Modern Mobile Apps Compete On Intelligence, Not Just Features. Comfygen's AI-Powered Mobile App Development Integrates Machine Learning Directly Into Core Workflows."
          cards={mobileSolutionsData}
          isDark={false}
        />
        <ExtraInfoCards
          title="Emerging Technologies We Leverage For Mobile Application Development"
          cards={mobileExtraInfoData}
        />
        <CallToAction
          title={<>Ready to Dominate the <br className="hidden md:block" /> Mobile App Market?</>}
          description="We Build Custom Mobile Apps That Boost Orders, Retain Customers, And Help You Scale Your Business Faster."
          buttonText="Talk to Expert Now"
          isDark={false}
          graphicType="dashed-circles"
        />
        <Testimonials />
        <Industries />
        <TechStack />
        <Team />
        <FAQ
          title="Mobile App Development FAQs"
          description="Have questions about our mobile app development process? Find answers to the most commonly asked questions regarding platforms, cost, timelines, and post-launch support."
          faqs={mobileFaqs}
        />
        <Blog />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
