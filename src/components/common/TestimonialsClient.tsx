'use client';

import React, { useState, useRef } from 'react';
import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const GoogleBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
    <span className="text-white/90 text-xs font-medium tracking-wide">Review</span>
  </div>
);

const ClutchBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
    <span className="font-bold text-[13px] tracking-tight text-white flex items-center leading-none">
      Clutch<span className="text-[#d83e46] text-xl leading-[0] -mt-1.5">.</span>
    </span>
  </div>
);

const DesignRushBadge = () => (
  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L24 12L12 24L0 12L12 0Z" fill="#00D0C5"/>
      <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="#12182b"/>
      <circle cx="12" cy="12" r="3.5" fill="#00D0C5"/>
    </svg>
    <span className="text-white text-[10px] font-bold tracking-widest uppercase mt-0.5">DesignRush</span>
  </div>
);

export type Review = {
  id: number;
  name: string;
  location: string;
  platform: string;
  text: string;
};

export type TestimonialVideo = {
  id: number;
  name: string;
  app: string;
  youtubeId: string;
};

interface TestimonialsClientProps {
  heading: React.ReactNode;
  subheading: string;
  reviews: Review[];
  videos: TestimonialVideo[];
}

export const TestimonialsClient = ({ heading, subheading, reviews, videos }: TestimonialsClientProps) => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');
  const [activeChunk, setActiveChunk] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Group reviews into chunks of 4
  const reviewChunks = [];
  for (let i = 0; i < reviews.length; i += 4) {
    reviewChunks.push(reviews.slice(i, i + 4));
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const chunkIndex = Math.round(scrollLeft / width);
      setActiveChunk(chunkIndex);
    }
  };

  const scrollToChunk = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-[#0A0D27]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8">

          {/* Tabs */}
          <div className="flex items-center bg-[#12182b] rounded-full p-0.5 mb-10 w-fit border border-white/[0.04]">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'reviews'
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(1,88,230,0.4)]'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === 'videos'
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(1,88,230,0.4)]'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              Videos
            </button>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-6 leading-[1.25] tracking-tight">
            {heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
            {subheading}
          </p>

          <Link href="/client-testimonials" className="border border-primary text-white hover:bg-primary px-8 py-3.5 rounded-full text-sm font-medium transition-all  hover:shadow-[0_0_20px_rgba(1,88,230,0.4)]">
            Check More
          </Link>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 w-full relative min-h-[450px] min-w-0">
          {/* Reviews Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'reviews' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4 w-full"
            >
              {reviewChunks.map((chunk, chunkIdx) => (
                <div key={chunkIdx} className="w-full min-w-full shrink-0 snap-start grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {chunk.map(review => {
                    const platformLower = (review.platform || '').trim().toLowerCase();
                    return (
                    <div key={review.id} className="bg-[#12182b] border border-white/5 rounded-xl p-6 hover:bg-[#1a2238] transition-colors group flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6 gap-2">
                          <div className="flex flex-col gap-1">
                            <h3 className="text-white font-semibold text-base leading-tight">{review.name}</h3>
                            <span className="text-slate-400 text-xs leading-tight">{review.location}</span>
                          </div>
                          {platformLower === 'google' && <GoogleBadge />}
                          {platformLower === 'clutch' && <ClutchBadge />}
                          {platformLower === 'designrush' && <DesignRushBadge />}
                          {!['google', 'clutch', 'designrush'].includes(platformLower) && review.platform && (
                            <span className="text-white text-xs font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-full group-hover:bg-white/10 transition-colors whitespace-nowrap shrink-0">
                              {review.platform}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  )})}
                </div>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'videos' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            {videos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map(video => (
                  <div key={video.id} className="bg-[#12182b] border border-white/[0.04] rounded-2xl p-4 flex flex-col hover:bg-[#1a2238] transition-colors">
                    <div className="mb-4 px-2 pt-2">
                      <h3 className="text-white font-semibold text-base mb-0.5">{video.name}</h3>
                      <span className="text-slate-400 text-xs">{video.app}</span>
                    </div>
                    <div className="w-full aspect-[9/16] rounded-xl overflow-hidden bg-black/20">
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
                          className="relative w-full h-full cursor-pointer group"
                          onClick={() => setPlayingVideoId(video.id)}
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                            alt={video.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(1,88,230,0.6)] group-hover:scale-110 transition-transform duration-300">
                              <Play className="w-6 h-6 ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[300px] bg-[#12182b] rounded-2xl border border-white/5">
                <p className="text-slate-400">More videos coming soon!</p>
              </div>
            )}
          </div>

          {/* Pagination Dots and Arrows */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {activeTab === 'reviews' && reviewChunks.length > 1 && (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => scrollToChunk(Math.max(0, activeChunk - 1))}
                  disabled={activeChunk === 0}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-white/10 transition-colors"
                  aria-label="Previous reviews"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                
                <div className="flex gap-2">
                  {reviewChunks.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToChunk(idx)}
                      className="w-10 h-10 flex items-center justify-center group"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className={`h-1.5 rounded-full transition-all duration-300 ${activeChunk === idx ? 'bg-primary w-6' : 'bg-white/20 w-1.5 group-hover:bg-white/40'}`} />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollToChunk(Math.min(reviewChunks.length - 1, activeChunk + 1))}
                  disabled={activeChunk === reviewChunks.length - 1}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-white/10 transition-colors"
                  aria-label="Next reviews"
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
