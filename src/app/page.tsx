import Image from "next/image";
import { Header } from "@/components/common/Header";
import { Hero } from "@/components/common/Hero";
import { Services } from "@/components/common/Services";
import { AboutInfo } from "@/components/common/AboutInfo";
import { Awards } from "@/components/common/Awards";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { WhyChooseUs } from "@/components/common/WhyChooseUs";
import { Portfolio } from "@/components/common/Portfolio";
import { Testimonials } from "@/components/common/Testimonials";
import { Industries } from "@/components/common/Industries";
import { TechStack } from "@/components/common/TechStack";
import { Team } from "@/components/common/Team";
import { FAQ } from "@/components/common/FAQ";
import { Blog } from "@/components/common/Blog";
import { Footer } from "@/components/common/Footer";

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
