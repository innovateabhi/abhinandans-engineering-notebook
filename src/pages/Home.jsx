import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Projects } from '../sections/Projects';
import { Toolkit } from '../sections/Toolkit';
import { Experience } from '../sections/Experience';
import { Learning } from '../sections/Learning';
import { Contact } from '../sections/Contact';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="relative bg-notebook-grid">
      <Hero />
      <About />
      <Projects />
      <Toolkit />
      <Experience />
      <Learning />
      <Contact />
    </main>
  );
}
