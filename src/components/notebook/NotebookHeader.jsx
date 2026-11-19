import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/profile';

const navItems = [
  { id: 'intro', label: 'Intro', chapter: '01' },
  { id: 'about', label: 'About', chapter: '02' },
  { id: 'projects', label: 'Projects', chapter: '03' },
  { id: 'toolkit', label: 'Toolkit', chapter: '04' },
  { id: 'experience', label: 'Experience', chapter: '05' },
  { id: 'learning', label: 'Notes', chapter: '06' },
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
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Floating Pill Header matching CloudOptimizer layout */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 pointer-events-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
          <div
            className={`pointer-events-auto h-14 sm:h-16 rounded-full border transition-all duration-300 px-3.5 sm:px-6 flex items-center justify-between backdrop-blur-xl ${
              scrolled
                ? 'border-grid-dark bg-paper-light/95 shadow-paper-lg'
                : 'border-grid/90 bg-paper-light/90 shadow-paper'
            }`}
          >
            {/* Left: Favicon Logo + Title */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 group focus:outline-none cursor-pointer shrink-0"
              onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img
                src="/favicon.svg"
                alt="Abhinandan's Engineering Notebook Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg object-contain shrink-0 shadow-xs group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col justify-center min-w-0">
                <span className="font-editorial text-xs sm:text-sm lg:text-base font-semibold tracking-tight text-ink group-hover:text-accent transition-colors leading-tight max-w-[160px] sm:max-w-none truncate">
                  Abhinandan's Engineering Notebook
                </span>
                <span className="text-[9px] font-mono tracking-wider text-ink-muted uppercase hidden sm:block">
                  Software • Cloud • Systems
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links with Animated Underline */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`group relative h-9 px-2.5 xl:px-3 flex items-center text-xs font-mono font-medium transition-colors cursor-pointer rounded-full ${
                      isActive ? 'text-ink font-semibold' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span className="relative inline-flex items-center">
                      <span className="text-[10px] text-accent font-bold mr-1">{item.chapter}.</span>
                      {item.label}
                      <span
                        className={`pointer-events-none absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full transition-all duration-200 ${
                          isActive
                            ? 'opacity-100 scale-x-100'
                            : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right: Rounded-Full Resume Pill & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <a
                href={profile.resumePdfUrl}
                download={profile.resumeFilename}
                className="inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-3.5 sm:px-4 rounded-full border border-accent/80 bg-accent hover:bg-accent-dark text-paper text-xs font-mono font-semibold transition-all shadow-xs active:translate-y-0.5 cursor-pointer"
                title="Download verified phone-free resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">Resume PDF</span>
                <span className="sm:hidden text-[11px]">Resume</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-grid text-ink hover:bg-paper-warm transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4 text-accent" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-ink/30 backdrop-blur-xs transition-opacity duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-3 right-3 bottom-3 w-[calc(100%-24px)] max-w-xs bg-paper-light border border-grid rounded-2xl shadow-paper-lift flex flex-col justify-between p-5 animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-grid text-xs font-mono">
                <div className="flex items-center gap-2">
                  <img src="/favicon.svg" alt="Logo" className="w-6 h-6 object-contain" />
                  <span className="font-bold text-ink">TABLE OF CONTENTS</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-7 h-7 flex items-center justify-center rounded-full text-ink-muted hover:text-ink focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = isHomePage && activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left font-mono text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-paper-secondary font-bold text-ink border border-grid'
                          : 'text-ink-muted hover:bg-paper-warm/80 hover:text-ink'
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
            </div>

            <div className="pt-4 border-t border-grid space-y-2.5 font-mono text-xs">
              <a
                href={profile.resumePdfUrl}
                download={profile.resumeFilename}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-accent text-paper font-semibold shadow-xs cursor-pointer"
              >
                <FileDown className="w-4 h-4" /> Download Resume (PDF)
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-full bg-paper-secondary border border-grid text-ink hover:text-accent transition-colors cursor-pointer"
              >
                <span>Write Me an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <div className="text-[10px] text-ink-faint text-center pt-1">
                ABHINANDAN'S ENGINEERING NOTEBOOK
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
