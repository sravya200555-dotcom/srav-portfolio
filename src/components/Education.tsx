import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>02</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Education
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Formal qualifications, technical degrees, and foundational academic coursework.
          </p>
        </div>

        {/* Timeline / Card Structure */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-7 before:w-px before:bg-neutral-800">
          {education.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-6 md:gap-8 group">
              
              {/* Timeline marker node */}
              <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white shrink-0 group-hover:border-neutral-700 transition-colors shadow-lg">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-neutral-300" />
              </div>

              {/* Education Card */}
              <div className="flex-1 p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-200">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                      {item.degree}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-neutral-300 mt-1">
                      {item.field}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  {/* Metadata (Unboxed text with typographic separators) */}
                  <div className="flex flex-wrap md:flex-col md:items-end gap-1.5 text-xs text-neutral-400 shrink-0">
                    <div className="flex items-center gap-1.5 font-medium text-neutral-300">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{item.startYear} – {item.endYear}</span>
                    </div>
                    {item.gradeOrGpa && (
                      <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.gradeOrGpa}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="mb-5 text-xs text-neutral-400">
                  <span className="text-neutral-500">Academic Status:</span>{' '}
                  <span className="text-neutral-300 font-medium">{item.status}</span>
                </div>

                {/* Coursework Modules */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-neutral-800/80">
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-3 uppercase tracking-wider">
                      <BookOpen className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Key Academic Coursework & Modules</span>
                    </div>
                    
                    {/* Rendered as clean text tags with unboxed aesthetic */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-300">
                      {item.coursework.map((course, i) => (
                        <div key={course} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                          <span>{course}</span>
                          {i < item.coursework.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-700 hidden sm:inline">·</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
