import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('sravya_portfolio_data_v3');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore localStorage read errors
    }
    return initialPortfolioData;
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sravya_portfolio_data_v3', JSON.stringify(data));
    } catch {
      // Ignore localStorage write errors
    }
  }, [data]);

  const handleUpdateData = (updated: Partial<PortfolioData>) => {
    setData((prev) => ({ ...prev, ...updated }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Navigation Bar conforming to 3-zone contract */}
      <Navbar
        name={data.name}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          data={data}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 2. About Me Section */}
        <About
          data={data}
        />

        {/* 3. Education Section */}
        <Education
          education={data.education}
        />

        {/* 4. Technical Skills Section */}
        <Skills
          categories={data.skillCategories}
        />

        {/* 5. Projects Section with Interactive Simulator */}
        <Projects
          projects={data.projects}
        />

        {/* 6. Certifications Section */}
        <Certifications
          certifications={data.certifications}
        />

        {/* 7. Achievements & Honors Section */}
        <Achievements
          achievements={data.achievements}
        />

        {/* 9. Contact Section with Form Validation */}
        <Contact
          data={data}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        data={data}
      />

      {/* 8. Functional Resume Modal (PDF Print, Plaintext Copy, Customizer) */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        data={data}
        onUpdateData={handleUpdateData}
      />
    </div>
  );
}
