import React from 'react';
import { Trophy, Star, Users, Calendar } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  if (!achievements || achievements.length === 0) return null;

  const getIcon = (category: string) => {
    switch (category) {
      case 'Academics':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Competition':
        return <Star className="w-5 h-5 text-blue-400" />;
      case 'Leadership':
        return <Users className="w-5 h-5 text-emerald-400" />;
      default:
        return <Trophy className="w-5 h-5 text-neutral-300" />;
    }
  };

  return (
    <section id="achievements" className="py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 mb-2.5 tracking-wider uppercase">
            <span>06</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Honors & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Key Achievements
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Academic accolades, competitive problem-solving milestones, and community contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/90 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-800 shrink-0">
                    {getIcon(item.category)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-display mb-1.5">
                  {item.title}
                </h3>
                
                <p className="text-xs text-neutral-400 font-medium mb-3">
                  {item.organization}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Domain</span>
                <span className="text-neutral-300 font-medium">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
