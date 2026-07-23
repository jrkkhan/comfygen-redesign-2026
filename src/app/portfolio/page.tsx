import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { HeroTwoBentoGrid } from "@/components/common/HeroTwoBentoGrid";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "@/components/common/Footer";
import { getPortfoliosService } from "@/lib/services/pageService";

export const metadata = {
  title: "Our Portfolio | Comfygen",
  description: "Explore our diverse portfolio of innovative digital solutions and successful projects delivered globally.",
};

export default async function PortfolioPage() {
  const { data: cmsPortfolios } = await getPortfoliosService();

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
              Turning Founders' Ideas into Powerful Digital Solutions
            </>
          }
          description="Discover our portfolio of successful digital solutions, featuring custom mobile apps, web platforms, and software products built for startups, enterprises, and growing businesses. Each project reflects our focus on innovation, scalability, performance, and delivering solutions that create real business impact."
          primaryButtonText="Start Your Project"
          primaryButtonLink="/contact"
          rightContent={<HeroTwoBentoGrid />}
        />

        {/* Portfolio Section */}
        <Portfolio initialProjects={cmsPortfolios} />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
