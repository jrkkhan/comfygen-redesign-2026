import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { HeroTwoBentoGrid } from "@/components/common/HeroTwoBentoGrid";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "@/components/common/CallToAction";
import { Footer } from "@/components/common/Footer";

export const metadata = {
  title: "Client Testimonials | Comfygen",
  description: "Read what our clients have to say about working with Comfygen. Success stories, reviews, and video testimonials.",
};

export default function ClientTestimonialsPage() {
  return (
    <main className="relative min-h-screen font-sans bg-white flex flex-col">
      {/* Light Header specifically for this page */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="light" />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <HeroSectionTwo
          badgeText="Client Testimonials"
          title={
            <>
              What Our Clients Say <br />
              About Us
            </>
          }
          description="Discover how Comfygen is empowering businesses globally. Read our success stories, reviews, and video testimonials from our happy clients."
          primaryButtonText="Start Your Project"
          primaryButtonLink="/contact"
          rightContent={<HeroTwoBentoGrid />}
        />

        {/* Existing Testimonials Section (Dark Theme Slider) */}
        <Testimonials />

        {/* Call To Action */}
        <CallToAction
          title="Ready to Transform Your Business?"
          description="Join our happy clients and experience the quality and dedication of Comfygen. Let's discuss your next big project."
          buttonText="Contact Us Today"
          graphicType="bars"
        />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
