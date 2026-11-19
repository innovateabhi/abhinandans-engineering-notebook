import React from 'react';

export function StatusBadge({ status, statusType = 'dev' }) {
  if (statusType === 'internship') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase border border-sage-dark/40 bg-sage-tint/60 text-ink rounded shadow-xs rotate-[-0.5deg]">
        <span className="w-1.5 h-1.5 rounded-full bg-sage-dark"></span>
        {status}
      </span>
    );
  }

  if (statusType === 'lab') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase border border-accent/40 bg-accent-tint/70 text-accent-dark rounded shadow-xs rotate-[0.5deg]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        {status}
      </span>
    );
  }

  // Default 'dev'
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold tracking-wider uppercase border border-ink/20 bg-paper-secondary text-ink rounded shadow-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
      {status}
    </span>
  );
}
