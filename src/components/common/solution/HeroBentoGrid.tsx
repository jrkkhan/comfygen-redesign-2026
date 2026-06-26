import Image from 'next/image';
import { Smartphone, Code2, Zap, ShieldCheck, Trophy, Layers } from 'lucide-react';

export const HeroBentoGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full min-h-[400px] lg:min-h-[500px]">
      
      {/* Top Left: Main Image Feature */}
      <div className="col-span-2 sm:col-span-1 row-span-2 relative bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-end overflow-hidden group hover:border-white/20 transition-colors">
        <Image 
          src="/images/hero/happy-customer.webp" 
          alt="Happy Customer" 
          fill 
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
        />
        {/* Adjusted gradient to let the image show clearly at the top while keeping text readable at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10"></div>
        
        <div className="relative z-10">
          <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-md border border-white/10">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 className="text-balance text-white font-bold text-xl mb-2">Native iOS & Android</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Built with high-performance frameworks for both major platforms natively.</p>
        </div>
      </div>

      {/* Top Right: Quick Stat */}
      <div className="col-span-1 bg-gradient-to-br from-[#0158e6] to-[#013b99] backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
        <Zap className="w-8 h-8 text-white mb-3" />
        <div className="text-3xl font-black text-white mb-1">4-6</div>
        <div className="text-white/90 text-sm font-medium">Weeks to Launch</div>
      </div>

      {/* Middle Right: Feature */}
      <div className="col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center hover:bg-white/10 transition-colors group">
        <Layers className="w-6 h-6 text-purple-400 mb-3 group-hover:rotate-12 transition-transform" />
        <h3 className="text-balance text-white font-bold mb-1">White-Label</h3>
        <p className="text-slate-400 text-xs">100% Brand Ownership</p>
      </div>

      {/* Bottom Full: Trust / Security */}
      <div className="col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors">
        <div className="w-14 h-14 bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center shrink-0">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-balance text-white font-bold text-lg mb-1">Enterprise-Grade Security</h3>
          <p className="text-slate-400 text-sm">End-to-end encryption & secure cloud infrastructure.</p>
        </div>
      </div>

    </div>
  );
};
