import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { Filter, Sparkles, Terminal, Cpu, Layers } from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dev') return project.statusType === 'dev';
    if (activeFilter === 'internship') return project.statusType === 'internship';
    if (activeFilter === 'lab') return project.statusType === 'lab';
    return true;
  });

  return (
    <section id="projects" className="py-20 border-t border-grid/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 003 // THINGS I'VE BUILT"
          title="Engineering projects, systems, and technical explorations."
          subtitle="A transparent index of real-world software systems, certified industrial work, and engineering lab prototypes. Transparently categorized by development status."
          handwrittenNote="six distinct engineering inquiries"
          pageNumber="03"
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-4 border-b border-grid/60">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xs font-mono text-ink-muted mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>

            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                activeFilter === 'all'
                  ? 'bg-ink text-paper font-semibold shadow-xs'
                  : 'bg-paper-secondary text-ink-muted hover:text-ink hover:bg-paper-warm'
              }`}
            >
              All Projects ({projects.length})
            </button>

            <button
              onClick={() => setActiveFilter('dev')}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                activeFilter === 'dev'
                  ? 'bg-accent text-paper font-semibold shadow-xs'
                  : 'bg-paper-secondary text-ink-muted hover:text-ink hover:bg-paper-warm'
              }`}
            >
              In Development (3)
            </button>

            <button
              onClick={() => setActiveFilter('internship')}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                activeFilter === 'internship'
                  ? 'bg-sage-dark text-paper font-semibold shadow-xs'
                  : 'bg-paper-secondary text-ink-muted hover:text-ink hover:bg-paper-warm'
              }`}
            >
              Webel Internship (1)
            </button>

            <button
              onClick={() => setActiveFilter('lab')}
              className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                activeFilter === 'lab'
                  ? 'bg-ink-light text-paper font-semibold shadow-xs'
                  : 'bg-paper-secondary text-ink-muted hover:text-ink hover:bg-paper-warm'
              }`}
            >
              Engineering Lab (2)
            </button>
          </div>

          <div className="text-xs font-mono text-ink-faint hidden md:block">
            CLICK ANY CARD FOR FULL ARCHITECTURE CASE STUDY
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Notebook Chapter Footnote */}
        <div className="mt-12 p-4 rounded bg-paper-warm/60 border border-grid text-xs font-mono text-ink-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span>Transparent Integrity: No fabricated users, imaginary revenue, or unverified scale claims.</span>
          </div>
          <span className="text-ink-faint">VOL // 03-INDEX</span>
        </div>
      </div>
    </section>
  );
}
