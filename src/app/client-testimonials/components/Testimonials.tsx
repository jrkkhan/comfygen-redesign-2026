'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

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

export type Review = {
  id: number;
  name: string;
  location: string;
  platform: string;
  text: string;
  link?: string;
};

const PlatformBadge = ({ platform, link }: { platform: string; link?: string }) => {
  const platformLower = (platform || '').trim().toLowerCase();

  const badge = (
    <>
      {platformLower === 'google' && <GoogleBadge />}
      {platformLower === 'clutch' && <ClutchBadge />}
      {platformLower === 'designrush' && <DesignRushBadge />}
      {!['google', 'clutch', 'designrush'].includes(platformLower) && platform && (
        <span className="text-slate-700 text-xs font-bold bg-slate-50 border border-slate-200 px-3 py-1 rounded-full group-hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0">
          {platform}
        </span>
      )}
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-200">
        {badge}
      </a>
    );
  }

  return badge;
};

export type TestimonialVideo = {
  id: number;
  name: string;
  app: string;
  youtubeId: string;
};

interface TestimonialsProps {
  reviews: Review[];
  videos: TestimonialVideo[];
}

export const Testimonials = ({ reviews, videos }: TestimonialsProps) => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');
  const [playingVideoId, setPlayingVideoId] = useState<string | number | null>(null);

  return (
    <section className="w-full py-12 lg:py-16 px-4 ">
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
            What Our <span className="text-primary !font-heading">Clients </span> say <br /> About Their <span className="text-primary !font-heading">Experience.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Explore real feedback and success stories from businesses that have partnered with Comfygen Technologies. Our client experiences reflect our dedication to delivering reliable solutions, transparent collaboration, and exceptional results.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full relative min-h-[300px] min-w-0 mt-4">
          {/* Reviews Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'reviews' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, idx) => {
                const currentReviewId = review.id || `review-${idx}`;
                return (
                  <div key={currentReviewId} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-primary/30 transition-all group flex flex-col justify-between cursor-pointer">
                    <div>
                      <div className="flex justify-between items-start mb-6 gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 font-semibold text-base leading-tight">{review.name}</h3>
                          <span className="text-slate-500 text-xs leading-tight">{review.location}</span>
                        </div>
                        <PlatformBadge platform={review.platform} link={review.link} />
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Videos Grid */}
          <div className={`transition-all duration-500 absolute w-full ${activeTab === 'videos' ? 'opacity-100 translate-y-0 z-10 relative' : 'opacity-0 translate-y-4 z-0 hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {videos.map((video, idx) => {
                const currentId = video.id || video.youtubeId || `video-${idx}`;
                return (
                  <div key={currentId} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col hover:border-primary/30 transition-all group">
                    <div className="mb-4 px-2 pt-2">
                      <h3 className="text-slate-900 font-semibold text-base mb-0.5">{video.name}</h3>
                      <span className="text-slate-500 text-xs">{video.app}</span>
                    </div>
                    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black/5">
                      {playingVideoId === currentId ? (
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
                          onClick={() => setPlayingVideoId(currentId)}
                        >
                          <Image
                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                            alt={video.name}
                            fill
                            className="object-cover group-hover/video:scale-105 transition-transform duration-500"
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
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
