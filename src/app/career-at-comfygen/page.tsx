import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CareersHero } from './components/CareersHero';
import { Perks } from './components/Perks';
import { JobBoard } from './components/JobBoard';

export const metadata = {
  title: "Careers | Comfygen",
  description: "Join our team of passionate creators and engineers. Explore open positions and learn about our company culture.",
};

export default function CareersPage() {
  return (
    <main className="relative min-h-screen font-sans flex flex-col">
      {/* Dark Header for the Hero Section */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Header theme="dark" />
      </div>

      <CareersHero />
      <JobBoard />
      <Perks />

      <Footer />
    </main>
  );
}
