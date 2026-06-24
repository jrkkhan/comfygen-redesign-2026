import React from 'react';
import { AlertCircle, TrendingDown, Users, Clock, ShieldAlert, CheckCircle2, Megaphone } from 'lucide-react';
import { SolutionPageData } from "@/types/solution";

interface ProblemStatementProps {
  sectionData?: SolutionPageData['problemsSection'];
}

const fallbackProblems = [
  {
    icon: TrendingDown,
    title: "High Aggregator Commissions",
    problem: "Third-party platforms swallow up to 30% of your hard-earned margins.",
    solution: "Launch your own app and keep 100% of profits."
  },
  {
    icon: Users,
    title: "Zero Customer Loyalty",
    problem: "You don't own customer data, making it impossible to run marketing.",
    solution: "Build a direct relationship with analytics."
  },
  {
    icon: Clock,
    title: "Inefficient Logistics",
    problem: "Poor route optimization leads to delayed deliveries and cold food.",
    solution: "Automated dispatch with AI route tracking."
  },
  {
    icon: ShieldAlert,
    title: "Poor Tech & Crashes",
    problem: "Outdated software crashes during peak hours, resulting in lost sales.",
    solution: "Scalable cloud architecture."
  },
  {
    icon: Megaphone,
    title: "Lost Brand Identity",
    problem: "Your restaurant is hidden among competitors on third-party apps.",
    solution: "100% white-label brand identity."
  }
];

const genericIcons = [TrendingDown, Users, Clock, ShieldAlert, Megaphone];

export const ProblemStatement = ({ sectionData }: ProblemStatementProps) => {
  const finalProblems = sectionData?.items || fallbackProblems;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-50/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-rose-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-600 font-semibold text-sm mb-6">
            <AlertCircle className="w-4 h-4" />
            <span>The Industry Challenge</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-slate-900 mb-6 leading-tight">
            {sectionData?.heading ? (
              <span dangerouslySetInnerHTML={{ __html: sectionData.heading.replace('Problems', '<span class="text-rose-600">Problems</span>') }} />
            ) : (
              <><span className="text-rose-600">Major Problems</span> in <br />
              <span className="inline-block">Food Delivery App Development</span></>
            )}
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            {sectionData?.subHeading || "We understand the exact hurdles you face. Relying on third-party platforms destroys margins and limits your growth. It's time to take back control."}
          </p>
        </div>

        {/* 5 Cards Layout using a 5-column grid so they all appear in ONE row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {finalProblems.map((item, idx) => {
            const Icon = genericIcons[idx % genericIcons.length];

            return (
              <div 
                key={idx} 
                className="group relative bg-white border border-slate-200 rounded-3xl p-5 lg:p-6 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-500 flex flex-col"
              >
                {/* Problem Section */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-5 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.problem}
                  </p>
                </div>

                {/* Separator */}
                <div className="h-px w-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 my-4 mt-auto"></div>

                {/* Solution Section */}
                <div className="pt-2 flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    <span className="text-emerald-600 block mb-0.5">Solution:</span> {item.solution}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
