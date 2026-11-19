import React from 'react';
import { Link } from 'react-router-dom';
import { StatusBadge } from '../ui/StatusBadge';
import { ArrowUpRight, Cpu, Layers, Terminal, Sparkles, BookOpen } from 'lucide-react';

export function ProjectCard({ project, index }) {
  const getIcon = () => {
    if (project.slug === 'cloud-cost-optimizer') return <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />;
    if (project.slug === 'linux-system-monitoring') return <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-sage-dark" />;
    if (project.slug === 'restaurant-pos-saas') return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />;
    return <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sage" />;
  };

  return (
    <article className="docket-card group relative p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full bg-paper-light border border-grid/90 rounded-xl transition-all duration-300 hover:shadow-paper-lg hover:border-sage/60 overflow-hidden">
      {/* Top Header Docket */}
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-grid/70 text-xs font-mono text-ink-muted min-w-0">
          <div className="flex items-center gap-1.5 min-w-0 max-w-[62%] sm:max-w-[68%]">
            <span className="text-ink-faint font-semibold shrink-0 text-[10px] sm:text-xs">PROJ // {project.id}</span>
            <span className="text-grid-dark shrink-0">•</span>
            <span className="uppercase text-ink-muted truncate text-[10px] sm:text-xs" title={project.category}>
              {project.category}
            </span>
          </div>
          <div className="shrink-0">
            <StatusBadge status={project.status} statusType={project.statusType} />
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div className="flex items-start gap-2.5 sm:gap-3 mb-2 min-w-0">
          <div className="p-1.5 sm:p-2 rounded bg-paper-secondary border border-grid/80 shrink-0 mt-0.5 group-hover:border-sage/50 transition-colors">
            {getIcon()}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-editorial text-lg sm:text-xl lg:text-2xl font-semibold text-ink group-hover:text-accent transition-colors leading-snug break-words">
              <Link to={`/projects/${project.slug}`} className="focus:outline-none focus:underline">
                {project.title}
              </Link>
            </h3>
            {project.subtitle && (
              <p className="text-[11px] sm:text-xs font-mono text-ink-faint mt-1 leading-snug break-words">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-ink-muted mt-3 font-sans leading-relaxed break-words">
          {project.shortDescription}
        </p>

        {/* Notebook Annotation */}
        {project.notebookNote && (
          <div className="mt-3.5 p-2.5 rounded bg-paper-warm/80 border-l-2 border-accent text-xs font-sans text-ink-muted italic leading-relaxed break-words">
            <span className="font-mono text-[10px] uppercase font-bold not-italic text-accent mr-1.5">Note:</span>
            {project.notebookNote}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack & Case Study Link */}
      <div className="mt-5 pt-4 border-t border-grid/70 min-w-0">
        <div className="flex flex-wrap gap-1 mb-4 min-w-0">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-paper-secondary border border-grid/60 text-ink-muted break-all"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-between w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-paper hover:bg-paper-secondary border border-grid text-xs font-mono font-semibold text-ink transition-all group-hover:border-sage group-hover:shadow-xs focus:outline-none focus:ring-1 focus:ring-accent min-w-0"
        >
          <span className="flex items-center gap-1.5 min-w-0 truncate">
            <BookOpen className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">Case Study &amp; Architecture</span>
          </span>
          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1.5" />
        </Link>
      </div>
    </article>
  );
}
