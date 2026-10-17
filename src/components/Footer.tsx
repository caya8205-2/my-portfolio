import React from 'react';
import { ArrowUp01Icon, GithubIcon } from 'hugeicons-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 text-zinc-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-zinc-300 font-bold uppercase tracking-wider">
            {PROFILE_DATA.name}
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Designed &amp; Built in {PROFILE_DATA.location}</span>
        </div>

        {/* Center / Right actions */}
        <div className="flex items-center gap-6">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp01Icon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
