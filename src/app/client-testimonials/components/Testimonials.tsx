'use client';

import React, { useState, useRef } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';

const GoogleBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-slate-100 transition-colors shrink-0">
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
    <span className="text-slate-700 text-xs font-medium tracking-wide">Review</span>
  </div>
);

const ClutchBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-slate-100 transition-colors shrink-0">
    <span className="font-bold text-[13px] tracking-tight text-slate-900 flex items-center leading-none">
      Clutch<span className="text-[#d83e46] text-xl leading-[0] -mt-1.5">.</span>
    </span>
  </div>
);

const DesignRushBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 group-hover:bg-slate-100 transition-colors shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="#00D0C5" />
      <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="#ffffff" />
      <circle cx="12" cy="12" r="3.5" fill="#00D0C5" />
    </svg>
    <span className="text-slate-800 text-[10px] font-bold tracking-widest uppercase mt-0.5">DesignRush</span>
  </div>
);

const reviews = [
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

const videos = [
  {
    id: 1,
    name: 'Nitesh Rajput',
    app: 'Book My Tutor',
    youtubeId: 'Jxv6y3A4GoY'
  },
  {
    id: 2,
    name: 'Sayead Shadab Arif',
    app: 'Froge Flex',
    youtubeId: 'Jxv6y3A4GoY'
  },
  {
    id: 3,
    name: 'Alex Mercer',
    app: 'Delivery App Pro',
    youtubeId: 'Jxv6y3A4GoY'
  },
  {
    id: 4,
    name: 'Sarah Connor',
    app: 'Fitness Tracker',
    youtubeId: 'Jxv6y3A4GoY'
  },
  {
    id: 5,
    name: 'David Guetta',
    app: 'Music Streaming',
    youtubeId: 'Jxv6y3A4GoY'
  }
];

export const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');
  const [activeVideoChunk, setActiveVideoChunk] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoScrollRef = useRef<HTMLDivElement>(null);

  const handleVideoScroll = () => {
    if (videoScrollRef.current && videoScrollRef.current.children.length > 0) {
      const scrollLeft = videoScrollRef.current.scrollLeft;
      const card = videoScrollRef.current.children[0] as HTMLElement;
      const width = card.offsetWidth + 24; // 24px is gap-6
      const chunkIndex = Math.round(scrollLeft / width);
      setActiveVideoChunk(chunkIndex);
    }
  };

  const scrollToVideoChunk = (index: number) => {
    if (videoScrollRef.current && videoScrollRef.current.children.length > 0) {
      const card = videoScrollRef.current.children[0] as HTMLElement;
      const width = card.offsetWidth + 24;
      videoScrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 ">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8">

        {/* Top Section */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">

          {/* Tabs */}
          <div className="flex items-center bg-white rounded-full p-0.5 mb-8 w-fit border border-slate-200">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'reviews'
                ? 'bg-primary text-white'
                : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'videos'
                ? 'bg-primary text-white'
                : 'text-slate-500 hover:text-slate-900'
                }`}
            >
              Videos
            </button>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 mb-4 leading-[1.25] tracking-tight">
            Here is what our <span className="text-primary !font-heading">Clients</span> say <br /> about their <span className="text-primary !font-heading">Experience.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Discover the success stories and feedback from our clients, which stand as a testament to our unwavering commitment to quality and excellence.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full relative min-h-[450px] min-w-0 mt-8">
          {/* Reviews Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'reviews' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all group flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="flex justify-between items-start mb-6 gap-2">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-slate-900 font-semibold text-base leading-tight">{review.name}</h3>
                        <span className="text-slate-500 text-xs leading-tight">{review.location}</span>
                      </div>
                      {review.platform === 'Google' && <GoogleBadge />}
                      {review.platform === 'Clutch' && <ClutchBadge />}
                      {review.platform === 'DesignRush' && <DesignRushBadge />}
                      {!['Google', 'Clutch', 'DesignRush'].includes(review.platform) && review.platform && (
                        <span className="text-slate-700 text-xs font-bold bg-slate-50 border border-slate-200 px-3 py-1 rounded-full group-hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0">
                          {review.platform}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'videos' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            <div
              ref={videoScrollRef}
              onScroll={handleVideoScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-4 w-full"
            >
              {videos.map((video, idx) => (
                <div key={video.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:border-primary/30 transition-all group">
                  <div className="mb-4 px-2 pt-2">
                    <h3 className="text-slate-900 font-semibold text-base mb-0.5">{video.name}</h3>
                    <span className="text-slate-500 text-xs">{video.app}</span>
                  </div>
                  <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-black/5">
                    {playingVideoId === video.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&controls=0&modestbranding=1&playsinline=1`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Testimonial by ${video.name}`}
                      />
                    ) : (
                      <div
                        className="relative w-full h-full cursor-pointer group/video"
                        onClick={() => setPlayingVideoId(video.id)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.name}
                          className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white group-hover/video:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots and Arrows */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {activeTab === 'videos' && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToVideoChunk(Math.max(0, activeVideoChunk - 1))}
                  disabled={activeVideoChunk === 0}
                  className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
                  aria-label="Previous videos"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-2">
                  {videos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToVideoChunk(idx)}
                      className="w-10 h-10 flex items-center justify-center group"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${activeVideoChunk === idx ? 'bg-primary w-6' : 'bg-slate-300 w-1.5 group-hover:bg-slate-400'}`} />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollToVideoChunk(Math.min(videos.length - 1, activeVideoChunk + 1))}
                  disabled={activeVideoChunk === videos.length - 1}
                  className="w-10 h-10 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-colors"
                  aria-label="Next videos"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
