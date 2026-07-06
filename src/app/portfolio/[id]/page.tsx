import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CallToAction } from '@/components/common/CallToAction';
import { portfolioData } from '@/data/portfolioData';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return portfolioData.map((project) => ({
    id: project.id,
  }));
}

export const metadata = {
  title: "Case Study | Comfygen",
  description: "Read our detailed case study and discover how we delivered exceptional results.",
};

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = portfolioData.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen font-sans bg-slate-50 flex flex-col">
      {/* Light Header specifically for this page */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="light" />
      </div>

      <div className="flex-1 pt-32 pb-0">
        <div className="max-w-[1400px] mx-auto px-4">

          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20">
            <div className="flex-1 w-full">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-slate-900 mb-6 leading-[1.15] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                {project.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 border-y border-slate-200">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Client</p>
                  <p className="font-semibold text-slate-900">{project.clientName}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Duration</p>
                  <p className="font-semibold text-slate-900">{project.duration}</p>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative rounded-3xl overflow-hidden flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[700px] object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 !font-heading">The Challenge</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.fullChallenge}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 !font-heading">Our Solution</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {project.fullSolution}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 !font-heading">Key Results</h2>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 sticky top-32">
                <h3 className="text-xl font-bold text-slate-900 mb-6 !font-heading">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-slate-900 mb-10 !font-heading">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="relative rounded-2xl overflow-hidden group h-fit">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      width={1200}
                      height={1200}
                      className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Call To Action */}
        <CallToAction
          title="Ready to Start Your Project?"
          description="Let's transform your idea into reality with our expert development team. Get in touch with us to discuss your vision."
          buttonText="Contact Us Today"
          graphicType="dashed-circles"
          isDark={true}
        />
      </div>

      <Footer />
    </main>
  );
}
