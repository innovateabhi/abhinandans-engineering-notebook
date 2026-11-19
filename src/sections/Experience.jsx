import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { experiences } from '../data/experience';
import { ExternalLink, Calendar, MapPin, CheckCircle2, Award, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-grid/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 005 // FROM INTERN TO FOUNDER"
          title="Professional timeline &amp; engineering responsibilities."
          subtitle="From executing kernel-level monitoring during a certified Linux industrial internship at Webel to architecting software products as the founder of Softrenix Technologies."
          handwrittenNote="theory applied in the field"
          pageNumber="05"
        />

        {/* Timeline Layout */}
        <div className="space-y-10 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute top-6 bottom-6 left-8 w-[1.5px] bg-grid-dark" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative md:pl-20">
              {/* Timeline marker icon */}
              <div className="hidden md:flex absolute top-6 left-5 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-accent bg-paper items-center justify-center text-accent shadow-xs z-10">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Docket Card */}
              <div className="docket-card p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md relative shadow-paper">
                {/* Header: Role, Period, Location & Badge */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 mb-5 border-b border-grid">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-accent tracking-wider uppercase">
                        ENTRY // 0{index + 1}
                      </span>
                      <span className="text-grid-dark">•</span>
                      <span className="text-xs font-mono text-ink-muted">{exp.type}</span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-ink leading-snug">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs font-mono text-ink-muted">
                      <span className="font-bold text-ink">{exp.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-accent" /> {exp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-sage-dark" /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="paper-stamp">
                      {exp.badge}
                    </span>

                    {/* SOFTRENIX LINK: SHOWN STRICTLY WITHIN THIS ENTRY ONLY */}
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-paper-secondary hover:bg-paper-warm border border-grid text-xs font-mono text-ink-muted hover:text-accent transition-colors shadow-xs"
                        title="Visit Softrenix Technologies (External Company Site)"
                      >
                        <span>Visit {exp.organization}</span>
                        <ExternalLink className="w-3 h-3 text-accent" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base font-sans text-ink-muted leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Key Engineering Deliverables / Highlights */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono font-semibold uppercase text-ink-muted tracking-wider">
                    Core Technical Deliverables:
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-ink-muted">
                        <CheckCircle2 className="w-4 h-4 text-sage-dark mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Technologies Footer */}
                <div className="pt-4 border-t border-grid flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-ink-faint mr-1">Stack:</span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-paper-secondary border border-grid/60 text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-ink-faint">RECORD VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
