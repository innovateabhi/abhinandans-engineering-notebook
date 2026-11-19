import React from 'react';

export function SectionHeader({
  chapter,
  title,
  subtitle,
  handwrittenNote,
  pageNumber,
  className = ""
}) {
  return (
    <div className={`mb-12 relative ${className}`}>
      {/* Chapter docket header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-grid-dark/60 font-mono text-xs text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent inline-block rounded-xs"></span>
          <span className="font-semibold tracking-widest uppercase">{chapter}</span>
        </div>
        {pageNumber && (
          <div className="text-ink-faint tracking-wider">
            PAGE {pageNumber}
          </div>
        )}
      </div>

      {/* Main heading */}
      <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.15]">
        {title}
      </h2>

      {/* Subtitle & Handwritten note */}
      <div className="mt-3 flex flex-col md:flex-row md:items-baseline justify-between gap-3">
        {subtitle && (
          <p className="text-base sm:text-lg text-ink-muted max-w-2xl font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
        {handwrittenNote && (
          <div className="handwritten text-lg sm:text-xl text-accent select-none transform md:rotate-[-1.5deg] shrink-0">
            ~ {handwrittenNote}
          </div>
        )}
      </div>
    </div>
  );
}
