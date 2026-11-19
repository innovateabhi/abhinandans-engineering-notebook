import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { NotebookHeader } from './components/notebook/NotebookHeader';
import { NotebookFooter } from './components/notebook/NotebookFooter';
import { NotebookEffects } from './components/animations/NotebookEffects';
import { BackToTop } from './components/ui/BackToTop';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <NotebookEffects />
      <BackToTop />
      <div className="min-h-screen flex flex-col bg-paper text-ink font-sans selection:bg-accent/20">
        <NotebookHeader />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <NotebookFooter />
      </div>
    </BrowserRouter>
  );
}
