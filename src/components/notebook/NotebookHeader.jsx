import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, BookMarked, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

const navItems = [
  { id: 'intro', label: 'Intro', chapter: '01' },
  { id: 'about', label: 'About', chapter: '02' },
  { id: 'projects', label: 'Projects', chapter: '03' },
  { id: 'toolkit', label: 'Toolkit', chapter: '04' },
  { id: 'experience', label: 'Experience', chapter: '05' },
  { id: 'learning', label: 'Learning & Notes', chapter: '06' },
  { id: 'contact', label: 'Contact', chapter: '07' },
];

export function NotebookHeader() {
  const [activeSection, setActiveSection] = useState('intro');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/95 backdrop-blur-md shadow-paper border-b border-grid'
          : 'bg-paper/85 border-b border-grid/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Monogram / Brand Identity */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded border border-sage/60 bg-paper-secondary flex items-center justify-center font-mono font-bold text-sm text-ink group-hover:border-accent group-hover:text-accent transition-colors shadow-xs">
            AR
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-base sm:text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
              Abhinandan Roy
            </span>
            <span className="text-[10px] font-mono tracking-wider text-ink-muted uppercase">
              The Engineering Notebook
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-1.5 text-xs font-mono transition-all rounded ${
                  isActive
                    ? 'text-ink font-semibold bg-paper-secondary border border-grid'
                    : 'text-ink-muted hover:text-ink hover:bg-paper-warm/50'
                }`}
              >
                <span className="text-[10px] text-accent font-bold mr-1">{item.chapter}.</span>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions: Download Resume & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.resumePdfUrl}
            download={profile.resumeFilename}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded border border-accent bg-accent/10 hover:bg-accent/20 text-accent-dark text-xs font-mono font-semibold transition-all shadow-xs active:translate-y-0.5"
            title="Download verified phone-free resume PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-grid text-ink-muted hover:text-ink focus:outline-none focus:ring-2 focus:ring-sage"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-paper border-b border-grid px-4 pt-3 pb-6 shadow-paper-lg animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-mono uppercase tracking-wider text-ink-faint pb-2 mb-2 border-b border-grid/60">
            Notebook Table of Contents
          </div>
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded text-left font-mono text-xs ${
                    isActive
                      ? 'bg-paper-secondary font-bold text-ink border border-grid'
                      : 'text-ink-muted hover:bg-paper-warm/60'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-accent font-bold">CH {item.chapter}</span>
                    <span>{item.label}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-grid/60 flex items-center justify-between text-xs font-mono text-ink-muted">
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline flex items-center gap-1"
            >
              Write Me an Email <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-ink-faint">VOL // 2026</span>
          </div>
        </div>
      )}
    </header>
  );
}
