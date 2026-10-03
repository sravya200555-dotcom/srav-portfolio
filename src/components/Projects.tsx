import React, { useState } from 'react';
import { ArrowUpRight, Github, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState<'All' | 'Python' | 'Web'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
              <span>04</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Featured Projects
            </h2>
            <p className="mt-3 text-neutral-400 text-base leading-relaxed">
              Software applications, Python systems, and web projects developed during my academic studies.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with subtle segmented style) */}
          <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl shrink-0 self-start md:self-auto">
            {(['All', 'Python', 'Web'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === tab
                    ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0; // First item is highlighted
            return (
              <div
                key={project.id}
                className={`group flex flex-col justify-between rounded-2xl bg-neutral-900/40 border border-neutral-800/90 overflow-hidden hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  {/* Project Image Container with Scrim & Aspect Ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = document.getElementById(`fallback-${project.id}`);
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div
                      id={`fallback-${project.id}`}
                      style={{ display: 'none' }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-neutral-900 text-neutral-400"
                    >
                      <Code2 className="w-8 h-8 text-neutral-600 mb-2" />
                      <p className="text-sm font-medium text-neutral-300">{project.title}</p>
                    </div>

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                    {/* Category Label at bottom corner */}
                    <div className="absolute bottom-3 left-4 text-xs font-semibold text-neutral-300 drop-shadow">
                      {project.category} Engineering
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors font-display">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-1 text-neutral-400 hover:text-white transition-colors shrink-0"
                        title="View details"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Key features bullet preview */}
                    <div className="space-y-1.5 mb-5">
                      {project.keyFeatures.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies (Anti-slop: unboxed clean text) */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-neutral-400">
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-neutral-300">{tech}</span>
                          {i < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-neutral-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Bottom Strip */}
                <div className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/40 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-white hover:text-neutral-300 transition-colors"
                  >
                    View Project Details →
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail & Simulator Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
