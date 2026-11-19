import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ArchitectureDiagram } from '../components/notebook/ArchitectureDiagram';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  FileText,
  Calendar,
  Building,
  Target
} from 'lucide-react';

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <div className="paper-stamp mb-4">SPECIFICATION NOT FOUND</div>
        <h1 className="font-editorial text-4xl text-ink font-semibold">Project Case Study Missing</h1>
        <p className="text-ink-muted mt-2 max-w-md font-sans">
          The requested engineering notebook entry could not be located in this volume.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-ink text-paper font-mono text-xs"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Engineering Notebook
        </Link>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const cs = project.caseStudy;

  return (
    <article className="pt-24 sm:pt-32 pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-grid text-xs font-mono text-ink-muted">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-ink hover:text-accent font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Notebook Index
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-ink-faint">DOCKET // {project.id} OF 06</span>
            <StatusBadge status={project.status} statusType={project.statusType} />
          </div>
        </div>

        {/* Project Header Docket */}
        <div className="docket-card p-6 sm:p-10 bg-paper-light border border-grid-dark rounded-md relative shadow-paper mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-2">
            CASE STUDY // SPECIFICATION 0{project.id}
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold text-ink leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-editorial italic text-lg sm:text-2xl text-sage-dark font-normal mt-2">
              "{project.subtitle}"
            </p>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-grid text-xs font-mono">
            <div>
              <div className="text-ink-faint uppercase text-[10px]">Category</div>
              <div className="font-bold text-ink mt-0.5">{project.category}</div>
            </div>
            <div>
              <div className="text-ink-faint uppercase text-[10px]">Timeline</div>
              <div className="font-bold text-ink mt-0.5">{project.timeline}</div>
            </div>
            <div>
              <div className="text-ink-faint uppercase text-[10px]">My Role</div>
              <div className="font-bold text-ink mt-0.5">{cs.myRole.split('.')[0]}</div>
            </div>
            <div>
              <div className="text-ink-faint uppercase text-[10px]">Verification</div>
              <div className="font-bold text-sage-dark mt-0.5">
                {project.statusType === 'internship' ? 'Certified by Webel' : 'Architecture Verified'}
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 pt-4 border-t border-grid/60 flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] font-mono text-ink-faint mr-2">Core Tech:</span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-paper-secondary border border-grid text-xs font-mono text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Sections */}
        <div className="space-y-12">
          {/* Section: Overview */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-grid text-xs font-mono text-ink-muted uppercase tracking-wider">
              <span className="w-2 h-2 bg-accent rounded-xs"></span>
              <span className="font-bold">01 // Architectural Overview</span>
            </div>
            <p className="text-base sm:text-lg text-ink-muted font-sans leading-relaxed">
              {cs.overview}
            </p>
          </section>

          {/* Section: Problem Statement & Objectives */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-6 rounded bg-paper-light border border-grid">
              <div className="text-xs font-mono text-accent font-bold uppercase mb-2">
                The Problem Statement
              </div>
              <p className="text-sm font-sans text-ink-muted leading-relaxed">
                {cs.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded bg-paper-light border border-grid">
              <div className="text-xs font-mono text-sage-dark font-bold uppercase mb-2">
                Engineering Objectives
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-ink-muted">
                {cs.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Meaningful System Architecture Diagram */}
          <section className="space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-grid text-xs font-mono text-ink-muted uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-dark rounded-xs"></span>
                <span className="font-bold">02 // System Architecture &amp; Data Flow</span>
              </div>
              <span className="text-ink-faint">ILLUSTRATIVE ENGINEERING SPEC</span>
            </div>

            <p className="text-sm font-sans text-ink-muted">
              {cs.systemArchitecture.description}
            </p>

            {/* Architecture SVG diagram component */}
            <ArchitectureDiagram slug={project.slug} title={project.title} />

            {/* Architectural Components Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {cs.systemArchitecture.components.map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded bg-paper-light border border-grid text-xs font-mono">
                  <div className="font-bold text-ink text-xs">{comp.name}</div>
                  <div className="text-ink-muted mt-1 font-sans">{comp.role}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Implementation Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-grid text-xs font-mono text-ink-muted uppercase tracking-wider">
              <span className="w-2 h-2 bg-accent rounded-xs"></span>
              <span className="font-bold">03 // Implementation Details</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {cs.implementationDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-paper-light border border-grid flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded bg-paper-secondary border border-grid flex items-center justify-center font-mono text-[10px] font-bold text-accent shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-sans text-ink-muted leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Engineering Challenges & Lessons Learned */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded bg-paper-light border border-accent/40 bg-accent-tint/10 space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-accent flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Engineering Challenges
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-ink-muted">
                {cs.engineeringChallenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded bg-paper-light border border-sage/40 bg-sage-tint/20 space-y-3">
              <div className="text-xs font-mono font-bold uppercase text-sage-dark flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Lessons Learned &amp; Retrospective
              </div>
              <ul className="space-y-2 text-xs sm:text-sm font-sans text-ink-muted">
                {cs.lessonsLearned.map((ll, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sage-dark font-bold">•</span>
                    <span>{ll}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Current Status & Transparent Disclaimer */}
          <section className="p-6 rounded bg-paper-warm/80 border border-grid space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-ink-muted">
              <span className="font-bold text-ink uppercase">Current Status &amp; Integrity Disclaimer</span>
              <StatusBadge status={project.status} statusType={project.statusType} />
            </div>
            <p className="text-sm font-sans text-ink-muted leading-relaxed">
              {cs.currentStatus}
            </p>
            {cs.disclaimer && (
              <p className="text-xs font-mono text-ink-faint italic pt-1 border-t border-grid/60">
                Note: {cs.disclaimer}
              </p>
            )}
          </section>
        </div>

        {/* Bottom Pagination: Previous / Next Project */}
        <div className="mt-16 pt-8 border-t border-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="p-4 rounded bg-paper-light hover:bg-paper-warm border border-grid transition-all group flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono text-ink-faint flex items-center gap-1">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> PREVIOUS SPECIFICATION
              </span>
              <span className="font-editorial text-lg font-semibold text-ink group-hover:text-accent transition-colors mt-1">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="p-4 rounded bg-paper-light hover:bg-paper-warm border border-grid transition-all group flex flex-col justify-between sm:text-right"
            >
              <span className="text-[11px] font-mono text-ink-faint flex items-center justify-start sm:justify-end gap-1">
                NEXT SPECIFICATION <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="font-editorial text-lg font-semibold text-ink group-hover:text-accent transition-colors mt-1">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  );
}
