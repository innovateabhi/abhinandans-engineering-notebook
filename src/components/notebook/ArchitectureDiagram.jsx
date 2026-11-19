import React from 'react';
import { Layers, Database, Server, Cpu, ShieldCheck, ArrowRight, Activity, Terminal } from 'lucide-react';

export function ArchitectureDiagram({ slug, title }) {
  if (slug === 'cloud-cost-optimizer') {
    return (
      <div className="blueprint-box p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-grid/80 text-xs font-mono text-ink-muted">
          <span className="font-semibold text-sage-dark flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-accent" /> AWS RESOURCE SCANNER &amp; FINOPS RECOMMENDATION PIPELINE
          </span>
          <span className="text-ink-faint">SPEC // AWS-STS-CLOUDWATCH</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Node 1 */}
          <div className="p-4 bg-paper rounded border border-sage/30 shadow-xs">
            <div className="text-[10px] font-mono uppercase tracking-wider text-sage font-bold mb-1">Source Account</div>
            <div className="font-mono text-sm font-semibold text-ink">AWS Target Account</div>
            <p className="text-xs text-ink-muted mt-1">IAM Scoped Role with STS AssumeRole &amp; Read-Only Policies</p>
            <div className="mt-2 text-[10px] font-mono text-accent">EC2 / EBS / S3</div>
          </div>

          <div className="hidden md:flex justify-center text-sage">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>

          {/* Node 2 */}
          <div className="p-4 bg-paper rounded border border-accent/40 shadow-xs relative">
            <div className="text-[10px] font-mono uppercase tracking-wider text-accent font-bold mb-1">Ingestion Engine</div>
            <div className="font-mono text-sm font-semibold text-ink">Python Scanner (Boto3)</div>
            <p className="text-xs text-ink-muted mt-1">Paginated API queries + CloudWatch 14-day metric percentiles</p>
            <div className="mt-2 text-[10px] font-mono text-ink-muted">Rate-limit backoff handler</div>
          </div>

          <div className="hidden md:flex justify-center text-sage">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>

          {/* Node 3 */}
          <div className="p-4 bg-paper rounded border border-sage/30 shadow-xs md:col-start-4">
            <div className="text-[10px] font-mono uppercase tracking-wider text-sage font-bold mb-1">Analytical Core</div>
            <div className="font-mono text-sm font-semibold text-ink">PostgreSQL &amp; Heuristics</div>
            <p className="text-xs text-ink-muted mt-1">Underutilization rule evaluation (CPU &lt; 5%, unattached volumes)</p>
            <div className="mt-2 text-[10px] font-mono text-sage-dark font-medium">Non-destructive actions</div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>STATUS: Prototyped in local sandbox environments</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'restaurant-pos-saas') {
    return (
      <div className="blueprint-box p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-grid/80 text-xs font-mono text-ink-muted">
          <span className="font-semibold text-sage-dark flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-accent" /> DUAL-FACING TRANSACTIONAL POS &amp; QR ORDERING ROUTING
          </span>
          <span className="text-ink-faint">SPEC // REST-POS-ROUTING</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Column 1: Client Interfaces */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-ink-muted pb-1 border-b border-grid">Client Layer</div>
            <div className="p-3 bg-paper rounded border border-grid">
              <div className="font-mono text-xs font-bold text-ink">Cashier POS Application</div>
              <p className="text-xs text-ink-muted mt-0.5">Rapid counter billing, keyboard shortcuts, receipt generation</p>
            </div>
            <div className="p-3 bg-paper rounded border border-accent/40 bg-accent-tint/30">
              <div className="font-mono text-xs font-bold text-accent-dark">Customer QR Mobile Web</div>
              <p className="text-xs text-ink-muted mt-0.5">Table-specific menu browsing, cart &amp; live order placement</p>
            </div>
          </div>

          {/* Column 2: Backend & Transactions */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-ink-muted pb-1 border-b border-grid">Application Layer</div>
            <div className="p-4 bg-paper rounded border border-sage/40 h-[calc(100%-2rem)] flex flex-col justify-center">
              <div className="font-mono text-xs font-bold text-ink">Python API Gateway</div>
              <p className="text-xs text-ink-muted mt-1">Validates order integrity, handles table state transitions, calculates dynamic taxes &amp; billing tickets</p>
              <div className="mt-3 p-2 bg-paper-secondary rounded text-[11px] font-mono text-ink">
                State: PLACED → KITCHEN → SERVED → BILLED
              </div>
            </div>
          </div>

          {/* Column 3: Storage & Output */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase text-ink-muted pb-1 border-b border-grid">Storage &amp; Stations</div>
            <div className="p-3 bg-paper rounded border border-grid">
              <div className="font-mono text-xs font-bold text-ink">MySQL Relational DB</div>
              <p className="text-xs text-ink-muted mt-0.5">Multi-tenant schema, foreign key cascades, transactional locking</p>
            </div>
            <div className="p-3 bg-paper rounded border border-sage/40 bg-sage-tint/30">
              <div className="font-mono text-xs font-bold text-sage-dark">Kitchen Display System</div>
              <p className="text-xs text-ink-muted mt-0.5">Real-time ticket queue for chefs with elapsed prep timers</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>HOSTING TARGET: Linux VPS with Nginx reverse proxy</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'skilltwin') {
    return (
      <div className="blueprint-box p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-grid/80 text-xs font-mono text-ink-muted">
          <span className="font-semibold text-sage-dark flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-accent" /> COMPETENCY TAXONOMY &amp; GAP ANALYSIS ENGINE
          </span>
          <span className="text-ink-faint">SPEC // FASTAPI-SKILL-TAXONOMY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 bg-paper rounded border border-grid">
            <div className="text-[10px] font-mono uppercase text-sage font-bold mb-1">Input / Client</div>
            <div className="font-mono text-sm font-semibold text-ink">Assessment UI</div>
            <p className="text-xs text-ink-muted mt-1.5">Interactive evaluation prompts, randomized question rubrics, and candidate response collectors.</p>
          </div>

          <div className="p-4 bg-paper rounded border border-accent/40 bg-accent-tint/20">
            <div className="text-[10px] font-mono uppercase text-accent-dark font-bold mb-1">Computation Core</div>
            <div className="font-mono text-sm font-semibold text-ink">FastAPI Scoring Engine</div>
            <p className="text-xs text-ink-muted mt-1.5">Computes weighted proficiency vectors, compares candidate score against target senior benchmarks.</p>
          </div>

          <div className="p-4 bg-paper rounded border border-sage/40">
            <div className="text-[10px] font-mono uppercase text-sage-dark font-bold mb-1">Output / Visualization</div>
            <div className="font-mono text-sm font-semibold text-ink">Radar &amp; Gap Matrix</div>
            <p className="text-xs text-ink-muted mt-1.5">Visual representation of competency gaps with prioritized learning roadmap recommendations.</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>DATA MODEL: PostgreSQL JSONB rubrics + normalized taxonomy relations</span>
          <span className="italic text-ink-faint">Illustrative engineering architecture schema</span>
        </div>
      </div>
    );
  }

  if (slug === 'linux-system-monitoring') {
    return (
      <div className="blueprint-box p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-grid/80 text-xs font-mono text-ink-muted">
          <span className="font-semibold text-sage-dark flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-accent" /> WEBEL INTERNSHIP: LINUX /proc TELEMETRY ARCHITECTURE
          </span>
          <span className="text-ink-faint">VERIFIED // WEBEL 40-HR INTERNSHIP</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          <div className="p-4 bg-paper rounded border border-grid">
            <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1">Kernel Subsystem</div>
            <div className="font-mono text-sm font-semibold text-ink">Linux /proc FS</div>
            <div className="mt-2 text-xs font-mono text-ink-muted space-y-1">
              <div>• /proc/stat (CPU deltas)</div>
              <div>• /proc/meminfo (RAM/Swap)</div>
              <div>• /proc/diskstats &amp; df</div>
            </div>
          </div>

          <div className="p-4 bg-paper rounded border border-sage/40">
            <div className="text-[10px] font-mono uppercase text-sage font-bold mb-1">Daemon Worker</div>
            <div className="font-mono text-sm font-semibold text-ink">Python Collector</div>
            <p className="text-xs text-ink-muted mt-1">Managed via systemd service. Overhead &lt; 1% CPU. Produces telemetry JSON snapshots.</p>
          </div>

          <div className="p-4 bg-paper rounded border border-accent/40">
            <div className="text-[10px] font-mono uppercase text-accent font-bold mb-1">Reverse Proxy</div>
            <div className="font-mono text-sm font-semibold text-ink">Nginx HTTP Server</div>
            <p className="text-xs text-ink-muted mt-1">Secured virtual host with security headers, static asset delivery, and proxy pass.</p>
          </div>

          <div className="p-4 bg-paper rounded border border-sage/40 bg-sage-tint/30">
            <div className="text-[10px] font-mono uppercase text-sage-dark font-bold mb-1">Security Boundary</div>
            <div className="font-mono text-sm font-semibold text-ink">UFW Firewall</div>
            <p className="text-xs text-ink-muted mt-1">Default-deny incoming rule table. Strict ingress whitelisting for SSH &amp; HTTP only.</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
          <span>ORGANIZATION: West Bengal Electronics Industry Development Corp. Ltd. (Webel)</span>
          <span className="text-sage-dark font-semibold">VERIFIED INTERNSHIP PROJECT</span>
        </div>
      </div>
    );
  }

  // Default for lab projects (business automation, enterprise erp)
  return (
    <div className="blueprint-box p-6 sm:p-8 bg-paper-light border border-grid-dark rounded-md">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-grid/80 text-xs font-mono text-ink-muted">
        <span className="font-semibold text-accent flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-accent" /> {title.toUpperCase()} — LAB ROADMAP SPECIFICATION
        </span>
        <span className="text-accent-dark font-bold">PLANNED // LAB EXPERIMENT</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-4 bg-paper rounded border border-grid">
          <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1">Stage 01</div>
          <div className="font-mono text-sm font-semibold text-ink">Architectural Blueprint</div>
          <p className="text-xs text-ink-muted mt-1">Data schemas, bounded context definitions, REST API contracts, and integration protocols.</p>
        </div>

        <div className="p-4 bg-paper rounded border border-accent/40 bg-accent-tint/20">
          <div className="text-[10px] font-mono uppercase text-accent font-bold mb-1">Stage 02 (Active)</div>
          <div className="font-mono text-sm font-semibold text-ink">Sandbox Prototyping</div>
          <p className="text-xs text-ink-muted mt-1">Isolated proof-of-concept testing, webhook replay reliability, and database schema migrations.</p>
        </div>

        <div className="p-4 bg-paper rounded border border-grid">
          <div className="text-[10px] font-mono uppercase text-ink-faint font-bold mb-1">Stage 03 (Future)</div>
          <div className="font-mono text-sm font-semibold text-ink">Modular Implementation</div>
          <p className="text-xs text-ink-muted mt-1">Full-stack module assembly, automated unit/integration test coverage, and staged deployment.</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-ink-muted">
        <span>STATUS: Planned engineering research project</span>
        <span className="italic text-ink-faint">Illustrative engineering roadmap</span>
      </div>
    </div>
  );
}
