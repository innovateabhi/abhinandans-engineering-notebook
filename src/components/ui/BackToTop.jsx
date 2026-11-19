import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }

      if (currentScroll > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG circular calculations matching reference
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 ease-out select-none ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top of notebook"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-paper-light border border-grid-dark shadow-paper hover:shadow-paper-lift hover:border-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-paper active:scale-95"
      >
        {/* Animated Circular Progress Ring */}
        <svg
          className="w-12 h-12 sm:w-14 sm:h-14 transform -rotate-90 pointer-events-none absolute inset-0"
          viewBox="0 0 48 48"
        >
          {/* Background circle track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#D8D8CC"
            strokeWidth="3"
            fill="transparent"
            className="transition-colors group-hover:stroke-grid-dark/60"
          />
          {/* Foreground progress circle */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#C57550"
            strokeWidth="3.2"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Center Arrow Icon */}
        <div className="relative z-10 flex items-center justify-center text-ink group-hover:text-accent transition-colors duration-200">
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] transform group-hover:-translate-y-0.5 transition-transform duration-200" />
        </div>

        {/* Floating Tooltip Pill */}
        <span className="absolute -top-8 right-0 px-2 py-0.5 rounded bg-ink text-paper text-[10px] font-mono font-medium tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-paper pointer-events-none">
          TOP {Math.round(scrollProgress)}%
        </span>
      </button>
    </div>
  );
}
