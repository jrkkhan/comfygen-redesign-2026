import React from 'react';
import Link from 'next/link';

interface CustomSectionLink {
  label: string;
  href: string;
}

interface OptionalCustomSectionProps {
  isEnabled?: boolean;
  h2Heading?: string;
  h3Heading?: string;
  description?: string | React.ReactNode;
  internalLinks?: CustomSectionLink[];
}

export const OptionalCustomSection = ({
  isEnabled = false,
  h2Heading,
  h3Heading,
  description,
  internalLinks = []
}: OptionalCustomSectionProps) => {
  if (!isEnabled) return null;

  return (
    <section className="w-full py-16 px-4 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center md:text-left mb-10">
          {h2Heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 !font-heading">{h2Heading}</h2>}
          {h3Heading && <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 !font-heading">{h3Heading}</h3>}
          {description && (
            <div className="text-slate-600 text-base leading-relaxed max-w-3xl">
              {description}
            </div>
          )}
        </div>

        {internalLinks.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-8">
            {internalLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                className="bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
