"use client";

import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import Image from 'next/image';

interface FloatingDemoVideoProps {
  videoUrl: string;
  title?: string;
  thumbnailUrl?: string;
}

const getYoutubeVideoId = (url: string) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const FloatingDemoVideo = ({ videoUrl, title = "Watch Demo", thumbnailUrl }: FloatingDemoVideoProps) => {
  const videoId = getYoutubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : videoUrl;
  const computedThumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : thumbnailUrl;
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show the floating button after a short delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!videoUrl) return null;

  return (
    <>
      {/* Floating Button / Thumbnail */}
      <div 
        className={`fixed left-4 bottom-4 md:left-6 md:bottom-6 z-40 transition-all duration-700 ease-in-out transform ${
          isVisible && !isClosed ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative group bg-white p-2 rounded-2xl shadow-2xl border border-slate-200 w-48 md:w-56 cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setIsOpen(true)}>
          {/* Close button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsClosed(true);
            }}
            className="absolute -top-3 -right-3 w-8 h-8 bg-white border border-slate-200 text-slate-500 rounded-full flex items-center justify-center hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm z-10"
            aria-label="Close demo video popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Thumbnail Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900">
            {computedThumbnail ? (
              <img 
                src={computedThumbnail} 
                alt={title || "Demo Video"} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-600/80"></div>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-white ml-1" />
              </div>
            </div>
          </div>

          <div className="mt-3 mb-1 px-1 text-center">
            <p className="text-sm font-bold text-slate-900 leading-tight">
              {title}
            </p>
          </div>
        </div>
      </div>

      {/* Collapsed Video Icon */}
      <div 
        className={`fixed left-4 bottom-4 md:left-6 md:bottom-6 z-40 transition-all duration-500 ease-in-out transform ${
          isClosed ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setIsClosed(false)}
          className="w-14 h-14 bg-slate-900 hover:bg-primary text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all hover:scale-110 group border-2 border-white/10"
          aria-label="Re-open demo video"
        >
          <Play className="w-6 h-6 ml-1 group-hover:text-white transition-colors" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
          </span>
        </button>
      </div>

      {/* Full Screen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-20 backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video relative">
              <iframe 
                src={`${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1`} 
                title={title || "Demo Video"} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="absolute inset-0 w-full h-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
