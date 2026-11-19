import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { engineeringNotes } from '../data/notes';
import { GraduationCap, Award, BookOpen, Clock, FileText, CheckCircle, Sparkles } from 'lucide-react';

export function Learning() {
  return (
    <section id="learning" className="py-20 border-t border-grid/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 006 // THE LEARNING CURVE"
          title="Education, certifications &amp; engineering notes."
          subtitle="Foundational computer science scholarship, verified technical accreditations, and active engineering research drafts in progress."
          handwrittenNote="perpetual student of systems"
          pageNumber="06"
        />

        {/* Section 1: Academic Education & Technical Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Education Box */}
          <div className="lg:col-span-5">
            <div className="docket-card p-6 sm:p-7 bg-paper-light border border-grid-dark rounded-md relative shadow-paper h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                  <span className="font-bold text-accent flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-accent" /> ACADEMIC SCHOLARSHIP
                  </span>
                  <span>2024 — 2028</span>
                </div>

                {education.map((edu, i) => (
                  <div key={i} className="space-y-3">
                    <div>
                      <h3 className="font-editorial text-2xl font-semibold text-ink leading-snug">
                        {edu.degree}
                      </h3>
                      <div className="font-mono text-xs font-semibold text-accent-dark mt-0.5">
                        {edu.field}
                      </div>
                      <div className="text-xs font-mono text-ink-muted mt-1">
                        {edu.institution} • {edu.location}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-sans text-ink-muted leading-relaxed pt-2">
                      {edu.description}
                    </p>

                    <div className="pt-3 border-t border-grid/60">
                      <div className="text-[10px] font-mono uppercase text-ink-faint tracking-wider mb-2">
                        Core Academic Curriculum:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {edu.keyDomains.map((domain) => (
                          <div key={domain} className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
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
                <span>STATUS: ENROLLED UNDERGRADUATE</span>
                <span className="text-sage-dark font-bold">CLASS OF 2028</span>
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="lg:col-span-7">
            <div className="docket-card p-6 sm:p-7 bg-paper-light border border-grid-dark rounded-md relative shadow-paper h-full">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                <span className="font-bold text-sage-dark flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sage-dark" /> VERIFIED CERTIFICATIONS
                </span>
                <span className="text-ink-faint">AUTHENTIC RECORDS</span>
              </div>

              <p className="text-xs font-sans text-ink-muted mb-4">
                Technical competencies validated through formal industry and organizational examinations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded bg-paper border border-grid hover:border-sage/60 transition-colors shadow-xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-accent">
                        {cert.issuer}
                      </span>
                      <span className="paper-stamp text-[10px] py-0.5 px-1.5">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="font-editorial text-lg font-semibold text-ink leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-mono text-ink-faint mt-1">
                      {cert.fullTitle}
                    </p>

                    <p className="text-xs font-sans text-ink-muted mt-2 pt-2 border-t border-grid/60">
                      <strong>Focus:</strong> {cert.focus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-grid flex items-center justify-between text-xs font-mono text-ink-muted">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-sage-dark" />
                  <span>Verified credentials from resume documentation</span>
                </div>
                <span className="text-ink-faint">NO FABRICATED IDENTIFIERS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Engineering Notes in Progress */}
        <div className="mt-12">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-grid text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="font-bold text-ink uppercase tracking-wider">
                ENGINEERING NOTES // DRAFTS IN PROGRESS
              </span>
            </div>
            <div className="paper-stamp-accent text-[11px]">
              TASTEFUL JOURNAL PREVIEW
            </div>
          </div>

          <div className="mb-4 text-xs font-sans text-ink-muted">
            Technical write-ups currently being drafted in the personal notebook. Rather than fabricating published blog URLs, these represent active engineering explorations underway:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineeringNotes.map((note) => (
              <div
                key={note.id}
                className="p-5 rounded bg-paper-light border border-grid hover:border-accent/40 transition-all shadow-xs relative"
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-grid/60 text-xs font-mono text-ink-muted">
                  <span className="font-bold text-accent">{note.docket}</span>
                  <span className="flex items-center gap-1 text-ink-faint">
                    <Clock className="w-3 h-3 text-accent" /> {note.status}
                  </span>
                </div>

                <h4 className="font-editorial text-lg sm:text-xl font-semibold text-ink leading-snug">
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
                  <span className="text-[11px] text-ink-faint italic">{note.readTime}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tasteful Notes in Progress Notice */}
          <div className="mt-6 p-4 rounded bg-paper-warm/70 border-l-2 border-sage text-xs font-mono text-ink-muted flex items-center justify-between">
            <span>FULL TECHNICAL ESSAYS WILL BE COMPILED &amp; ANNOTATED AS LAB WORK MATURES.</span>
            <span className="handwritten text-lg text-accent">~ documented as we build</span>
          </div>
        </div>
      </div>
    </section>
  );
}
