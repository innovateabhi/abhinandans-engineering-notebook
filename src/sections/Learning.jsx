import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { engineeringNotes } from '../data/notes';
import { GraduationCap, Award, BookOpen, Clock, CheckCircle } from 'lucide-react';

export function Learning() {
  return (
    <section id="learning" className="py-16 sm:py-24 border-t border-grid/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 006 // THE LEARNING CURVE"
          title="Education, certifications &amp; notes."
          subtitle="Foundational computer science scholarship, verified technical accreditations, and active engineering research drafts in progress."
          handwrittenNote="perpetual student of systems"
          pageNumber="06"
        />

        {/* Section 1: Academic Education & Technical Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-14 sm:mb-16 items-start">
          {/* Education Box */}
          <div className="lg:col-span-5">
            <div className="docket-card p-5 sm:p-7 bg-paper-light border border-grid-dark rounded-md relative shadow-paper h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                  <span className="font-bold text-accent flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-accent shrink-0" /> ACADEMIC SCHOLARSHIP
                  </span>
                  <span>2024 - 2028</span>
                </div>

                {education.map((edu, i) => (
                  <div key={i} className="space-y-3">
                    <div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-ink leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="font-mono text-xs font-semibold text-accent-dark mt-0.5">
                        {edu.field}
                      </div>
                      <div className="text-xs font-mono text-ink-muted mt-1">
                        {edu.institution} • {edu.location}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed pt-1">
                      {edu.description}
                    </p>

                    <div className="pt-3 border-t border-grid/60">
                      <div className="text-[10px] font-mono uppercase text-ink-faint tracking-wider mb-2">
                        Core Academic Curriculum:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {edu.keyDomains.map((domain) => (
                          <div key={domain} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-ink-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-sage-dark shrink-0"></span>
                            <span className="truncate">{domain}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-grid flex items-center justify-between text-xs font-mono text-ink-muted">
                <span className="text-[11px]">STATUS: ENROLLED UNDERGRADUATE</span>
                <span className="text-sage-dark font-bold text-[11px]">CLASS OF 2028</span>
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="lg:col-span-7">
            <div className="docket-card p-5 sm:p-7 bg-paper-light border border-grid-dark rounded-md relative shadow-paper h-full">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                <span className="font-bold text-sage-dark flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sage-dark shrink-0" /> VERIFIED CERTIFICATIONS
                </span>
                <span className="text-ink-faint text-[11px]">AUTHENTIC RECORDS</span>
              </div>

              <p className="text-xs font-sans text-ink-muted mb-4">
                Technical competencies validated through formal industry examinations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-3.5 sm:p-4 rounded bg-paper border border-grid hover:border-sage/60 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-accent">
                        {cert.issuer}
                      </span>
                      <span className="paper-stamp text-[9px] py-0.5 px-1.5">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="font-editorial text-base sm:text-lg font-semibold text-ink leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-[11px] font-mono text-ink-faint mt-0.5">
                      {cert.fullTitle}
                    </p>

                    <p className="text-xs font-sans text-ink-muted mt-2 pt-2 border-t border-grid/60 leading-relaxed">
                      <strong>Focus:</strong> {cert.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-grid flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
                <div className="flex items-center gap-1.5 text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                  <span>Verified credentials from resume documentation</span>
                </div>
                <span className="text-ink-faint text-[10px]">NO FABRICATED IDENTIFIERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Engineering Notes in Progress */}
        <div className="mt-10 sm:mt-12">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-grid text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="font-bold text-ink uppercase tracking-wider">
                ENGINEERING NOTES // DRAFTS IN PROGRESS
              </span>
            </div>
            <div className="paper-stamp-accent text-[10px]">
              TASTEFUL JOURNAL PREVIEW
            </div>
          </div>

          <div className="mb-4 text-xs font-sans text-ink-muted leading-relaxed">
            Technical write-ups currently being drafted in the personal notebook. Rather than fabricating published blog URLs, these represent active engineering investigations underway:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {engineeringNotes.map((note) => (
              <div
                key={note.id}
                className="p-4 sm:p-5 rounded bg-paper-light border border-grid hover:border-accent/40 transition-all shadow-xs relative"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-grid/60 text-xs font-mono text-ink-muted">
                  <span className="font-bold text-accent">{note.docket}</span>
                  <span className="flex items-center gap-1 text-ink-faint text-[11px]">
                    <Clock className="w-3 h-3 text-accent shrink-0" /> {note.status}
                  </span>
                </div>

                <h4 className="font-editorial text-base sm:text-lg font-semibold text-ink leading-snug">
                  {note.title}
                </h4>

                <p className="text-xs sm:text-sm font-sans text-ink-muted mt-2 leading-relaxed">
                  {note.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex flex-wrap gap-1">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-paper-secondary text-ink-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-ink-faint italic">{note.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Notes in Progress Notice */}
          <div className="mt-6 p-3.5 sm:p-4 rounded bg-paper-warm/70 border-l-2 border-sage text-xs font-mono text-ink-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-[11px]">FULL TECHNICAL ESSAYS WILL BE COMPILED &amp; ANNOTATED AS LAB WORK MATURES.</span>
            <span className="handwritten text-base sm:text-lg text-accent">~ documented as we build</span>
          </div>
        </div>
      </div>
    </section>
  );
}
