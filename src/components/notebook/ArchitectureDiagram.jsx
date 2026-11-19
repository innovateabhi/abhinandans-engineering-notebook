import React from 'react';
import { Layers, Database, Server, Cpu, ArrowRight, ArrowDown, Activity, Terminal } from 'lucide-react';

export function ArchitectureDiagram({ slug, title }) {
  if (slug === 'cloud-cost-optimizer') {
    return (
      <div className="p-4 sm:p-8 lg:p-10 bg-paper-light border border-grid-dark rounded-2xl shadow-paper relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-accent shrink-0" />
            <span className="font-bold text-ink uppercase tracking-wider text-xs sm:text-sm">
              AWS RESOURCE SCANNER &amp; FINOPS PIPELINE
            </span>
          </div>
          <span className="paper-stamp text-[10px]">SPEC // AWS-STS-CLOUDWATCH</span>
        </div>

        {/* 3-Stage Pipeline with Connector Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
          {/* Node 1 */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-sage/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-sage font-bold mb-1.5">
                01 // Source Target
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">
                AWS Target Account
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Scoped IAM Role with STS AssumeRole &amp; read-only discovery policies for EC2, EBS, and S3 resources.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-[11px] font-mono text-accent">
              EC2 • EBS • CloudWatch
            </div>
          </div>

          {/* Node 2 */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-accent/40 shadow-xs flex flex-col justify-between relative">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold mb-1.5">
                02 // Ingestion Engine
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">
                Python Scanner (Boto3)
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Paginated AWS API queries with exponential backoff and 14-day CloudWatch percentile metric aggregation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-[11px] font-mono text-ink-muted">
              Rate-limit backoff handler
            </div>
          </div>

          {/* Node 3 */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-sage/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-sage-dark font-bold mb-1.5">
                03 // Analytical Core
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">
                PostgreSQL &amp; Heuristics
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Rule engine evaluating underutilization thresholds (CPU &lt; 5%, idle storage) producing non-destructive recommendations.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-[11px] font-mono text-sage-dark font-semibold">
              Non-destructive recommendations
            </div>
          </div>
        </div>

        {/* Diagram Footnote */}
        <div className="mt-8 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>STATUS: Prototyped in local sandbox environments</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'restaurant-pos-saas') {
    return (
      <div className="p-4 sm:p-8 lg:p-10 bg-paper-light border border-grid-dark rounded-2xl shadow-paper relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent shrink-0" />
            <span className="font-bold text-ink uppercase tracking-wider text-xs sm:text-sm">
              DUAL-FACING TRANSACTIONAL POS &amp; QR ROUTING
            </span>
          </div>
          <span className="paper-stamp text-[10px]">SPEC // REST-POS-ROUTING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Client Interfaces */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-2 pb-1 border-b border-grid">
                Client Layer
              </div>
              <div className="space-y-3 mt-3">
                <div className="p-3 bg-paper-light rounded-lg border border-grid">
                  <div className="font-mono text-xs font-bold text-ink">Cashier POS Application</div>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">Counter billing, keyboard navigation, instant receipt generation.</p>
                </div>
                <div className="p-3 bg-paper-light rounded-lg border border-accent/40 bg-accent-tint/30">
                  <div className="font-mono text-xs font-bold text-accent-dark">Customer QR Mobile Client</div>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">Table menu browsing, cart persistence, live order placement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Backend & Transactions */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-sage/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-sage font-bold mb-2 pb-1 border-b border-grid">
                Application &amp; Gateway
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mt-3 mb-2">
                Python API Service
              </div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Validates order payloads, computes table session state, calculates dynamic tax/discounts, and coordinates transactional locking.
              </p>
            </div>
            <div className="mt-4 p-2.5 bg-paper-secondary rounded-lg text-xs font-mono text-ink">
              State: PLACED → KITCHEN → SERVED → BILLED
            </div>
          </div>

          {/* Column 3: Storage & Stations */}
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-2 pb-1 border-b border-grid">
                Persistence &amp; Display
              </div>
              <div className="space-y-3 mt-3">
                <div className="p-3 bg-paper-light rounded-lg border border-grid">
                  <div className="font-mono text-xs font-bold text-ink">MySQL Relational DB</div>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">Multi-tenant schema, foreign key cascades, order sequencing.</p>
                </div>
                <div className="p-3 bg-paper-light rounded-lg border border-sage/40 bg-sage-tint/30">
                  <div className="font-mono text-xs font-bold text-sage-dark">Kitchen Display System</div>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">Real-time queue ticket view with elapsed prep counters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>HOSTING TARGET: Linux VPS with Nginx reverse proxy</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'skilltwin') {
    return (
      <div className="p-4 sm:p-8 lg:p-10 bg-paper-light border border-grid-dark rounded-2xl shadow-paper relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent shrink-0" />
            <span className="font-bold text-ink uppercase tracking-wider text-xs sm:text-sm">
              COMPETENCY TAXONOMY &amp; GAP ENGINE
            </span>
          </div>
          <span className="paper-stamp text-[10px]">SPEC // FASTAPI-SKILL-TAXONOMY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-sage font-bold mb-1.5">01 // Assessment Input</div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">Candidate Evaluation Client</div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Randomized question sets, interactive assessment prompts, and response payload collection.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-ink-faint">
              React SPA Interface
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-accent/40 bg-accent-tint/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-accent-dark font-bold mb-1.5">02 // Scoring Core</div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">FastAPI Scoring Engine</div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Computes weighted proficiency vectors and determines gap vectors against role senior benchmarks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-accent">
              FastAPI • Pydantic Models
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-paper rounded-xl border border-sage/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-sage-dark font-bold mb-1.5">03 // Visual Output</div>
              <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">Gap Matrix &amp; Radar</div>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Multi-dimensional visualization of candidate competencies with prioritized learning roadmaps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-sage-dark font-semibold">
              Radar Graph &amp; Gap Matrix
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>DATA MODEL: PostgreSQL JSONB rubrics + normalized taxonomy relations</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'linux-system-monitoring') {
    return (
      <div className="p-4 sm:p-8 lg:p-10 bg-paper-light border border-grid-dark rounded-2xl shadow-paper relative">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent shrink-0" />
            <span className="font-bold text-ink uppercase tracking-wider text-xs sm:text-sm">
              WEBEL INTERNSHIP: LINUX /proc TELEMETRY SUITE
            </span>
          </div>
          <span className="paper-stamp text-[10px]">VERIFIED // WEBEL 40-HR INTERNSHIP</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          <div className="p-5 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1.5">Kernel Interface</div>
              <div className="font-mono text-sm font-bold text-ink mb-2">Linux /proc FS</div>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                Interrogates `/proc/stat`, `/proc/meminfo`, and `/proc/diskstats` for live CPU and RAM metrics without sub-process fork overhead.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-grid/60 text-[11px] font-mono text-ink-faint">
              Virtual Filesystem
            </div>
          </div>

          <div className="p-5 bg-paper rounded-xl border border-sage/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-sage font-bold mb-1.5">Background Daemon</div>
              <div className="font-mono text-sm font-bold text-ink mb-2">Python Collector</div>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                Managed via systemd service units. Keeps overhead under 1% CPU while producing real-time JSON snapshots.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-grid/60 text-[11px] font-mono text-sage-dark font-semibold">
              systemd Managed
            </div>
          </div>

          <div className="p-5 bg-paper rounded-xl border border-accent/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-accent font-bold mb-1.5">Web Server</div>
              <div className="font-mono text-sm font-bold text-ink mb-2">Nginx Reverse Proxy</div>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                Configured virtual host with security headers, static asset caching, and HTTP reverse proxy pass.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-grid/60 text-[11px] font-mono text-accent">
              Nginx Virtual Host
            </div>
          </div>

          <div className="p-5 bg-paper rounded-xl border border-sage/40 bg-sage-tint/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase text-sage-dark font-bold mb-1.5">Security Gate</div>
              <div className="font-mono text-sm font-bold text-ink mb-2">UFW Firewall</div>
              <p className="text-xs text-ink-muted leading-relaxed font-sans">
                Default-deny incoming rule table. Strict ingress whitelisting for SSH and web management traffic only.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-grid/60 text-[11px] font-mono text-sage-dark font-semibold">
              Port Filtering Active
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>ORGANIZATION: West Bengal Electronics Industry Development Corp. Ltd. (Webel)</span>
          <span className="text-sage-dark font-semibold">VERIFIED INDUSTRIAL INTERNSHIP</span>
        </div>
      </div>
    );
  }

  // Default for lab projects (business automation, enterprise erp)
  return (
    <div className="p-4 sm:p-8 lg:p-10 bg-paper-light border border-grid-dark rounded-2xl shadow-paper relative">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-grid text-xs font-mono text-ink-muted">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-accent shrink-0" />
          <span className="font-bold text-accent uppercase tracking-wider text-xs sm:text-sm">
            {title.toUpperCase()} // LAB ROADMAP SPECIFICATION
          </span>
        </div>
        <span className="paper-stamp-accent text-[10px]">PLANNED // LAB ROADMAP</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="p-5 sm:p-6 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1.5">Stage 01</div>
            <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">Architectural Blueprint</div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
              Domain data schemas, bounded context definitions, REST API contracts, and integration specs.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-ink-faint">
            Schema Specification
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-paper rounded-xl border border-accent/40 bg-accent-tint/10 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-accent font-bold mb-1.5">Stage 02 (Active)</div>
            <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">Sandbox Prototyping</div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
              Isolated proof-of-concept testing, webhook replay reliability, and database migration checks.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-accent">
            Sandbox Prototyping
          </div>
        </div>

        <div className="p-5 sm:p-6 bg-paper rounded-xl border border-grid shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1.5">Stage 03 (Future)</div>
            <div className="font-mono text-sm sm:text-base font-bold text-ink mb-2">Modular Assembly</div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
              Full-stack module assembly, automated unit/integration test coverage, and staged deployment.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-grid/60 text-xs font-mono text-ink-faint">
            Production Hardening
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
        <span>STATUS: Planned engineering research project</span>
        <span className="italic text-ink-faint">Illustrative engineering roadmap</span>
      </div>
    </div>
  );
}
