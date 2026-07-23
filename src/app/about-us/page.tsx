import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { OurGeography } from "@/components/common/OurGeography";
import { Leadership } from "@/components/common/Leadership";
import { Milestones } from "@/components/common/Milestones";
import { Industries } from "@/components/common/Industries";
import { Testimonials } from "@/components/common/Testimonials";
import { Awards } from "@/components/common/Awards";
import { FAQ } from "@/components/common/FAQ";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "About Us | Comfygen",
  description: "Learn more about Comfygen, our mission, and our expert team.",
};

export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Light Header specifically for this page */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="light" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <HeroSectionTwo
          badgeText="About us"
          title={
            <>
              About Comfygen Technologies –
              Your Partner for Project Success

            </>
          }
          description="Founded in 2019, Comfygen Technologies delivers reliable, scalable IT consulting, software development, application development, and digital transformation services. We help businesses grow through transparent collaboration, timely delivery, cost-effective solutions, and high-quality results."
          primaryButtonText="Contact us"
          primaryButtonLink="/contact"
          secondaryButtonText="Explorer"
          secondaryButtonLink="/explore"
          imageSrc="/images/about/about-us-hero.webp"
          imageAlt="About Us Hero"
        />
        {/* Milestones Carousel */}
        <Milestones />

        {/* Geography Section */}
        <OurGeography />

        {/* Leadership Section */}
        <Leadership authorKey="saddam" badgeText="Our Leadership Team" />


        {/* Awards Section */}
        <Awards />
        {/* Industries Section */}
        <Industries />

        {/* Testimonials / Ratings Section */}
        <Testimonials />



        {/* FAQ Section */}
        <FAQ />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
