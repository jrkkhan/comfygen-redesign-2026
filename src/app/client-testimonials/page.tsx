import { Header } from "@/components/common/Header";
import { HeroSectionTwo } from "@/components/common/HeroSectionTwo";
import { HeroTwoBentoGrid } from "@/components/common/HeroTwoBentoGrid";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "@/components/common/CallToAction";
import { Footer } from "@/components/common/Footer";
import { getTestimonialsDataService } from "@/lib/services/pageService";

export const metadata = {
  title: "Client Testimonials | Comfygen",
  description: "Read what our clients have to say about working with Comfygen. Success stories, reviews, and video testimonials.",
};

export default async function ClientTestimonialsPage() {
  // Fetch testimonial data
  let testimonialSection: any = null;
  try {
    const cmsData = await getTestimonialsDataService();
    if (!cmsData.error) {
      testimonialSection = cmsData.data;
    }
  } catch (error) {
    console.error("Failed to fetch Testimonial data", error);
  }

  let reviews: any[] = [];
  let videos: any[] = [];

  if (testimonialSection) {
    reviews = testimonialSection.reviewcards?.map((card: any) => ({
      id: card.id,
      name: card.username,
      location: card.userinfo,
      platform: card.reviewplatform,
      text: card.clientreview,
      link: card.link || ""
    })) || [];

    videos = testimonialSection.testimonialvideo?.map((video: any) => {
      let yId = "";
      const url = video.videolink || video.youtubeurl || video.youtubeId || "";
      if (url.includes("youtube.com/shorts/")) {
        yId = url.split("youtube.com/shorts/")[1]?.split("?")[0];
      } else if (url.includes("watch?v=")) {
        yId = url.split("watch?v=")[1]?.split("&")[0];
      } else if (url.includes("youtu.be/")) {
        yId = url.split("youtu.be/")[1]?.split("?")[0];
      } else if (url && !url.includes("http")) {
        yId = url; // fallback if they just pasted the ID
      }

      return {
        id: video.id,
        name: video.username || video.name,
        app: video.userinfo || video.appname || video.app,
        youtubeId: yId
      };
    }) || [];
  }

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
              Real Stories. Real Success.

            </>
          }
          description="See why businesses choose Comfygen Technologies for their software and app development needs. Explore client experiences, feedback, and success journeys built through collaboration and trust."
          primaryButtonText="Start Your Project"
          primaryButtonLink="/contact"
          rightContent={<HeroTwoBentoGrid />}
        />

        {/* Existing Testimonials Section (Light Theme Slider) */}
        <Testimonials reviews={reviews} videos={videos} />

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
