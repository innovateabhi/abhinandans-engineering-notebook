import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { skillCategories } from '../data/skills';
import { Terminal, Layers, Database, Cloud, Wrench, Zap, Code2 } from 'lucide-react';

export function Toolkit() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0].id);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming': return <Code2 className="w-4 h-4 text-accent shrink-0" />;
      case 'frontend': return <Layers className="w-4 h-4 text-sage-dark shrink-0" />;
      case 'backend': return <Terminal className="w-4 h-4 text-accent shrink-0" />;
      case 'databases': return <Database className="w-4 h-4 text-sage-dark shrink-0" />;
      case 'cloud': return <Cloud className="w-4 h-4 text-accent shrink-0" />;
      case 'devops': return <Wrench className="w-4 h-4 text-sage-dark shrink-0" />;
      case 'automation': return <Zap className="w-4 h-4 text-accent shrink-0" />;
      default: return <Code2 className="w-4 h-4 text-ink-muted shrink-0" />;
    }
  };

  const currentCategory = skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0];

  return (
    <section id="toolkit" className="py-16 sm:py-24 border-t border-grid/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 004 // MY ENGINEERING TOOLKIT"
          title="Practical technologies, systems &amp; tooling."
          subtitle="An annotated engineering inventory of languages, frameworks, databases, and DevOps tools. Grounded in actual project implementations rather than abstract percentage bars."
          handwrittenNote="tools chosen for purpose, not hype"
          pageNumber="04"
        />

        {/* Mobile Horizontal Category Tabs */}
        <div className="lg:hidden mb-6 flex overflow-x-auto pb-2 gap-2 scrollbar-none no-scrollbar">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md whitespace-nowrap font-mono text-xs transition-all shrink-0 ${
                  isSelected
                    ? 'bg-paper-secondary border border-sage font-bold text-ink shadow-xs'
                    : 'bg-paper-light border border-grid text-ink-muted hover:text-ink'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Navigation Tabs (Desktop Sidebar) */}
          <div className="hidden lg:block lg:col-span-4 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase text-ink-muted pb-2 border-b border-grid flex items-center justify-between">
              <span>Toolkit Taxonomy</span>
              <span className="text-ink-faint">7 CATEGORIES</span>
            </div>

            <div className="space-y-1">
              {skillCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-md text-left transition-all ${
                      isSelected
                        ? 'bg-paper-secondary border border-sage/60 font-semibold text-ink shadow-xs'
                        : 'bg-paper-light border border-grid/60 text-ink-muted hover:text-ink hover:bg-paper-warm/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {getCategoryIcon(cat.id)}
                      <span className="font-mono text-xs">{cat.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-ink-faint">{cat.docketNumber}</span>
                  </button>
                );
              })}
            </div>

            {/* Note on Skill Evaluation */}
            <div className="p-3.5 rounded bg-paper-warm/70 border border-grid text-xs text-ink-muted font-sans mt-4">
              <div className="font-mono text-[10px] uppercase font-bold text-sage-dark mb-1">
                Engineering Assessment Standard:
              </div>
              <p className="leading-relaxed">
                Technologies are cataloged based on verified codebase usage, API integrations, and hands-on laboratory experiments. No arbitrary percentage meters.
              </p>
            </div>
          </div>

          {/* Active Category Display (Right Content Sheet) */}
          <div className="lg:col-span-8">
            <div className="docket-card p-5 sm:p-8 bg-paper-light border border-grid-dark rounded-md relative shadow-paper">
              {/* Category Sheet Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-grid text-xs font-mono text-ink-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-xs"></span>
                  <span className="font-bold text-ink uppercase">{currentCategory.title}</span>
                  <span className="text-grid-dark">•</span>
                  <span className="text-ink-faint">{currentCategory.docketNumber}</span>
                </div>
                <span className="text-ink-faint">{currentCategory.skills.length} TECHNOLOGIES CATALOGED</span>
              </div>

              {/* Category Description */}
              <p className="text-xs sm:text-sm font-sans text-ink-muted mb-5 leading-relaxed">
                {currentCategory.description}
              </p>

              {/* Skills Detailed Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {currentCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 sm:p-4 rounded bg-paper border border-grid hover:border-sage/60 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-ink">{skill.name}</span>
                    </div>

                    <p className="text-xs text-ink-muted leading-relaxed font-sans mb-3">
                      {skill.context}
                    </p>

                    {skill.projects && skill.projects.length > 0 && (
                      <div className="pt-2 border-t border-grid/60">
                        <div className="text-[10px] font-mono uppercase text-ink-faint mb-1">
                          Applied In:
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {skill.projects.map((proj) => (
                            <span
                              key={proj}
                              className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-paper-secondary text-ink-muted"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Sheet Note */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-grid flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>VERIFIED STACK // THE ENGINEERING NOTEBOOK</span>
                <span className="handwritten text-sm sm:text-base text-accent">~ documented in practice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
