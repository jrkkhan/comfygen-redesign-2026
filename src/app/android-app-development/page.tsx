import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
import { Services } from "@/components/common/Services";
import { SolutionCards } from "@/components/common/SolutionCards";
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
  title: "Android App Development | Comfygen",
  description: "Leading Android app development services.",
};

async function getAndroidAppDevelopmentData() {
  const cmsData = await fetchAPI('/android-app-development', {
    populate: {
      herosection: { populate: '*' },
      servicesection: { populate: '*' },
      aboutinfo: { populate: '*' },
      whychoose: { populate: '*' },
      solution: { populate: '*' },
      faqdata: { populate: '*' },
    },
  });
  return cmsData;
}

export default async function AndroidAppDevelopmentPage() {
  const cmsData = await getAndroidAppDevelopmentData();
  const data = cmsData?.data || {};
  const heroSection = data?.herosection?.[0] || data?.Herosection?.[0];
  const heroTitle = heroSection?.heading || "Custom Android App Development Services";

  const heroSubtitle = heroSection?.subtitle ||
    heroSection?.description?.[0]?.children?.[0]?.text ||
    "Transform your ideas into high-performance Android applications. Comfygen delivers scalable, secure, and user-centric Android mobile apps that work flawlessly on all Android devices.";

  const servicesSection = data?.servicesection?.[0];
  const servicesTitle = servicesSection?.heading || "Android App\nDevelopment Services";
  const servicesSubtitle = servicesSection?.subtitle || "Explore our comprehensive suite of Android application development services tailored to fuel your digital growth efficiently.";

  const defaultIcons = [Smartphone, Bot, MonitorSmartphone, Layers, Component, Feather];

  const mappedServices = servicesSection?.card?.map((item: any, index: number) => {
    return {
      title: item.title,
      description: item.description,
      icon: defaultIcons[index % defaultIcons.length],
    };
  }) || [];

  const aboutInfoSection = data?.aboutinfo?.[0];
  const aboutTitle = aboutInfoSection?.title || "Future Ready Android App Development Solutions for Global Businesses";
  const aboutParagraphs = aboutInfoSection?.description
    ? aboutInfoSection.description.split('\n\n').filter((p: string) => p.trim() !== '')
    : [];
  const aboutImage = aboutInfoSection?.img?.url ? `https://cms.comfygen.com${aboutInfoSection.img.url}` : "/images/mobile-app-development/mobile-app-development-aboutinfo.webp";
  const aboutImageAlt = aboutInfoSection?.img?.alternativeText || "Android app development about info";
  const aboutButtonText = aboutInfoSection?.buttontext || "Consult Our Experts";

  const whyChooseSection = data?.whychoose?.[0];
  const whyChooseTitle = whyChooseSection?.heading || "Why Choose Comfygen For Your\nAndroid App Development?";
  const whyChooseReasons = whyChooseSection?.cards?.map((card: any, index: number) => {
    return {
      id: `0${index + 1}`,
      title: card.title,
      desc: card.description
    };
  }) || [];

  let solutionTitle = "Advanced Android App Solutions";
  let solutionSubtitle = "Modern Android apps compete on efficiency and seamlessness. Comfygen's development integrates the best of native features with advanced technologies.";
  let solutionCards: any[] = [];

  const solutionData = Array.isArray(data?.solution) ? data.solution[0] : data?.solution;
  if (solutionData) {
    solutionTitle = solutionData.heading || solutionTitle;
    solutionSubtitle = solutionData.subheading || solutionSubtitle;
    if (solutionData.cards && solutionData.cards.length > 0) {
      solutionCards = solutionData.cards.map((card: any) => ({
        title: card.title,
        description: card.description,
        icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      }));
    }
  }

  let apiFaqs: any[] = [];
  if (data.faqdata && data.faqdata.length > 0) {
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
                heroTitle.includes("Android App") ? (
                  <>
                    {heroTitle.split("Android App")[0]}
                    Android App
                    <br className="hidden md:block" />
                    {heroTitle.split("Android App")[1]}
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

        <CallToAction
          title={<>Ready to Dominate the <br className="hidden md:block" /> Android App Market?</>}
          description="We Build Custom Android Apps That Boost Orders, Retain Customers, And Help You Scale Your Business Faster."
          buttonText="Talk to Expert Now"
          isDark={false}
          graphicType="dashed-circles"
        />
        <Testimonials />
        <Industries />
        <TechStack />
        <Team />
        <FAQ
          title="Android App Development FAQs"
          description="Have questions about our Android app development process? Find answers to the most commonly asked questions regarding frameworks, cost, timelines, and post-launch support."
          faqs={apiFaqs}
        />
        <Blog />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
