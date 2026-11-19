import React from 'react';
import { FileDown, ArrowDown, Terminal, Cpu, Sparkles, BookOpen, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Decorative notebook ruler margin line (desktop only) */}
      <div className="notebook-margin-guide hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Notebook Top Docket Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-6 sm:mb-8 border-b border-grid/80 text-[11px] sm:text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-xs shrink-0"></span>
            <span className="font-bold tracking-widest text-ink uppercase truncate">
              {profile.eyebrow}
            </span>
            <span className="text-grid-dark hidden sm:inline">•</span>
            <span className="text-ink-faint hidden sm:inline">LOG-2026 // DEHRADUN</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px]">
            <span className="px-2 py-0.5 rounded bg-paper-secondary border border-grid text-ink-muted whitespace-nowrap">
              STATUS: {profile.notebookMetadata.status}
            </span>
            <span className="text-ink-faint hidden md:inline">ENTRY 01 OF 07</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Headlines & Editorial Story */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Handwritten Greeting Accent */}
            <div className="flex items-center gap-2">
              <span className="handwritten text-xl sm:text-2xl lg:text-3xl text-accent select-none transform -rotate-1">
                ~ engineering journal volume 01
              </span>
              <svg className="w-8 h-4 text-accent/80 stroke-current fill-none shrink-0" viewBox="0 0 40 20">
                <path d="M 0 10 Q 20 20 35 5" strokeWidth="1.5" strokeDasharray="2 1" />
                <path d="M 30 2 L 36 5 L 34 11" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Oversized Main Heading */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-ink leading-[1.1]">
              {profile.headline}
            </h1>

            {/* Secondary Headline */}
            <p className="font-editorial italic text-lg sm:text-2xl lg:text-3xl text-sage-dark font-normal leading-snug">
              "{profile.secondaryHeadline}"
            </p>

            {/* Main Description */}
            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed font-sans max-w-xl">
              {profile.description}
            </p>

            {/* Supporting Information Cards (Academic & Initiative) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded bg-paper-light border border-grid/80 shadow-xs">
                <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-0.5 tracking-wider">
                  Academic Focus
                </div>
                <div className="font-mono text-xs font-semibold text-ink">
                  B.Tech Computer Science &amp; Engineering
                </div>
                <div className="text-xs text-ink-muted mt-0.5">
                  Dev Bhoomi Uttarakhand University • Class of 2028
                </div>
              </div>

              <div className="p-3.5 rounded bg-paper-light border border-grid/80 shadow-xs">
                <div className="text-[10px] font-mono uppercase text-accent font-bold mb-0.5 tracking-wider">
                  Founder Initiative
                </div>
                <div className="font-mono text-xs font-semibold text-ink">
                  Softrenix Technologies
                </div>
                <div className="text-xs text-ink-muted mt-0.5">
                  Custom software solutions &amp; SaaS prototypes
                </div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded bg-ink hover:bg-ink-light text-paper font-mono text-xs font-semibold tracking-wider transition-all shadow-paper active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ink"
              >
                <BookOpen className="w-4 h-4 text-accent" />
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5 ml-0.5 text-paper/70" />
              </button>

              <a
                href={profile.resumePdfUrl}
                download={profile.resumeFilename}
                className="inline-flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded bg-paper-secondary hover:bg-paper-warm border border-accent/60 text-ink font-mono text-xs font-semibold tracking-wider transition-all shadow-xs active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>

            {/* Privacy Compliance Subtext */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-ink-faint pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-dark shrink-0" />
              <span>Verified ATS &amp; phone-free public documentation.</span>
            </div>
          </div>

          {/* Right Column: Handcrafted Engineering Technical Notebook Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="docket-card p-5 sm:p-7 bg-paper-light border border-grid-dark rounded-md relative shadow-paper-lg">
              {/* Paper Clip Visual Element */}
              <div className="absolute -top-3 right-6 sm:right-8 w-5 sm:w-6 h-10 sm:h-12 border-2 border-sage-dark/70 rounded-full pointer-events-none z-10" />

              {/* Docket Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-[11px] font-mono text-ink-muted">
                <span className="font-bold text-accent">SYSTEM-SCHEMATIC // 01</span>
                <span>VOL: 2024–2028</span>
              </div>

              {/* Technical Core Identity */}
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-mono uppercase text-ink-faint tracking-wider">Primary Core Focus</div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-ink mt-0.5">
                    {profile.primaryIdentity}
                  </div>
                </div>

                {/* Handcrafted Terminal Telemetry Box */}
                <div className="p-3.5 rounded bg-ink text-paper font-mono text-xs space-y-2 border border-ink-light overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-paper/60 pb-1 border-b border-ink-light">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                      <span>sys-terminal: active session</span>
                    </span>
                    <span>bash 5.2</span>
                  </div>
                  <div className="text-sage-light text-[11px]">
                    $ abhi --inspect-stack
                  </div>
                  <div className="text-paper/90 text-[11px] leading-relaxed">
                    [OK] React • Python • AWS Cloud • Linux /proc • PostgreSQL • Docker • CI/CD
                  </div>
                  <div className="text-[10px] text-accent-light pt-1">
                    &gt; Target: Building resilient, production-grade systems.
                  </div>
                </div>

                {/* Core Domains Blueprint */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-mono uppercase text-ink-faint tracking-wider">Active System Vectors</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] font-mono text-ink">
                    <div className="p-2 rounded bg-paper-secondary border border-grid/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                      <span className="truncate">Cloud &amp; FinOps</span>
                    </div>
                    <div className="p-2 rounded bg-paper-secondary border border-grid/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-dark shrink-0"></span>
                      <span className="truncate">Linux Observability</span>
                    </div>
                    <div className="p-2 rounded bg-paper-secondary border border-grid/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                      <span className="truncate">Full-Stack SaaS</span>
                    </div>
                    <div className="p-2 rounded bg-paper-secondary border border-grid/70 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-dark shrink-0"></span>
                      <span className="truncate">Event Workflows</span>
                    </div>
                  </div>
                </div>

                {/* Notebook Handwritten Stamp */}
                <div className="pt-3 border-t border-grid/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="paper-stamp text-[10px]">
                    VERIFIED // ACADEMIC &amp; LAB
                  </div>
                  <div className="handwritten text-base sm:text-lg text-accent select-none">
                    ~ ideas into working systems
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
