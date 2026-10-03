import React, { useState } from 'react';
import { X, Printer, Copy, Check, Edit3, Download, Mail, MapPin, Globe, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdateData?: (updated: Partial<PortfolioData>) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
}) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editBio, setEditBio] = useState(data.aboutMe);
  const [editLinkedin, setEditLinkedin] = useState(data.linkedin);
  const [editLocation, setEditLocation] = useState(data.location);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${data.name.toUpperCase()}
${data.title}
Email: ${data.email} | Location: ${data.location}
LinkedIn: ${data.linkedin} | GitHub: ${data.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
${data.aboutMe}

==================================================
EDUCATION
==================================================
${data.education.map(e => `
- ${e.degree} in ${e.field}
  ${e.institution} (${e.startYear} - ${e.endYear})
  Academic Status: ${e.status} | Standing: ${e.gradeOrGpa || 'N/A'}
  Relevant Coursework: ${e.coursework.join(', ')}
`).join('')}

==================================================
TECHNICAL SKILLS
==================================================
${data.skillCategories.map(cat => `
${cat.title.toUpperCase()}:
${cat.skills.map(s => `  • ${s.name} (${s.level}) - ${s.highlight || ''}`).join('\n')}
`).join('\n')}

==================================================
PROJECTS
==================================================
${data.projects.map(p => `
- ${p.title}
  Category: ${p.category} | Technologies: ${p.technologies.join(', ')}
  Description: ${p.shortDescription}
  Key Highlights:
${p.keyFeatures.map(f => `    * ${f}`).join('\n')}
`).join('\n')}

==================================================
CERTIFICATIONS
==================================================
${data.certifications.map(c => `
- ${c.name} (${c.issuer}, ${c.issueDate})
  Credential ID: ${c.credentialId || 'N/A'}
  Skills: ${c.skillsCovered.join(', ')}
`).join('\n')}

==================================================
ACHIEVEMENTS
==================================================
${data.achievements.map(a => `
- ${a.title} - ${a.organization} (${a.date})
  ${a.description}
`).join('\n')}
`.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSaveEdit = () => {
    if (onUpdateData) {
      onUpdateData({
        aboutMe: editBio,
        linkedin: editLinkedin,
        location: editLocation,
      });
    }
    setIsEditing(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto no-print"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white tracking-wide uppercase font-display">
              Recruiter-Ready Resume
            </span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-xs text-neutral-400">PDF & Print View</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 border border-neutral-800 rounded-lg hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isEditing ? 'View Resume' : 'Edit Details'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 border border-neutral-800 rounded-lg hover:text-white hover:bg-neutral-800 transition-colors"
              title="Copy plain text to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors active:scale-98"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content: Rendered 1-Page Document */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-neutral-950">
          
          {isEditing ? (
            /* Quick Edit View */
            <div className="max-w-2xl mx-auto p-6 bg-neutral-900 border border-neutral-800 rounded-xl space-y-5">
              <h3 className="text-base font-bold text-white">Customize Resume Information</h3>
              <p className="text-xs text-neutral-400">
                You can tweak your summary or contact details below. Changes reflect across the portfolio in real time.
              </p>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Professional Summary / About Me
                </label>
                <textarea
                  rows={4}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editLocation}
                    onChange={(e) => setEditLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="text"
                    value={editLinkedin}
                    onChange={(e) => setEditLinkedin(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            /* Standard A4-styled Printable Document Container */
            <div className="max-w-[780px] mx-auto bg-white text-neutral-900 p-8 sm:p-12 rounded-lg shadow-xl print-container">
              
              {/* Document Header */}
              <div className="border-b-2 border-neutral-900 pb-5 mb-6 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 uppercase font-display">
                  {data.name}
                </h1>
                <p className="text-sm font-semibold text-neutral-700 mt-1">
                  {data.title}
                </p>
                
                {/* Contact Bar */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-3 font-medium">
                  <span>{data.email}</span>
                  <span aria-hidden="true">·</span>
                  <span>{data.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{data.github}</span>
                  <span aria-hidden="true">·</span>
                  <span>{data.linkedin}</span>
                </div>
              </div>

              {/* Section: Professional Summary */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-display">
                  Professional Summary
                </h2>
                <p className="text-xs text-neutral-700 leading-relaxed text-justify">
                  {data.aboutMe}
                </p>
              </div>

              {/* Section: Education */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3 font-display">
                  Education
                </h2>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-bold text-neutral-900">
                          {edu.degree} in {edu.field}
                        </span>
                        <span className="text-neutral-600 font-medium">
                          {edu.startYear} – {edu.endYear}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-neutral-600 mt-0.5">
                        <span>{edu.institution}, {edu.location}</span>
                        {edu.gradeOrGpa && (
                          <span className="font-semibold text-neutral-800">
                            {edu.gradeOrGpa}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-1">
                        <span className="font-semibold text-neutral-700">Coursework:</span>{' '}
                        {edu.coursework.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Technical Skills */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-display">
                  Technical Skills
                </h2>
                <div className="space-y-1.5 text-xs">
                  {data.skillCategories.map((cat) => (
                    <div key={cat.id} className="flex items-baseline">
                      <span className="font-bold text-neutral-900 w-44 shrink-0 text-[11px]">
                        {cat.title}:
                      </span>
                      <span className="text-neutral-700 text-[11px] leading-relaxed">
                        {cat.skills.map(s => `${s.name} (${s.level})`).join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Technical Projects */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3 font-display">
                  Projects & Software Development
                </h2>
                <div className="space-y-4">
                  {data.projects.map((proj) => (
                    <div key={proj.id}>
                      <div className="flex justify-between items-baseline text-xs">
                        <span className="font-bold text-neutral-900">
                          {proj.title}
                        </span>
                        <span className="text-[11px] text-neutral-600 font-mono">
                          [{proj.technologies.slice(0, 3).join(', ')}]
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-700 mt-1 leading-snug">
                        {proj.shortDescription}
                      </p>
                      <ul className="list-disc list-inside text-[11px] text-neutral-600 mt-1 space-y-0.5">
                        {proj.keyFeatures.slice(0, 2).map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section: Certifications & Honors */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2 font-display">
                  Certifications & Key Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {data.certifications.map((cert) => (
                    <div key={cert.id} className="text-[11px]">
                      <span className="font-bold text-neutral-900">{cert.name}</span>
                      <p className="text-neutral-600">{cert.issuer} · {cert.issueDate}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-800 bg-neutral-950 shrink-0 text-xs text-neutral-400">
          <span>Formatted for standard A4 single-page print output</span>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
