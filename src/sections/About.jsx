import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Terminal, Server, Layers, Cpu, Compass, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 border-t border-grid/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          chapter="CHAPTER 002 // THE HUMAN BEHIND THE CODE"
          title="Engineering systems with curiosity, rigor, and craft."
          subtitle="How an obsession with how things work under the hood evolved into building software, configuring Linux servers, and deploying cloud infrastructure."
          handwrittenNote="curiosity is the best debugger"
          pageNumber="02"
        />

        {/* Editorial Layout: Story & Systems Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-7">
            <div className="notebook-ruled-sheet p-6 sm:p-8 lg:p-9 relative">
              {/* Notebook Entry Docket Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-5 border-b border-grid text-xs font-mono text-ink-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-xs bg-accent"></span>
                  <span className="font-bold text-ink uppercase tracking-wider text-xs">
                    ENTRY 02 // PERSONAL ARCHIVE &amp; INQUIRY
                  </span>
                </div>
                <span className="paper-stamp text-[10px]">DEHRADUN // 2026</span>
              </div>

              {/* Editorial Opening Thought */}
              <p className="font-editorial text-lg sm:text-2xl text-ink leading-snug mb-6 italic">
                "Understanding software means looking past the surface framework to examine the underlying mechanisms."
              </p>

              {/* Exact Line-by-Line Notebook Ruled Text */}
              <div className="notebook-ruled-content text-ink font-sans">
                <p>
                  I am a Computer Science undergraduate at Dev Bhoomi Uttarakhand University (Class of 2028). Driven by first-principles curiosity, I look past surface frameworks to examine how real systems operate under the hood: how HTTP requests traverse reverse proxies, how Linux kernels expose telemetry through virtual filesystems, and how cloud infrastructure scales predictably.
                </p>

                <p>
                  Through a certified industrial internship at Webel (Kolkata) and building software prototypes at <strong>Softrenix Technologies</strong>, I design full-stack SaaS systems, Linux telemetry daemons, and cloud automation workflows. Each entry in this notebook represents a deliberate, handcrafted engineering inquiry.
                </p>
              </div>
            </div>

            {/* Philosophy Cards with Proper Spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-paper-light border border-grid shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold">
                  <Compass className="w-4 h-4 text-accent" />
                  <span>First-Principles Engineering</span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  Building with deep appreciation for systems fundamentals: memory, network protocols, database indexing, and explicit boundaries.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-paper-light border border-grid shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold">
                  <Server className="w-4 h-4 text-sage-dark" />
                  <span>Pragmatic Infrastructure</span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed font-sans">
                  Focusing on reproducible cloud deployments, least-privilege IAM policies, lightweight Linux daemons, and reliable automation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Anatomy Notebook Sheet */}
          <div className="lg:col-span-5 space-y-6">
            <div className="docket-card p-6 sm:p-7 bg-paper-light border border-grid-dark rounded-xl relative shadow-paper">
              {/* Notebook Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                <span className="font-bold text-sage-dark">SYSTEMS FOCUS MATRIX</span>
                <span>VOL // SPEC-2026</span>
              </div>

              {/* Engineering Interests List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-lg bg-paper border border-grid flex items-start gap-3">
                  <Layers className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Full-Stack Application Design</div>
                    <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">Decoupled React interfaces with structured Python/FastAPI backend APIs.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-paper border border-grid flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-sage-dark mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Cloud &amp; FinOps (AWS)</div>
                    <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">Automating resource discovery, CloudWatch telemetry, and idle cost intelligence.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-paper border border-grid flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Linux Systems &amp; Observability</div>
                    <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">Parsing `/proc` filesystems, Nginx reverse proxy tuning, and systemd units.</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-paper border border-grid flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-sage-dark mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Business Process Automation</div>
                    <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">Event-driven orchestration using n8n and secure HMAC webhook verification.</div>
                  </div>
                </div>
              </div>

              {/* Academic Milestone Snippet */}
              <div className="mt-5 pt-4 border-t border-grid text-xs font-mono text-ink-muted flex items-center justify-between">
                <span>DEGREE: B.Tech CSE (2024–2028)</span>
                <span className="text-accent font-semibold">DEHRADUN, INDIA</span>
              </div>
            </div>

            {/* Handwritten Thought Box */}
            <div className="p-4 rounded-xl bg-paper-warm/70 border-l-2 border-accent text-sm font-sans text-ink-muted space-y-1">
              <div className="font-mono text-xs uppercase font-bold text-accent">Personal Note on Growth:</div>
              <p className="italic text-xs sm:text-sm">
                "Real engineering growth happens when you debug a system failure at the kernel or network layer rather than relying on abstract high-level assumptions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
