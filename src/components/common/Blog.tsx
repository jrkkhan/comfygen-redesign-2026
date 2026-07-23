import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import parse from 'html-react-parser';

interface BlogProps {
  searchTerm?: string;
}

async function fetchLatestBlogs(searchTerm?: string) {
  try {
    let url = 'https://www.comfygen.com/blog/wp-json/wp/v2/posts?_embed&per_page=4';
    if (searchTerm) {
      url += `&search=${encodeURIComponent(searchTerm)}`;
    }
    const res = await fetch(url, {
      next: { revalidate: 60 } // Reduced to 1-minute ISR to see updates faster
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    const posts = await res.json();
    return posts.map((post: any, index: number) => {
      // Safely extract featured image
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      const imageUrl = featuredMedia?.source_url || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"; // Fallback image

      // Format date
      const dateObj = new Date(post.date);
      const formattedDate = dateObj.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });

      return {
        id: post.id,
        title: post.title.rendered,
        date: formattedDate,
        image: imageUrl,
        link: post.link,
      };
    });
  } catch (error) {
    console.error("Error fetching blogs from WordPress:", error);
    return []; // Return empty array on error to prevent breaking the UI
  }
}

export const Blog = async ({ searchTerm }: BlogProps = {}) => {
  const blogs = await fetchLatestBlogs(searchTerm);

  if (!blogs || blogs.length === 0) {
    return null; // Don't render the section if no blogs found
  }

  return (
    <section className="w-full py-16 xl:py-16 2xl:py-28 px-4 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10 2xl:mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl 2xl:text-[42px] font-bold text-slate-900 mb-3 2xl:mb-5 tracking-tight">
            Latest From Our Blog
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore expert insights and the latest trends shaping the world of technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 2xl:gap-6 mb-10 2xl:mb-14">
          {blogs.map((blog: any, index: number) => (
            <Link
              href={blog.link}
              key={blog.id}
              target="_blank"
              rel="noopener noreferrer"
              // Card styles with running border wrapper
              className={`group rounded-lg sm:rounded-xl cursor-pointer running-border-wrapper p-[1px] bg-slate-200
                ${index === 3 ? 'hidden lg:block' : ''}`}
            >
              {/* Inner Background to cover gradient (reveals 1px border) */}
              <div className="bg-[#FAFAFA] group-hover:bg-white transition-colors duration-300 w-full h-full relative z-10 flex flex-col sm:flex-row items-center px-4 sm:px-5 2xl:px-6 py-3 sm:py-4 2xl:py-4 gap-4 sm:gap-6 rounded-[7px] sm:rounded-[11px]">
                 {/* Text Content (Left side on Desktop) */}
                <div className="flex flex-col justify-center w-full sm:w-[50%] lg:w-[45%] order-2 sm:order-1">
                  <h3
                    style={{ fontFamily: 'var(--font-nata-sans), sans-serif' }}
                    className="text-sm sm:text-[15px] lg:text-base 2xl:text-lg font-bold mb-2 sm:mb-3 2xl:mb-4 transition-colors leading-snug tracking-tight line-clamp-3 text-slate-900 group-hover:text-primary"
                  >
                    {parse(blog.title)}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-[13px] lg:text-sm font-medium mt-1">
                    {blog.date}
                  </p>
                </div>

                {/* Image (Right side on Desktop) */}
                <div className="w-full sm:w-[50%] lg:w-[55%] aspect-video overflow-hidden shrink-0 order-1 sm:order-2 relative bg-slate-50 rounded-lg sm:rounded-xl">
                  <Image
                    src={blog.image}
                    alt={blog.title.replace(/<[^>]*>?/gm, '')} // Clean HTML for alt tag
                    fill
                    sizes="(max-width: 640px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="https://www.comfygen.com/blog/">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-3.5 rounded-full transition-colors shadow-[0_0_20px_rgba(1,88,230,0.3)] hover:shadow-[0_0_25px_rgba(1,88,230,0.5)] transform hover:-translate-y-0.5">
              View More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};
