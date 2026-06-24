import React from 'react';
import { ArrowRight, Smartphone, Activity, BrainCircuit, Network, Component, ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  isBlueLink?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ServiceCard = ({ title, description, isBlueLink = false, className = "", children }: ServiceCardProps) => (
  <div className={`bg-white rounded-xl border border-slate-200 p-8 sm:p-10 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 ${className}`}>
    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3  !font-heading tracking-tighter ">{title}</h3>
    <p className="text-slate-500 text-sm  mb-6">{description}</p>

    <a href="/" className={`flex items-center text-sm font-semibold mb-8 w-fit ${isBlueLink ? 'text-primary' : 'text-slate-800 group-hover:text-primary'} transition-colors`}>
      Show More <ArrowRight className="w-4 h-4 ml-1" />
    </a>

    <div className="mt-auto flex justify-center relative pt-8 pb-4">
      {/* Glowing background blob behind the icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-primary/80 blur-3xl rounded-full group-hover:bg-primary/100 transition-colors"></div>
      <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
        {children}
      </div>
    </div>
  </div>
);

export interface ServiceItemData {
  title: string;
  description: string;
  icon?: React.ElementType;
  isBlueLink?: boolean;
  className?: string;
}

export interface ServicesProps {
  title?: React.ReactNode;
  subtitle?: string;
  centerCardText?: React.ReactNode;
  services?: ServiceItemData[];
}

const defaultServices: ServiceItemData[] = [
  { title: "Mobile App Development", description: "We Have Skilled Android And iOS Developers Who Build Intuitive, Responsive Mobile Apps Tailored To Real Business Needs.", isBlueLink: true, className: "lg:min-h-[460px]", icon: Smartphone },
  { title: "Blockchain App Development", description: "We Have Expertise In Custom Blockchain App Development Solutions Using Ethereum, Solana, Hyperledger, Stellar, And More.", icon: Network },
  { title: "Healthcare App Development", description: "We Specialize In Healthcare App Development That Streamline Operations And Improve Patient Experiences", icon: Activity },
  { title: "NFT Marketplace Development", description: "We Build Secure And Scalable NFT Marketplace Platforms For Minting, Buying, Selling, And Trading Digital Assets.", icon: Component },
  { title: "AI App Development", description: "At Comfygen, We Provide Intelligent AI App Development Solutions That Automate Processes, Improve Decision-Making, And Unlock New Growth Opportunities.", className: "lg:min-h-[440px]", icon: BrainCircuit },
  { title: "Ecommerce Web & App Development", description: "We Are A Top-Rated IT Solutions Company Providing Secure And Engaging ECommerce Web And Mobile App Development", icon: ShoppingCart }
];

export const Services = ({
  title = <><span className="text-primary !font-heading">Mobile and Web</span><br />App Development Services</>,
  subtitle = "Our Skilled Developers Build AI-Powered Apps With Modern Frameworks To Enhance Business Performance.",
  centerCardText = <>Everythings In<br />One Place</>,
  services: displayServices = defaultServices
}: ServicesProps) => {
  const [s0, s1, s2, s3, s4, s5] = [
    displayServices[0] || defaultServices[0],
    displayServices[1] || defaultServices[1],
    displayServices[2] || defaultServices[2],
    displayServices[3] || defaultServices[3],
    displayServices[4] || defaultServices[4],
    displayServices[5] || defaultServices[5],
  ];

  const Icon0 = s0?.icon || Smartphone;
  const Icon1 = s1?.icon || Smartphone;
  const Icon2 = s2?.icon || Smartphone;
  const Icon3 = s3?.icon || Smartphone;
  const Icon4 = s4?.icon || Smartphone;
  const Icon5 = s5?.icon || Smartphone;

  return (
    <section className="w-full py-24 px-4 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            {subtitle}
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <ServiceCard title={s0.title} description={s0.description} isBlueLink={s0.isBlueLink} className={s0.className}>
              <Icon0 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            <ServiceCard title={s1.title} description={s1.description} isBlueLink={s1.isBlueLink} className={s1.className}>
              <Icon1 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <ServiceCard title={s2.title} description={s2.description} isBlueLink={s2.isBlueLink} className={s2.className}>
              <Icon2 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            {/* Solid Blue Card */}
            <div className="bg-gradient-to-r from-primary to-primary/30 rounded-xl p-8 flex items-center justify-center text-center min-h-[220px] ">
              <h3 className="text-white text-3xl font-semibold tracking-tight !font-heading">{centerCardText}</h3>
            </div>

            <ServiceCard title={s3.title} description={s3.description} isBlueLink={s3.isBlueLink} className={s3.className}>
              <Icon3 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <ServiceCard title={s4.title} description={s4.description} isBlueLink={s4.isBlueLink} className={s4.className}>
              <Icon4 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            <ServiceCard title={s5.title} description={s5.description} isBlueLink={s5.isBlueLink} className={s5.className}>
              <Icon5 className="w-24 h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

        </div>

        {/* View More Button */}
        <button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20">
          View More
        </button>

      </div>
    </section>
  );
};
