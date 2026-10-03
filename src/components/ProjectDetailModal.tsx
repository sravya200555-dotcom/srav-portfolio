import React from 'react';
import { X, CheckCircle2, Github, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
            <span>Project Case Study</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-white font-semibold">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Project Title & Full Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
            <p className="mt-3 text-neutral-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies Used (Clean unboxed tags) */}
          <div className="pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Technologies & Stacks
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-neutral-300">
              {project.technologies.map((tech, i) => (
                <React.Fragment key={tech}>
                  <span className="text-white font-medium">{tech}</span>
                  {i < project.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-neutral-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Key Features & Architecture Deliverables */}
          <div className="space-y-3 pt-4 border-t border-neutral-800">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Key Features & Deliverables
            </h3>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-800 bg-neutral-950">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-200 border border-neutral-800 rounded-lg hover:text-white hover:border-neutral-700 hover:bg-neutral-850 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            )}
            {project.liveDemoUrl && project.liveDemoUrl.startsWith('http') && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors"
              >
                <span>Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
