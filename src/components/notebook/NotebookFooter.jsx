import React from 'react';
import { Mail, Github, Linkedin, ArrowUp, ShieldCheck } from 'lucide-react';
import { profile } from '../../data/profile';

export function NotebookFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 sm:mt-24 border-t border-grid bg-paper-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Identity & Colophon */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/favicon.svg"
                alt="Abhinandan's Engineering Notebook Logo"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded border border-sage-dark/60 bg-paper-secondary object-contain shadow-xs"
              />
              <span className="font-editorial text-base sm:text-lg font-semibold text-ink">
                The Engineering Notebook
              </span>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed font-sans max-w-sm">
              Handcrafted digital engineering journal documenting real-world systems, cloud infrastructure, full-stack prototypes, and DevOps experiments by Abhinandan Roy.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-mono text-ink-faint">
              <span>B.Tech CSE (2024–2028)</span>
              <span>•</span>
              <span>Dev Bhoomi Uttarakhand University</span>
            </div>
          </div>

          {/* Col 2: Channels (Only Email direct contact, GitHub/LinkedIn external profiles) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono font-semibold uppercase text-ink-muted tracking-wider pb-1 border-b border-grid/60">
              Communication Channels
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-ink hover:text-accent transition-colors"
                title="Primary direct contact"
              >
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="break-all">{profile.email}</span>
                <span className="text-[10px] text-accent uppercase font-bold shrink-0">(Direct)</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
              >
                <Github className="w-3.5 h-3.5 shrink-0" />
                <span className="break-all">github.com/innovateabhi</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 shrink-0" />
                <span className="break-all">linkedin.com/in/abhinandan-roy-28a1b6328</span>
              </a>
            </div>
          </div>

          {/* Col 3: Colophon & Back to top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-grid hover:border-sage bg-paper text-xs font-mono text-ink-muted hover:text-ink transition-all shadow-xs"
              aria-label="Back to top of notebook"
            >
              <span>Top of Journal</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[10px] sm:text-[11px] font-mono text-ink-faint md:text-right space-y-0.5">
              <div>DESIGN TOKENS // FRAUNCES + DM SANS</div>
              <div>COMPILED FOR VERCEL &amp; STATIC CLOUD</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Privacy & Legal */}
        <div className="mt-8 pt-5 border-t border-grid/60 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sage-dark shrink-0" />
            <span>Strict Privacy Compliant • Verified Academic &amp; Industrial Records</span>
          </div>
          <div>
            © {new Date().getFullYear()} Abhinandan Roy. All engineering notes recorded.
          </div>
        </div>
      </div>
    </footer>
  );
}
