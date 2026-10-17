import React, { useState, useEffect } from 'react';
import { ArrowDown01Icon, ArrowUpRight01Icon, GithubIcon, Mail01Icon, Location01Icon, Clock01Icon, SourceCodeSquareIcon, CheckmarkBadge01Icon } from 'hugeicons-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Yogyakarta (Asia/Jakarta, UTC+7)
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setLocalTime(`${formatted} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient grid (monochrome hairline) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Swiss Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column: Typographic Pitch & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Clean Kicker */}
              <div className="flex items-center gap-2.5 text-xs text-zinc-400 mb-6 font-medium">
                <span className="text-zinc-200">00</span>
                <span aria-hidden="true" className="text-zinc-600">/</span>
                <span className="tracking-wide uppercase text-zinc-300">Software Engineer — R&amp;D</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-zinc-400">{PROFILE_DATA.company}</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] font-bold tracking-tight text-white mb-6 [text-wrap:balance]">
                {PROFILE_DATA.bioHeadline}
              </h1>

              {/* Lead Body Prose */}
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl">
                {PROFILE_DATA.bioSub}
              </p>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={onExploreClick}
                  className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-all duration-150 inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore Selected Works</span>
                  <ArrowDown01Icon className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onContactClick}
                  className="px-5 py-2.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Initiate Contact</span>
                  <ArrowUpRight01Icon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Context & Location */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 text-zinc-300">
                <Location01Icon className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PROFILE_DATA.location}</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5">
                <Clock01Icon className="w-3.5 h-3.5 text-zinc-400" />
                <span className="font-mono tabular-nums text-zinc-300">{localTime || '15:28:00 WIB'}</span>
              </div>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Mail01Icon className="w-3.5 h-3.5" />
                <span>{PROFILE_DATA.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Engineer Architecture Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-zinc-900/40 border border-zinc-800/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm relative group hover:border-zinc-700 transition-colors">
              {/* Header inside card */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <SourceCodeSquareIcon className="w-4 h-4 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-300 font-medium">engineering.spec</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <CheckmarkBadge01Icon className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Status Items */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-1">Current Research &amp; Role</div>
                    <div className="text-sm font-semibold text-zinc-100">{PROFILE_DATA.title}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">Focusing on high-throughput media engines, local-first SQLite architectures, and agentic workflows.</div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-1">Core Architecture Stacks</div>
                    <div className="flex flex-wrap gap-1.5 text-xs font-mono text-zinc-300">
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50 text-white font-medium">TypeScript (Primary)</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">Rust (Tokio, Rayon)</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">Python 3 &amp; GenAI</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">ComfyUI &amp; LoRA</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">MCP &amp; Hermes</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">Tauri &amp; Fastify</span>
                      <span className="px-2 py-1 bg-zinc-800/60 rounded border border-zinc-700/50">Prisma / SQLite / PG</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider mb-1">Featured Production Systems</div>
                    <div className="text-xs text-zinc-300 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-zinc-100">Noctune &amp; innertube-rs</span>
                        <span className="text-[10px] font-mono text-zinc-500">Audio &amp; Rust Crate</span>
                      </div>
                      <div className="flex items-center justify-between pt-1.5 border-t border-zinc-900">
                        <span className="font-semibold text-zinc-100">ERP Prime &amp; AVPull</span>
                        <span className="text-[10px] font-mono text-zinc-500">Enterprise &amp; CLI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer inside card */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Availability: Open to select R&amp;D roles</span>
                <span className="text-zinc-300 font-medium">Yogyakarta</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metrics Strip (Full-width row below split) */}
        <div className="mt-14 pt-10 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono tabular-nums mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-xs text-zinc-400 mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
