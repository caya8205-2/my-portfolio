import React, { useState, useMemo } from 'react';
import { PROJECTS, Project, ProjectCategory } from '../data/portfolioData';
import { ArrowUpRight01Icon, BookOpen01Icon, LinkSquare02Icon, GithubIcon } from 'hugeicons-react';

interface ProjectsBentoProps {
  onOpenCaseStudy: (slug: string) => void;
}

const CATEGORY_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai-agents', label: 'AI & Agents' },
  { id: 'systems-rust', label: 'Systems & Rust' },
  { id: 'web-apps', label: 'Web & Enterprise' },
  { id: 'cli-tools', label: 'CLI & Utilities' }
];

export const ProjectsBento: React.FC<ProjectsBentoProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              <span className="text-zinc-200">03</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Production systems, crates &amp; agentic tools.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Click on any project to inspect its architecture, browse interactive screenshots, or inspect the source repositories.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-lg w-fit mb-10 overflow-x-auto max-w-full">
          {CATEGORY_TABS.map((tab) => {
            const count = tab.id === 'all' 
              ? PROJECTS.length 
              : PROJECTS.filter(p => p.category === tab.id).length;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono tabular-nums ${isActive ? 'text-zinc-700' : 'text-zinc-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project: Project) => {
            // Determine grid spans for Bento effect
            let colSpan = 'lg:col-span-4'; // standard
            if (project.bentoSpan === 'hero') {
              colSpan = 'lg:col-span-8';
            } else if (project.bentoSpan === 'wide') {
              colSpan = 'lg:col-span-6';
            }

            return (
              <div
                key={project.id}
                onClick={(event) => {
                  if (!project.caseStudy || (event.target as HTMLElement).closest('a, button')) return;
                  onOpenCaseStudy(project.caseStudy);
                }}
                className={`${colSpan} bg-zinc-900/30 border border-zinc-800/80 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group ${project.caseStudy ? 'cursor-pointer' : ''}`}
              >
                {/* Media Preview (if available) */}
                {project.previewImage && (
                  <div className="relative w-full aspect-[16/9] bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                    <img
                      src={project.previewImage}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                      <span>{project.categoryLabel}</span>
                      {project.metrics && (
                        <span className="text-zinc-400 bg-zinc-950/70 px-2 py-0.5 rounded border border-zinc-800 backdrop-blur-sm">
                          {project.metrics.value}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header info */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-zinc-400 font-semibold">{project.num}</span>
                        <h3 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors tracking-tight">
                          {project.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-zinc-400 block">{project.year}</span>
                      </div>
                    </div>

                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 mb-4 font-mono">
                      {project.isFeatured ? (
                        <span className="text-zinc-200 font-semibold bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/60">
                          {project.featuredLabel ?? 'Featured Production System'}
                        </span>
                      ) : (
                        <span>{project.status}</span>
                      )}
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{project.categoryLabel}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    {/* Tags (Unboxed with subtle dividers) */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-6 text-[11px] text-zinc-400 font-mono">
                      {project.tags.slice(0, 5).map((t, i) => (
                        <span key={t} className="bg-zinc-800/40 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 5 && (
                        <span className="text-zinc-400">+{project.tags.length - 5} more</span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {project.caseStudy && (
                        <button
                          onClick={() => onOpenCaseStudy(project.caseStudy!)}
                          className="px-3 py-1.5 text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors inline-flex items-center gap-1.5 shadow-sm"
                        >
                          <BookOpen01Icon className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          <LinkSquare02Icon className="w-3.5 h-3.5" />
                          <span>Live Site</span>
                        </a>
                      )}
                      {project.links.crates && (
                        <a
                          href={project.links.crates}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          <LinkSquare02Icon className="w-3.5 h-3.5" />
                          <span>Crates</span>
                        </a>
                      )}
                      {project.links.npm && (
                        <a
                          href={project.links.npm}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          <LinkSquare02Icon className="w-3.5 h-3.5" />
                          <span>npm</span>
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors inline-flex items-center gap-1"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
