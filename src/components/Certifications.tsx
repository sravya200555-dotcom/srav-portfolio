import React from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificationsProps {
  certifications: CertificationItem[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>05</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Certifications
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Professional certifications and accredited technical learning milestones.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 shrink-0 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                {/* Credential ID if present */}
                {cert.credentialId && (
                  <div className="mb-4 text-xs font-mono text-neutral-500">
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Skills covered (unboxed text with separators) */}
                <div className="pt-4 border-t border-neutral-800/60">
                  <span className="text-xs text-neutral-500 block mb-2 font-medium">
                    Core Skills Evaluated:
                  </span>
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-300">
                    {cert.skillsCovered.map((s, i) => (
                      <React.Fragment key={s}>
                        <span>{s}</span>
                        {i < cert.skillsCovered.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status Footer */}
              <div className="pt-5 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                  <Award className="w-3.5 h-3.5" />
                  Verified Completion
                </span>
                <span className="text-neutral-500">Active Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
