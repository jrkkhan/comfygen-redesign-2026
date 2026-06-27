import Image from "next/image";
import dynamic from "next/dynamic";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
const Services = dynamic(() => import("@/components/common/Services").then(mod => mod.Services));
const AboutInfo = dynamic(() => import("@/components/common/AboutInfo").then(mod => mod.AboutInfo));
const Awards = dynamic(() => import("@/components/common/Awards").then(mod => mod.Awards));
const ProcessSteps = dynamic(() => import("@/components/common/ProcessSteps").then(mod => mod.ProcessSteps));
const WhyChooseUs = dynamic(() => import("@/components/common/WhyChooseUs").then(mod => mod.WhyChooseUs));
const Portfolio = dynamic(() => import("@/components/common/Portfolio").then(mod => mod.Portfolio));
const Testimonials = dynamic(() => import("@/components/common/Testimonials").then(mod => mod.Testimonials));
const Industries = dynamic(() => import("@/components/common/Industries").then(mod => mod.Industries));
const TechStack = dynamic(() => import("@/components/common/TechStack").then(mod => mod.TechStack));
const Team = dynamic(() => import("@/components/common/Team").then(mod => mod.Team));
const FAQ = dynamic(() => import("@/components/common/FAQ").then(mod => mod.FAQ));
const Blog = dynamic(() => import("@/components/common/Blog").then(mod => mod.Blog));
const Footer = dynamic(() => import("@/components/common/Footer").then(mod => mod.Footer));

export default function Home() {
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
            <Hero />
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="flex-1">
        <Services />
        <AboutInfo />
        <Awards />
        <ProcessSteps />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Industries />
        <TechStack />
        <Team />
        <FAQ />
        <Blog />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
