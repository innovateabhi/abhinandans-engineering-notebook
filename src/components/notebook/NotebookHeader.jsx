import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, ArrowUpRight, BookOpen } from 'lucide-react';
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

      const scrollPosition = window.scrollY + 200;
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-paper/95 backdrop-blur-md shadow-paper border-b border-grid/90'
            : 'bg-paper/90 border-b border-grid/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Monogram / Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded border border-sage-dark/50 bg-paper-secondary flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-ink group-hover:border-accent group-hover:text-accent transition-colors shadow-xs">
              AR
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-sm sm:text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors leading-tight">
                Abhinandan Roy
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-ink-muted uppercase">
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
                  className={`relative px-2.5 py-1.5 text-xs font-mono transition-all rounded ${
                    isActive
                      ? 'text-ink font-semibold bg-paper-secondary border border-grid'
                      : 'text-ink-muted hover:text-ink hover:bg-paper-warm/60'
                  }`}
                >
                  <span className="text-[10px] text-accent font-bold mr-1">{item.chapter}.</span>
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full" />
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded border border-accent/80 bg-accent/10 hover:bg-accent/20 text-accent-dark text-xs font-mono font-semibold transition-all shadow-xs active:translate-y-0.5"
              title="Download verified phone-free resume PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume PDF</span>
              <span className="sm:hidden text-[11px]">Resume</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded border border-grid text-ink hover:bg-paper-warm transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-ink/30 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-full sm:max-w-xs bg-paper border-l border-grid shadow-paper-lift flex flex-col justify-between p-5 animate-in slide-in-from-right duration-250">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono">
                <span className="font-bold text-accent">TABLE OF CONTENTS</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded text-ink-muted hover:text-ink focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chapter Links */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = isHomePage && activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-left font-mono text-xs transition-colors ${
                        isActive
                          ? 'bg-paper-secondary font-bold text-ink border border-grid'
                          : 'text-ink-muted hover:bg-paper-warm/80 hover:text-ink'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-accent font-bold">CH {item.chapter}</span>
                        <span>{item.label}</span>
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-grid space-y-3 font-mono text-xs">
              <a
                href={profile.resumePdfUrl}
                download={profile.resumeFilename}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded bg-accent text-paper font-semibold shadow-xs"
              >
                <FileDown className="w-4 h-4" /> Download Resume (PDF)
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded bg-paper-secondary border border-grid text-ink hover:text-accent transition-colors"
              >
                <span>Write Me an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <div className="text-[10px] text-ink-faint text-center pt-1">
                VOL // 2026 • THE ENGINEERING NOTEBOOK
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
