import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { FlashIcon, CpuIcon, DatabaseIcon } from 'hugeicons-react';

export const About: React.FC = () => {
  const principleIcons = [
    <FlashIcon key="flash" className="w-4 h-4 text-zinc-300" />,
    <CpuIcon key="cpu" className="w-4 h-4 text-zinc-300" />,
    <DatabaseIcon key="database" className="w-4 h-4 text-zinc-300" />
  ];

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              <span className="text-zinc-200">01</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Built on first principles,<br />
              deterministic logic &amp; zero fluff.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            I specialize in bridging the divide between low-level performance (Rust, memory efficiency, concurrent streams), robust application architecture (TypeScript, React, Fastify, Prisma), and modern generative AI pipelines (ComfyUI, LoRA fine-tuning, MCP &amp; Hermes agents).
          </p>
        </div>

        {/* 3 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PROFILE_DATA.principles.map((p, index) => (
            <div
              key={p.number}
              className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-7 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center">
                    {principleIcons[index]}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{p.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Standard</span>
                <span className="text-zinc-300">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Biography & Work Narrative Split */}
        <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">Background &amp; Focus</span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Engineering from Yogyakarta to Global Repositories
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm text-zinc-400 leading-relaxed">
              <p>
                I work as a <strong className="text-zinc-200">Software Engineer at Banyumedia Digital</strong>. My work spans durable internal ERP systems with multi-company boundaries, local-first audio tooling, and agentic integrations.
              </p>
              <p>
                When tackling problems, I prioritize reducing runtime friction: preferring SQLite and local caching over bloated server dependencies, writing asynchronous Rust crates to eliminate clunky external subprocesses, and implementing the Model Context Protocol (MCP) so modern AI assistants can reliably interface with application logic.
              </p>
              <p>
                I also contributed a fix to Hermes Agent’s multi-profile gateway routing. A maintainer cherry-picked my five commits into a salvage PR, preserved my authorship, and merged them into <code className="text-zinc-200">main</code>.{" "}
                <a
                  href="https://github.com/NousResearch/hermes-agent/pull/99770#event-30307697843"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-300"
                >
                  View merged PR #99770
                </a>
                .
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
