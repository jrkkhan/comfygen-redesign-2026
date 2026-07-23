import React from 'react';
import { getTestimonialsDataService } from '@/lib/services/pageService';
import { TestimonialsClient, Review, TestimonialVideo } from './TestimonialsClient';

export const Testimonials = async () => {
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

  // Default values
  let heading: React.ReactNode = (
    <>Here is what our <span className="text-primary !font-heading">clients</span> say about their <span className="text-primary !font-heading">experience.</span></>
  );
  let subheading = "We let our work speak through our clients' voices. Take a look at their honest feedback, reviews, and experiences working with our team.";
  let reviews: Review[] = [];
  let videos: TestimonialVideo[] = [];

  if (testimonialSection) {
    const rawHeading = testimonialSection.heading || "";
    // If the string contains exactly the text from the screenshot, inject HTML
    if (rawHeading.toLowerCase().includes("clients") && rawHeading.toLowerCase().includes("experience")) {
      heading = (
        <>
          {rawHeading.split(/clients/i)[0]}
          <span className="text-primary !font-heading">clients</span>
          {rawHeading.split(/clients/i)[1].split(/experience/i)[0]}
          <span className="text-primary !font-heading">experience.</span>
        </>
      );
    } else {
      heading = <>{rawHeading}</>;
    }

    subheading = testimonialSection.subheading || subheading;

    reviews = testimonialSection.reviewcards?.map((card: any) => ({
      id: card.id,
      name: card.username,
      location: card.userinfo,
      platform: card.reviewplatform,
      text: card.clientreview,
      link: card.link || ""
    })) || [];

    videos = testimonialSection.testimonialvideo?.slice(0, 2).map((video: any) => {
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

  // Fallback to static reviews if no data from API
  if (reviews.length === 0) {
    reviews = [
      {
        id: 1,
        name: 'Nhi Do',
        location: 'Vietnam',
        platform: 'DesignRush',
        text: '"My overall experience working with the company was very positive. The team demonstrated professionalism and strong technical skills throughout the project. Communication was clear and timely, which helped us stay on schedule. They were responsive to our feedback and flexible in adapting to changes. The final product met all our expectations and was delivered on time. Some minor..."'
      },
      {
        id: 2,
        name: 'Rob Lipps',
        location: 'Madison',
        platform: 'DesignRush',
        text: '"Sonic Foundry Inc. noted that Comfygen consistently fulfilled its commitments and demonstrated strong project management skills, keeping the app\'s development on track. The client was pleased with the final result."'
      },
      {
        id: 3,
        name: 'Avinash',
        location: 'Atlanta, Indiana',
        platform: 'Clutch',
        text: '"Comfygen Technologies developed and designed a blockchain and a web wallet for a cryptocurrency company. The team built a Proof of Authority blockchain based on Geth and a user-friendly web wallet."'
      },
      {
        id: 4,
        name: 'Rishabh Shukla',
        location: 'Noida, India',
        platform: 'Clutch',
        text: '"An IT company hired Comfygen to design and build a dating app for both iOS and Android. The team also integrated features, including geolocation-based matching, swipe functionality, and a secure payment system."'
      },
      {
        id: 5,
        name: 'Raman Mathur',
        location: 'Jaipur, India',
        platform: 'Clutch',
        text: '"Comfygen Technologies developed and designed a food delivery app for a mobile app and website development company. The team was responsible for creating a user-friendly and scalable mobile app."'
      },
      {
        id: 6,
        name: 'Sayead Shadab Arif',
        location: 'Dubai, United Arab Emirates',
        platform: 'Clutch',
        text: '"Comfygen provided software development services for an IT project management company. The team worked on three projects involving blockchain and e-commerce."'
      },
      {
        id: 7,
        name: 'Raunak Pradhan',
        location: 'Denver, New York',
        platform: 'Clutch',
        text: '"Comfygen built a custom healthcare mobile app for a review writer company. The app included appointment scheduling, patient record management, and a telemedicine feature. The team also worked on its UI."'
      },
      {
        id: 8,
        name: 'Saurav Gupta',
        location: 'Denver, New York',
        platform: 'Google',
        text: '"I had a great experience working with Comfygen Technologies. The team is professional, responsive, and truly understands client requirements. Their technical expertise and timely delivery made the entire process smooth and stress-free. I\'d definitely recommend Comfygen Technologies to anyone looking for reliable and quality IT solutions."'
      }
    ];
  }

  return (
    <TestimonialsClient
      heading={heading}
      subheading={subheading}
      reviews={reviews}
      videos={videos}
    />
  );
};
