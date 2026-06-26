import React from 'react';
import Link from 'next/link';
import { ArrowRight, Smartphone, Activity, BrainCircuit, Network, Component, ShoppingCart, icons } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  link?: string;
  isBlueLink?: boolean;
  className?: string;
  children: React.ReactNode;
}

const ServiceCard = ({ title, description, link = "#", isBlueLink = false, className = "", children }: ServiceCardProps) => (
  <div className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-8 2xl:p-10 flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 ${className}`}>
    <h3 className="text-balance text-base sm:text-lg 2xl:text-2xl font-semibold text-slate-900 mb-2 2xl:mb-3 !font-heading tracking-tighter ">{title}</h3>
    <p className="text-slate-500 text-xs sm:text-sm mb-4 2xl:mb-6">{description}</p>

    <Link href={link} className={`flex items-center text-xs sm:text-sm font-semibold mb-4 2xl:mb-8 w-fit ${isBlueLink ? 'text-primary' : 'text-slate-800 group-hover:text-primary'} transition-colors`}>
      Show More <ArrowRight className="w-4 h-4 ml-1" />
    </Link>

    <div className=" flex justify-center relative pt-4 2xl:pt-8 pb-2 2xl:pb-4">
      {/* Glowing background blob behind the icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 2xl:w-28 2xl:h-28 bg-primary/80 blur-3xl rounded-full group-hover:bg-primary/100 transition-colors"></div>
      <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
        {children}
      </div>
    </div>
  </div>
);

export interface ServiceItemData {
  title: string;
  description: string;
  link?: string;
  icon?: string | React.ElementType;
  isBlueLink?: boolean;
  className?: string;
}

export interface ServicesProps {
  title?: React.ReactNode;
  subtitle?: string;
  centerCardText?: React.ReactNode;
  services?: ServiceItemData[];
  buttonText?: string;
  buttonLink?: string;
}

const defaultServices: ServiceItemData[] = [
  { title: "Mobile App Development", description: "We Have Skilled Android And iOS Developers Who Build Intuitive, Responsive Mobile Apps Tailored To Real Business Needs.", link: "/mobile-app-development", isBlueLink: true, className: "lg:min-h-[340px] 2xl:min-h-[460px]", icon: Smartphone },
  { title: "Blockchain App Development", description: "We Have Expertise In Custom Blockchain App Development Solutions Using Ethereum, Solana, Hyperledger, Stellar, And More.", link: "/blockchain-development", icon: Network },
  { title: "Healthcare App Development", description: "We Specialize In Healthcare App Development That Streamline Operations And Improve Patient Experiences", link: "/healthcare-app-development", icon: Activity },
  { title: "NFT Marketplace Development", description: "We Build Secure And Scalable NFT Marketplace Platforms For Minting, Buying, Selling, And Trading Digital Assets.", link: "/solution/nft-marketplace-development", icon: Component },
  { title: "AI App Development", description: "At Comfygen, We Provide Intelligent AI App Development Solutions That Automate Processes, Improve Decision-Making, And Unlock New Growth Opportunities.", link: "/ai-development", className: "lg:min-h-[320px] 2xl:min-h-[440px]", icon: BrainCircuit },
  { title: "Ecommerce Web & App Development", description: "We Are A Top-Rated IT Solutions Company Providing Secure And Engaging ECommerce Web And Mobile App Development", link: "/ecommerce-app-development", icon: ShoppingCart }
];

export const Services = ({
  title = <><span className="text-primary !font-heading">Mobile and Web</span><br />App Development Services</>,
  subtitle = "Our Skilled Developers Build AI-Powered Apps With Modern Frameworks To Enhance Business Performance.",
  centerCardText = <>Everythings In<br />One Place</>,
  services: displayServices = defaultServices,
  buttonText = "View More",
  buttonLink = "#"
}: ServicesProps) => {
  const [s0, s1, s2, s3, s4, s5] = [
    displayServices[0] || defaultServices[0],
    displayServices[1] || defaultServices[1],
    displayServices[2] || defaultServices[2],
    displayServices[3] || defaultServices[3],
    displayServices[4] || defaultServices[4],
    displayServices[5] || defaultServices[5],
  ];

  const getIcon = (iconProp: any) => {
    if (typeof iconProp === 'string') {
      const IconComp = (icons as any)[iconProp];
      return IconComp || Smartphone;
    }
    return iconProp || Smartphone;
  };

  const Icon0 = getIcon(s0?.icon);
  const Icon1 = getIcon(s1?.icon);
  const Icon2 = getIcon(s2?.icon);
  const Icon3 = getIcon(s3?.icon);
  const Icon4 = getIcon(s4?.icon);
  const Icon5 = getIcon(s5?.icon);

  return (
    <section id="services" className="w-full py-16 xl:py-16 2xl:py-24 px-4 bg-white relative z-20">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Section Heading */}
        <div className="text-center mb-10 2xl:mb-16 max-w-3xl">
          <h2 className="text-balance text-3xl md:text-4xl 2xl:text-5xl font-bold text-slate-900 mb-3 2xl:mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-500 text-sm md:text-base ">
            {subtitle}
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6 w-full mb-12 2xl:mb-16">

          {/* Column 1 */}
          <div className="flex flex-col gap-4 2xl:gap-6">
            <ServiceCard title={s0.title} description={s0.description} link={s0.link} isBlueLink={s0.isBlueLink} className={s0.className}>
              <Icon0 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            <ServiceCard title={s1.title} description={s1.description} link={s1.link} isBlueLink={s1.isBlueLink} className={s1.className}>
              <Icon1 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 2xl:gap-6">
            <ServiceCard title={s2.title} description={s2.description} link={s2.link} isBlueLink={s2.isBlueLink} className={s2.className}>
              <Icon2 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            {/* Solid Blue Card */}
            <div className="bg-gradient-to-r from-primary to-primary/30 rounded-xl p-6 2xl:p-8 flex items-center justify-center text-center min-h-[160px] 2xl:min-h-[220px] ">
              <h3 className="text-balance text-white text-2xl 2xl:text-3xl font-semibold tracking-tight !font-heading">{centerCardText}</h3>
            </div>

            <ServiceCard title={s3.title} description={s3.description} link={s3.link} isBlueLink={s3.isBlueLink} className={s3.className}>
              <Icon3 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 2xl:gap-6">
            <ServiceCard title={s4.title} description={s4.description} link={s4.link} isBlueLink={s4.isBlueLink} className={s4.className}>
              <Icon4 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>

            <ServiceCard title={s5.title} description={s5.description} link={s5.link} isBlueLink={s5.isBlueLink} className={s5.className}>
              <Icon5 className="w-16 h-16 2xl:w-24 2xl:h-24 text-slate-800 stroke-[1.2]" />
            </ServiceCard>
          </div>

        </div>

        {/* View More Button */}
        <Link href={buttonLink} className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20">
          {buttonText}
        </Link>

      </div>
    </section>
  );
};
