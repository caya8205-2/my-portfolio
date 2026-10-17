import React, { useState, useMemo } from 'react';
import { TECH_CATEGORIES, TECH_STACK, TechItem } from '../data/portfolioData';
import {
  Search01Icon,
  SourceCodeSquareIcon,
  CpuIcon,
  DatabaseIcon,
  Wrench01Icon,
  GlobalIcon
} from 'hugeicons-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return TECH_STACK.filter((item: TechItem) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryFallbackIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <SourceCodeSquareIcon className="w-4 h-4 text-zinc-300" />;
      case 'frameworks':
        return <GlobalIcon className="w-4 h-4 text-zinc-300" />;
      case 'ai-agents':
        return <CpuIcon className="w-4 h-4 text-zinc-300" />;
      case 'databases':
        return <DatabaseIcon className="w-4 h-4 text-zinc-300" />;
      case 'devops':
        return <Wrench01Icon className="w-4 h-4 text-zinc-300" />;
      default:
        return <SourceCodeSquareIcon className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="stack" className="py-24 border-t border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3 uppercase tracking-wider">
              <span className="text-zinc-200">02</span>
              <span aria-hidden="true" className="text-zinc-600">/</span>
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Battle-tested tools &amp; architectures.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Authentic toolset and official technologies deployed across production systems, native crates, and AI workflows.
          </p>
        </div>

        {/* Interactive Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900/80 border border-zinc-800 rounded-lg">
            {TECH_CATEGORIES.map((cat) => {
              const count = cat.id === 'all' 
                ? TECH_STACK.length 
                : TECH_STACK.filter(i => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap inline-flex items-center gap-2 ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono tabular-nums ${isActive ? 'text-zinc-700' : 'text-zinc-500'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search01Icon className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-zinc-900/60 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-zinc-400 hover:text-zinc-200 font-mono"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Tech Items Grid with Official Brand Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredItems.map((item: TechItem) => (
            <div
              key={item.name}
              className={`p-4 rounded-lg border transition-all duration-150 flex flex-col justify-between ${
                item.highlight
                  ? 'bg-zinc-900/60 border-zinc-700/80 hover:border-zinc-500/80 shadow-sm'
                  : 'bg-zinc-900/25 border-zinc-800/60 hover:border-zinc-700/60'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  {/* Official Brand Logo */}
                  <div className="w-8 h-8 rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-inner">
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={`${item.name} official logo`}
                        className="w-full h-full object-contain filter drop-shadow-sm"
                        loading="lazy"
                        onError={(e) => {
                          // Graceful fallback to category icon if CDN is unreachable
                          const target = e.target as HTMLElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : (
                      getCategoryFallbackIcon(item.category)
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.highlight && (
                        <span className="text-[10px] font-mono font-normal text-zinc-400 bg-zinc-800/80 px-1.5 py-0.2 rounded border border-zinc-700/50">
                          Core
                        </span>
                      )}
                    </h3>
                  </div>
                </div>
                
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  {item.category}
                </span>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {filteredItems.length === 0 && (
          <div className="py-12 text-center border border-dashed border-zinc-800 rounded-xl">
            <p className="text-sm text-zinc-400">
              No matching technologies found for &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-zinc-200 underline hover:text-white"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
