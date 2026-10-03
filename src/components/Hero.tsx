import React from 'react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume }) => {
  return (
    <section className="relative min-h-[82vh] flex items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-neutral-900 bg-neutral-950">
      
      {/* Background: Soft gradient blur and fine abstract lines (Purely decorative, no text) */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-neutral-800/25 via-neutral-900/10 to-neutral-800/20 blur-[150px] -z-10 rounded-full pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-neutral-800/40 -z-10 pointer-events-none"
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-neutral-800/20 -z-10 pointer-events-none"
      />

      <div className="max-w-3xl mx-auto px-6 text-center w-full">
        
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight font-display text-balance">
          {data.name}
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-neutral-300 font-medium mt-4 font-sans tracking-tight">
          Computer Science Engineering Student
        </p>

        {/* Professional Introduction based strictly on resume */}
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
          {data.shortBio}
        </p>

        {/* Two Clean Modern Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-neutral-950 bg-white rounded-xl hover:bg-neutral-200 transition-all duration-200 whitespace-nowrap active:scale-[0.98] shadow-sm"
          >
            View My Projects
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-xl hover:text-white hover:border-neutral-700 hover:bg-neutral-850 transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
          >
            Download Resume
          </button>
        </div>

        {/* Minimal Text Links: GitHub | LinkedIn */}
        <div className="flex items-center justify-center gap-3 mt-8 text-sm text-neutral-400">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-neutral-700">|</span>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};
