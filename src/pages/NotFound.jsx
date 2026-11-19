import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookX } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-24">
      <div className="paper-stamp mb-4">PAGE 404 // MISSING ENTRY</div>
      <BookX className="w-16 h-16 text-accent mb-4" />
      <h1 className="font-editorial text-4xl sm:text-5xl font-semibold text-ink">
        Page Not Found
      </h1>
      <p className="text-ink-muted mt-3 max-w-md font-sans text-sm sm:text-base leading-relaxed">
        The journal sheet you are trying to access does not exist in this volume of The Engineering Notebook.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded bg-ink text-paper font-mono text-xs font-semibold tracking-wider hover:bg-ink-light transition-all shadow-paper"
      >
        <ArrowLeft className="w-4 h-4" /> Return to Engineering Notebook
      </Link>
    </div>
  );
}
