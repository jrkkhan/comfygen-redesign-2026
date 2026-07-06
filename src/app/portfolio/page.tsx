import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { HeroTwoBentoGrid } from "@/components/common/HeroTwoBentoGrid";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Our Portfolio | Comfygen",
  description: "Explore our diverse portfolio of innovative digital solutions and successful projects delivered globally.",
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Light Header specifically for this page */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="light" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <HeroSectionTwo
          badgeText="Our Portfolio"
          title={
            <>
              Explore Our <br />
              Successful Projects
            </>
          }
          description="Dive into our extensive portfolio showcasing innovative digital solutions, cutting-edge mobile apps, and robust web platforms built for industry leaders."
          primaryButtonText="Start Your Project"
          primaryButtonLink="/contact"
          rightContent={<HeroTwoBentoGrid />}
        />

        {/* Portfolio Section */}
        <Portfolio />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
