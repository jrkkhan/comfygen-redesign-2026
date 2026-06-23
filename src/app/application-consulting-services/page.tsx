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
import { fetchAPI } from "@/lib/api";

const Portfolio = dynamic(() => import("@/components/common/Portfolio").then((mod) => mod.Portfolio));
const Testimonials = dynamic(() => import("@/components/common/Testimonials").then((mod) => mod.Testimonials));
const Industries = dynamic(() => import("@/components/common/Industries").then((mod) => mod.Industries));
const TechStack = dynamic(() => import("@/components/common/TechStack").then((mod) => mod.TechStack));
const Team = dynamic(() => import("@/components/common/Team").then((mod) => mod.Team));
const FAQ = dynamic(() => import("@/components/common/FAQ").then((mod) => mod.FAQ));
const Blog = dynamic(() => import("@/components/common/Blog").then((mod) => mod.Blog));
const Footer = dynamic(() => import("@/components/common/Footer").then((mod) => mod.Footer));

export const metadata = {
  title: "Application Consulting Services | Comfygen",
  description: "Transform your ideas into high-performance applications with our Application Consulting Services.",
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

async function getApplicationConsultingServicesData() {
  const cmsData = await fetchAPI('/application-consulting-services', {
    populate: {
      herosection: { populate: '*' },
      servicesection: { populate: '*' },
      aboutinfo: { populate: '*' },
      whychoose: { populate: '*' },
      solution: { populate: '*' },
      extracard: { populate: '*' },
      faqdata: { populate: '*' },
    },
  });
  return cmsData;
}

export default async function ApplicationConsultingServicesPage() {
  const cmsData = await getApplicationConsultingServicesData();
  const data = cmsData?.data;
  const heroSection = data?.herosection?.[0] || data?.Herosection?.[0];
  const heroTitle = heroSection?.heading || "Application Consulting Services";
  
  const heroSubtitle = heroSection?.subtitle || 
    heroSection?.description?.[0]?.children?.[0]?.text || 
    "Transform your ideas into high-performance applications. Comfygen delivers scalable, secure, and user-centric solutions.";

  const servicesSection = data?.servicesection?.[0];
  const servicesTitle = servicesSection?.heading || "Application Consulting\nServices";
  const servicesSubtitle = servicesSection?.subtitle || "Explore our comprehensive suite of application consulting services tailored to fuel your digital growth.";

  const defaultIcons = [Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather];
  
  const mappedServices = servicesSection?.card?.map((item: any, index: number) => {
    const original = mobileServices.find((s) => s.title === item.title);
    return {
      title: item.title,
      description: item.description,
      icon: original?.icon || defaultIcons[index % defaultIcons.length],
      isBlueLink: original?.isBlueLink,
      className: original?.className,
    };
  }) || mobileServices;

  const aboutInfoSection = data?.aboutinfo?.[0];
  const aboutTitle = aboutInfoSection?.title || "Future Ready Application Consulting Solutions for Global Businesses";
  const aboutParagraphs = aboutInfoSection?.description 
    ? aboutInfoSection.description.split('\n\n').filter((p: string) => p.trim() !== '')
    : [
        "Future Ready Application Consulting Solutions for Global Businesses Comfygen Technologies is a trusted consulting company in Jaipur, India, delivering high-performing apps for startups and enterprises. Based in Jaipur, we build feature-rich Android, iOS, and cross-platform apps for Healthcare, Fintech, Blockchain, Education, Gaming, On-Demand, and Entertainment industries.",
        "With fast deployment, easy customisation, and end-to-end support, our consulting solutions are ideal for anyone looking to save time, reduce costs, and stay ahead of the competition."
      ];
  const aboutImage = aboutInfoSection?.img?.url ? `https://cms.comfygen.com${aboutInfoSection.img.url}` : "/images/mobile-app-development/mobile-app-development-aboutinfo.webp";
  const aboutImageAlt = aboutInfoSection?.img?.alternativeText || "Application consulting about info";
  const aboutButtonText = aboutInfoSection?.buttontext || "Consult Our Experts";

  const whyChooseSection = data?.whychoose?.[0];
  const whyChooseTitle = whyChooseSection?.heading || "Why Choose Comfygen For Your\nApplication Consulting Services?";
  const whyChooseReasons = whyChooseSection?.cards?.map((card: any, index: number) => {
    return {
      id: `0${index + 1}`,
      title: card.title,
      desc: card.description
    };
  }) || mobileWhyChooseUsReasons;

  let solutionTitle = "AI-Powered Application Consulting";
  let solutionSubtitle = "Modern Applications Compete On Intelligence, Not Just Features. Comfygen's AI-Powered Application Consulting Integrates Machine Learning Directly Into Core Workflows.";
  let solutionCards = mobileSolutionsData;

  if (data?.solution) {
      solutionTitle = data.solution.heading || solutionTitle;
      solutionSubtitle = data.solution.subheading || solutionSubtitle;
      if (data?.solution.cards && data.solution.cards.length > 0) {
        solutionCards = data.solution.cards.map((card: any) => ({
          title: card.title,
          description: card.description,
          icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        }));
      }
    }

  const extraCardSection = data?.extracard?.[0];
  const extraCardTitle = extraCardSection?.heading || "Emerging Technologies We Leverage For Application Consulting";
  
  const renderRichText = (blocks: any[]) => {
    if (!blocks || !Array.isArray(blocks)) return null;
    return blocks.map((block, bIdx) => {
      if (block.type === 'paragraph') {
        return (
          <p key={bIdx}>
            {block.children?.map((child: any, cIdx: number) => {
              if (child.type === 'link') {
                return (
                  <a key={cIdx} href={child.url} className="text-primary hover:underline">
                    {child.children?.[0]?.text || ""}
                  </a>
                );
              }
              return <span key={cIdx}>{child.text}</span>;
            })}
          </p>
        );
      }
      return null;
    });
  };

  const extraCards = extraCardSection?.cards?.map((card: any) => ({
    title: card.Title || card.title,
    description: Array.isArray(card.description) ? renderRichText(card.description) : card.description
  })) || mobileExtraInfoData;

  let apiFaqs = mobileFaqs;
  if (data?.faqdata && data.faqdata.length > 0) {
      const faqComponent = data.faqdata[0];
      if (faqComponent.faqdata && faqComponent.faqdata.length > 0) {
        apiFaqs = faqComponent.faqdata.map((faq: any) => ({
          question: faq.quz,
          answer: faq.answer
        }));
      }
    }

  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      <div className="relative min-h-screen overflow-hidden bg-[#02040a] flex flex-col z-[100]">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/hero-background.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <div className="flex-1 flex flex-col justify-center">
            <Hero
              title={
                heroTitle.includes("Mobile App") ? (
                  <>
                    {heroTitle.split("Mobile App")[0]}
                    Mobile App
                    <br className="hidden md:block" />
                    {heroTitle.split("Mobile App")[1]}
                  </>
                ) : (
                  heroTitle
                )
              }
              subtitle={heroSubtitle}
              primaryButtonText="Get a Free Quote"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Services
          title={
            servicesTitle.includes('\n') ? (
              <>
                <span className="text-primary !font-heading">{servicesTitle.split('\n')[0]}</span>
                <br />
                {servicesTitle.split('\n').slice(1).join('\n')}
              </>
            ) : (
              servicesTitle
            )
          }
          subtitle={servicesSubtitle}
          services={mappedServices}
        />
        <AboutInfo
          title={aboutTitle}
          paragraphs={aboutParagraphs}
          imageSrc={aboutImage}
          imageAlt={aboutImageAlt}
          buttonText={aboutButtonText}
        />
        <Awards />
        <ProcessSteps />
        <WhyChooseUs
          title={
            whyChooseTitle.includes('\n') ? (
              <>
                <span className="text-primary !font-heading">{whyChooseTitle.split('\n')[0]}</span>
                <br className="hidden md:block" />
                {whyChooseTitle.split('\n').slice(1).join('\n')}
              </>
            ) : (
              whyChooseTitle
            )
          }
          reasons={whyChooseReasons}
        />
        <Portfolio />
        <SolutionCards
          title={solutionTitle}
          subtitle={solutionSubtitle}
          cards={solutionCards}
          isDark={false}
        />
        <ExtraInfoCards
          title={extraCardTitle}
          cards={extraCards}
        />
        <CallToAction
          title={<>Ready to Dominate the <br className="hidden md:block" /> Market?</>}
          description="We Provide Application Consulting That Boosts Orders, Retains Customers, And Helps You Scale Your Business Faster."
          buttonText="Talk to Expert Now"
          isDark={false}
          graphicType="dashed-circles"
        />
        <Testimonials />
        <Industries />
        <TechStack />
        <Team />
        <FAQ
          title="Application Consulting FAQs"
          description="Have questions about our application consulting process? Find answers to the most commonly asked questions regarding platforms, cost, timelines, and post-launch support."
          faqs={apiFaqs}
        />
        <Blog />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
