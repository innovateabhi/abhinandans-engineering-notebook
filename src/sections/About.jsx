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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed font-sans">
            <div className="p-6 rounded-md bg-paper-light border border-grid shadow-xs">
              <p className="font-editorial text-xl sm:text-2xl text-ink leading-snug mb-3">
                "Understanding software means looking past the surface framework to examine the underlying mechanisms."
              </p>
              <p className="text-sm sm:text-base text-ink-muted">
                I'm currently pursuing my B.Tech in Computer Science &amp; Engineering at Dev Bhoomi Uttarakhand University, Dehradun (Class of 2028). My interest in computing extends well beyond writing frontend code or copying templates — I am driven by understanding how entire systems work together: how HTTP requests traverse reverse proxies, how Linux kernels expose hardware telemetry through virtual filesystems, and how cloud infrastructure scales predictably.
              </p>
            </div>

            <p className="text-sm sm:text-base">
              Alongside my academic studies, I completed an intensive certified 40-hour technical internship at Webel (West Bengal Electronics Industry Development Corporation Limited) in Kolkata, where I developed a Linux system monitoring web application and gained hands-on expertise with server deployment, systemd, and firewall configurations.
            </p>

            <p className="text-sm sm:text-base">
              To apply these principles directly to real-world software, I founded <strong>Softrenix Technologies</strong>. Through this initiative, I build custom software prototypes, multi-tenant SaaS architectures, and automated business workflows. Every project in this notebook represents a deliberate engineering inquiry: exploring cost intelligence in AWS, managing high-throughput transactions in restaurant POS systems, or designing event-driven automation pipelines.
            </p>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded bg-paper-warm/60 border border-grid">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold mb-1">
                  <Compass className="w-4 h-4 text-accent" />
                  <span>First-Principles Engineering</span>
                </div>
                <p className="text-xs text-ink-muted leading-normal">
                  Believing that reliable full-stack engineering begins with strong fundamentals: memory, network protocols, database indices, and system architecture.
                </p>
              </div>

              <div className="p-4 rounded bg-paper-warm/60 border border-grid">
                <div className="flex items-center gap-2 text-ink font-mono text-xs font-bold mb-1">
                  <Server className="w-4 h-4 text-sage-dark" />
                  <span>Pragmatic Infrastructure</span>
                </div>
                <p className="text-xs text-ink-muted leading-normal">
                  Focusing on reproducible deployments, least-privilege cloud IAM policies, lightweight Linux daemons, and clear system boundary definitions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Anatomy Notebook Sheet */}
          <div className="lg:col-span-5 space-y-6">
            <div className="docket-card p-6 bg-paper-light border border-grid-dark rounded-md relative shadow-paper">
              {/* Notebook Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono text-ink-muted">
                <span className="font-bold text-sage-dark">SYSTEMS FOCUS MATRIX</span>
                <span>VOL // SPEC-2026</span>
              </div>

              {/* Engineering Interests List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded bg-paper-secondary border border-grid flex items-start gap-3">
                  <Layers className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Full-Stack Application Design</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">Decoupled React interfaces communicating with structured Python/FastAPI backend APIs and relational models.</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-paper-secondary border border-grid flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-sage-dark mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Cloud &amp; FinOps (AWS)</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">Automating resource discovery, tracking CloudWatch telemetry, and analyzing idle infrastructure overhead.</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-paper-secondary border border-grid flex items-start gap-3">
                  <Terminal className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Linux Systems &amp; Observability</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">Reading `/proc`, tuning Nginx reverse proxies, enforcing UFW security, and managing systemd services.</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-paper-secondary border border-grid flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-sage-dark mt-0.5 shrink-0" />
                  <div>
                    <div className="font-bold text-ink">Business Process Automation</div>
                    <div className="text-[11px] text-ink-muted mt-0.5">Event-driven orchestration using n8n, secure HMAC webhook signatures, and data synchronization.</div>
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
            <div className="p-4 rounded bg-paper-warm/70 border-l-2 border-accent text-sm font-sans text-ink-muted space-y-1">
              <div className="font-mono text-xs uppercase font-bold text-accent">Personal Note on Growth:</div>
              <p className="italic">
                "Real engineering growth happens when you debug a system failure at the kernel or network layer rather than relying on abstract high-level assumptions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
