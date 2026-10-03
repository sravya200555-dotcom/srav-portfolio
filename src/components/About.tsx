import React from 'react';
import { GraduationCap, Code2, Compass, Target, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>01</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            About Me
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            A snapshot of my academic journey, core competencies, and career objectives.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 leading-relaxed text-base">
            <p className="text-lg text-white font-medium leading-relaxed">
              {data.aboutMe}
            </p>
            
            <p className="text-neutral-400">
              Through hands-on academic coursework and practical programming, I have focused on writing clean, modular Python applications, analyzing dynamic data structures, and engineering responsive web interfaces. I prioritize code readability, rigorous input validation, and solid computational fundamentals.
            </p>

            <p className="text-neutral-400">
              I am seeking software engineering internships and entry-level opportunities where I can apply my analytical skills, learn from experienced engineering teams, and contribute to production-grade software applications.
            </p>

            {/* Quick Core Strengths Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Focus Area</span>
                <span className="font-semibold text-white">Software & Application Development</span>
              </div>
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-xs text-neutral-400 block mb-1">Primary Language</span>
                <span className="font-semibold text-white">Python & Web Technologies</span>
              </div>
            </div>
          </div>

          {/* Key Attributes & Pillars Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Pillar 1: Education */}
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-200 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Formal Engineering Education</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Undergraduate degree in Computer Science & Engineering with coursework in Data Structures, Algorithms, and System Architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Technical Rigor */}
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-200 shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Hands-on Problem Solving</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Practical experience in writing Python scripts for type introspection, academic performance calculations, and defensive boundary validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Career Goals */}
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-200 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Career Vision & Goals</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Aiming to join a high-caliber development team, master modern distributed architecture, and build robust software products that solve real problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4: Work Ethic */}
            <div className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-200 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Continuous Growth Mindset</h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Relentlessly learning new paradigms, reading clean code literature, and expanding technical depth across frontend and backend domains.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
