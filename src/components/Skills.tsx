import React, { useState } from 'react';
import { Terminal, Globe, CheckSquare, Wrench, Binary, Layers } from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal className="w-4 h-4" />;
      case 'web-tech':
        return <Globe className="w-4 h-4" />;
      case 'testing-validation':
        return <CheckSquare className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      case 'core-cs':
        return <Binary className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>03</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Technical Skills
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Core programming languages, development stacks, and computer science foundations.
          </p>
        </div>

        {/* Interactive Segmented Filter Control (Allowed functional button tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl mb-12 max-w-3xl">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 hover:border-neutral-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-5 mb-6 border-b border-neutral-800/80">
                  <div className="p-2.5 rounded-lg bg-neutral-800 text-white shrink-0">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-neutral-400">
                      {cat.skills.length} verified technical competencies
                    </span>
                  </div>
                </div>

                {/* Skills List within Category */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                        {/* Clean unboxed text metadata */}
                        <span className="text-xs font-medium text-neutral-400">
                          {skill.level}
                        </span>
                      </div>
                      {skill.highlight && (
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Indicator */}
              <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                <span>Domain Focus</span>
                <span className="text-neutral-300 font-mono text-[11px]">Academic & Practical</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
