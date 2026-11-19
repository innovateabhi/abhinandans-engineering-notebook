import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, ShieldCheck, FileDown } from 'lucide-react';
import { profile } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-grid/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 007 // LET'S CONNECT"
          title="Every good project starts with a conversation."
          subtitle="Whether it's a software engineering opportunity, cloud infrastructure inquiry, technical internship discussion, or engineering collaboration — my inbox is open."
          handwrittenNote="drop a line in my inbox"
          pageNumber="07"
        />

        {/* Closing Contact Card Layout */}
        <div className="docket-card p-6 sm:p-10 lg:p-12 bg-paper-light border border-grid-dark rounded-md relative shadow-paper-lg">
          {/* Top Docket Tag */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-accent rounded-xs shrink-0"></span>
              <span className="font-bold text-ink uppercase tracking-wider text-[11px] sm:text-xs">
                DIRECT COMMUNICATION DESK
              </span>
            </div>
            <span className="text-ink-faint text-[10px] sm:text-xs">RESPONSE WITHIN 24–48 HOURS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Email CTA & Copy Action */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              <div>
                <div className="text-[11px] sm:text-xs font-mono uppercase text-accent font-bold tracking-wider mb-1">
                  Single Direct Contact Channel
                </div>
                <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-semibold text-ink leading-tight break-words">
                  {profile.email}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-ink-muted mt-2 max-w-lg leading-relaxed">
                  Direct email communication ensures that your engineering opportunities, infrastructure questions, or collaboration proposals reach me directly without intermediary noise.
                </p>
              </div>

              {/* Action Buttons: Write Me an Email, Copy Email & Resume */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded bg-accent hover:bg-accent-dark text-paper font-mono text-xs font-semibold tracking-wider transition-all shadow-paper active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>WRITE ME AN EMAIL</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded bg-paper-secondary hover:bg-paper-warm border border-grid text-ink font-mono text-xs font-semibold tracking-wider transition-all shadow-xs active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-sage-dark shrink-0" />
                      <span className="text-sage-dark">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-ink-muted shrink-0" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>

                <a
                  href={profile.resumePdfUrl}
                  download={profile.resumeFilename}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded bg-paper hover:bg-paper-warm border border-grid text-ink-muted hover:text-ink font-mono text-xs font-semibold tracking-wider transition-all shadow-xs"
                >
                  <FileDown className="w-4 h-4 text-accent shrink-0" />
                  <span>RESUME PDF</span>
                </a>
              </div>
            </div>

            {/* Right: Verified Profile Badges */}
            <div className="lg:col-span-4 p-4 sm:p-5 rounded bg-paper border border-grid space-y-3.5">
              <div className="text-xs font-mono font-semibold uppercase text-ink-muted pb-2 border-b border-grid/60">
                Professional Profiles
              </div>

              <div className="space-y-2 text-xs font-mono">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-paper-secondary hover:bg-paper-warm border border-grid/70 text-ink transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-ink shrink-0" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded bg-paper-secondary hover:bg-paper-warm border border-grid/70 text-ink transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-accent shrink-0" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted" />
                </a>
              </div>

              <div className="pt-1 text-[10px] sm:text-[11px] font-mono text-ink-faint flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                <span>External profiles provided for identity reference only.</span>
              </div>
            </div>
          </div>

          {/* Bottom Notebook Stamped Footer */}
          <div className="mt-8 sm:mt-10 pt-5 border-t border-grid flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="paper-stamp text-[10px]">
                DIRECT INBOX ACCESS
              </span>
              <span className="text-ink-faint text-[10px] sm:text-xs hidden sm:inline">NO BOT FORMS • NO THIRD-PARTY COLLECTORS</span>
            </div>
            <div className="handwritten text-base sm:text-lg text-accent select-none">
              ~ looking forward to connecting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
