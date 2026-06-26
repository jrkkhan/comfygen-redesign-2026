import React from 'react';

export interface CallToActionProps {
  title: string | React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
  isDark?: boolean;
  graphicType?: 'circles' | 'organic' | 'bars' | 'dashed-circles';
}

export const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink = "#",
  isDark = false,
  graphicType = 'circles'
}: CallToActionProps) => {

  const renderGraphic = () => {
    const svgColorClass = isDark ? "text-primary/80" : "text-primary";
    const svgBaseClass = `${svgColorClass} opacity-30 md:opacity-100 pointer-events-none absolute top-auto bottom-[-10%] right-[-10%] md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:right-8 lg:right-20 xl:right-24 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]`;

    switch (graphicType) {
      case 'organic':
        return (
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={svgBaseClass}>
            {Array.from({ length: 15 }).map((_, i) => {
              const scale = 1 - (i * 0.06);
              const strokeW = 2.5 / scale; // Thicker lines for bold look
              return (
                <g key={i} transform={`translate(250, 250) scale(${scale}) translate(-250, -250)`}>
                  <path
                    d="M 250 30 C 350 20, 450 40, 470 150 C 490 260, 400 320, 420 420 C 440 520, 250 480, 150 450 C 50 420, 20 300, 50 200 C 80 100, 150 40, 250 30 Z"
                    stroke="currentColor"
                    strokeWidth={strokeW}
                    fill="none"
                  />
                </g>
              );
            })}
          </svg>
        );
      case 'bars':
        const barsClass = `${svgColorClass} opacity-10 md:opacity-100 pointer-events-none absolute bottom-[-5%] right-[-10%] md:bottom-0 md:right-12 lg:right-24 xl:right-32 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]`;
        return (
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={barsClass}>
            {Array.from({ length: 15 }).map((_, i) => {
              // Proper symmetric pyramid peaking at index 7 (middle)
              const height = Math.max(40, 460 - Math.abs(i - 7) * 55);
              return <rect key={i} x={70 + i * 24} y={500 - height} width="8" height={height} fill="currentColor" rx="4" />
            })}
          </svg>
        );
      case 'dashed-circles':
        return (
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={svgBaseClass}>
            {Array.from({ length: 35 }).map((_, idx) => {
              const i = idx - 17;
              const yOffset = i * 13.5;
              const y = 250 + yOffset;
              const rOut = 240;
              const rIn = 145;

              // Prevent NaN
              if (Math.abs(yOffset) > rOut) return null;

              const xOut = Math.sqrt(rOut * rOut - yOffset * yOffset);

              if (Math.abs(yOffset) < rIn) {
                const xIn = Math.sqrt(rIn * rIn - yOffset * yOffset);
                return (
                  <g key={idx}>
                    <line x1={250 - xOut} y1={y} x2={250 - xIn} y2={y} stroke="currentColor" strokeWidth="2.5" />
                    <line x1={250 + xIn} y1={y} x2={250 + xOut} y2={y} stroke="currentColor" strokeWidth="2.5" />
                  </g>
                );
              } else {
                return <line key={idx} x1={250 - xOut} y1={y} x2={250 + xOut} y2={y} stroke="currentColor" strokeWidth="2.5" />;
              }
            })}
          </svg>
        );
      case 'circles':
      default:
        return (
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={svgBaseClass}>
            {Array.from({ length: 20 }).map((_, i) => (
              <circle key={i} cx="250" cy="250" r={240 - i * 12} stroke="currentColor" strokeWidth="2.5" fill="none" />
            ))}
          </svg>
        );
    }
  };
  return (
    <section className="w-full py-10 2xl:py-16 px-4">
      <div className={`max-w-[1400px] mx-auto rounded-[32px] overflow-hidden px-8 py-8 lg:px-12 lg:py-10 2xl:px-16 2xl:py-14 relative flex flex-col md:flex-row items-center ${isDark ? 'bg-[#0A0D27]' : 'bg-[#fafafa] border border-slate-200'}`}>

        {/* Left Content */}
        <div className="w-full md:w-3/5 lg:w-1/2 relative z-10 space-y-4 2xl:space-y-6">
          <h2 className={`text-balance text-2xl sm:text-3xl 2xl:text-4xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h2>
          <p className={`text-[15px] md:text-base 2xl:text-lg max-w-xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {description}
          </p>
          <div className="pt-2 2xl:pt-4">
            <a
              href={buttonLink}
              className={`inline-block px-6 py-2.5 2xl:px-8 2xl:py-3 rounded-full font-medium transition-all duration-300 ${isDark
                ? 'bg-primary text-white hover:bg-blue-700'
                : 'bg-primary text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {renderGraphic()}
        </div>

      </div>
    </section>
  );
};
