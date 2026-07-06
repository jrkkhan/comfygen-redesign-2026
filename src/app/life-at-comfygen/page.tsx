import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { Footer } from "@/components/common/Footer";
import { LifePhotos } from "./components/LifePhotos";
import { Celebrations } from "./components/Celebrations";
import { HeroTwoBentoGrid } from "@/components/common/HeroTwoBentoGrid";

export const metadata = {
  title: "Life at Comfygen | Comfygen",
  description: "Discover what it's like to work at Comfygen, our culture, and our team.",
};

export default function LifeAtComfygenPage() {
  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Light Header specifically for this page */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="light" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <HeroSectionTwo
          badgeText="Life at Comfygen"
          title={
            <>
              Experience the Culture and <br />
              Vibe at Comfygen
            </>
          }
          description="At Comfygen, we believe in fostering a culture of innovation, collaboration, and continuous learning. Join us to be a part of a dynamic team that builds impactful digital solutions."
          primaryButtonText="Join Our Team"
          primaryButtonLink="/careers"
          rightContent={<HeroTwoBentoGrid />}
        />

        {/* Masonry Photo Grid Section */}
        <LifePhotos />

        {/* Celebrations Section */}
        <Celebrations />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
