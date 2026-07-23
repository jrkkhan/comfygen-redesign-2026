import React from 'react';
import Image from 'next/image';

const photos = [
  // Col 1
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80", alt: "Meeting", className: "col-start-1 row-start-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80", alt: "Portrait", className: "col-start-1 row-start-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", alt: "Large Group", className: "col-start-1 col-span-2 row-start-4 row-span-2" },

  // Col 2
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80", alt: "Cafe", className: "col-start-2 row-start-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80", alt: "Booth", className: "col-start-2 row-start-3 row-span-1" },

  // Col 3
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", alt: "Group 1", className: "col-start-3 row-start-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&q=80", alt: "Group 2", className: "col-start-3 row-start-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80", alt: "Certificates", className: "col-start-3 row-start-4 row-span-2" },
];

export const LifePhotos = () => {
  return (
    <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white font-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block border border-blue-200 bg-blue-50 text-[#0158E6] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
            Our Culture

          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 mb-6 leading-tight font-heading">
            People. Passion. Progress.

          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            At Comfygen, our culture is built on collaboration, innovation, and meaningful connections. Explore the moments that bring our team together and make every achievement special.
          </p>
        </div>

        {/* Exact Layout Grid from Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[180px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300 ${photo.className} ${
                // Fallback for mobile (since grid areas can mess up on single col, we reset them on mobile)
                'max-md:col-span-1 max-md:row-span-1 max-md:col-start-auto max-md:row-start-auto max-md:min-h-[250px]'
                }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Optional slight dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
