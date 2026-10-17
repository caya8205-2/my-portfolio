import React, { useState, useEffect } from 'react';
import { CASE_STUDIES, Screenshot, Showcase } from '../data/portfolioData';
import { Cancel01Icon, LinkSquare02Icon, Maximize01Icon } from 'hugeicons-react';

interface CaseStudyModalProps {
  slug: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ slug, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<Screenshot | null>(null);

  const study = slug ? CASE_STUDIES[slug] : null;

  // Handle escape key and body scroll lock
  useEffect(() => {
    if (!study) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, lightboxImage, onClose]);

  if (!study) return null;

  const currentGalleryImages = study.images || [];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${study.name} Case Study`}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl my-8 overflow-hidden text-zinc-100 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-zinc-950/95 backdrop-blur border-b border-zinc-800/80 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              {study.eyebrow}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {study.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-colors"
              >
                <span>{link.label}</span>
                <LinkSquare02Icon className="w-3 h-3" />
              </a>
            ))}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <Cancel01Icon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
          
          {/* Main Title & Executive Summary */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {study.name}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              {study.summary}
            </p>

            <div className="mt-6 pt-5 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block mb-0.5">ROLE</span>
                <span className="text-zinc-200 font-semibold">{study.role}</span>
              </div>
              <div>
                <span className="text-zinc-500 block mb-0.5">RELEASED</span>
                <span className="text-zinc-200 font-semibold">{study.year}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-zinc-500 block mb-0.5">DOMAIN</span>
                <span className="text-zinc-200 font-semibold">{study.stack[0]} Architecture</span>
              </div>
            </div>
          </div>

          {/* Screenshot Showcase Section */}
          {study.showcases && study.showcases.length > 0 ? (
            <div className="space-y-8">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                System Interface &amp; Workflow Gallery
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.showcases.map((showcase: Showcase, idx: number) => (
                  <div
                    key={showcase.title}
                    className={`bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden ${
                      showcase.featured ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div className="relative group bg-zinc-950 aspect-[16/10] overflow-hidden">
                      <img
                        src={showcase.images[0].src}
                        alt={showcase.images[0].alt}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <button
                        onClick={() => setLightboxImage(showcase.images[0])}
                        className="absolute bottom-3 right-3 p-2 rounded-lg bg-zinc-950/80 text-white border border-zinc-700/80 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                        title="View high-resolution"
                      >
                        <Maximize01Icon className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                        <h4 className="text-sm font-bold text-zinc-100">{showcase.title}</h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {showcase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : currentGalleryImages.length > 0 ? (
            <div className="space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Screenshots &amp; Visual Telemetry
              </div>

              {/* Main Featured Image */}
              <div className="relative group bg-zinc-950 rounded-xl overflow-hidden border border-zinc-800/80 aspect-[16/10]">
                <img
                  src={currentGalleryImages[activeImageIndex].src}
                  alt={currentGalleryImages[activeImageIndex].alt}
                  className="w-full h-full object-contain bg-zinc-950"
                  loading="lazy"
                />
                <button
                  onClick={() => setLightboxImage(currentGalleryImages[activeImageIndex])}
                  className="absolute bottom-3 right-3 p-2 rounded-lg bg-zinc-950/80 text-white border border-zinc-700/80 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                  title="Expand preview"
                >
                  <Maximize01Icon className="w-4 h-4" />
                </button>
              </div>

              {/* Caption */}
              <p className="text-xs text-zinc-400 italic">
                {currentGalleryImages[activeImageIndex].caption}
              </p>

              {/* Thumbnails */}
              {currentGalleryImages.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-2">
                  {currentGalleryImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? 'border-white ring-1 ring-white/50 opacity-100'
                          : 'border-zinc-800 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}

          {/* Deep Engineering Notes */}
          <div className="space-y-6 pt-4 border-t border-zinc-800/80">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Engineering Breakdown
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5">
                <span className="text-xs font-mono text-zinc-500 block mb-2">01 / The Problem</span>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">Root Challenge</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{study.challenge}</p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5">
                <span className="text-xs font-mono text-zinc-500 block mb-2">02 / The Solution</span>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">System Architecture</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{study.approach}</p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5">
                <span className="text-xs font-mono text-zinc-500 block mb-2">03 / The Outcome</span>
                <h4 className="text-sm font-bold text-zinc-100 mb-2">Production Impact</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{study.outcome}</p>
              </div>
            </div>
          </div>

          {/* Architecture Highlights Bullets */}
          {study.architectureHighlights && study.architectureHighlights.length > 0 && (
            <div className="space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Technical Highlights
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {study.architectureHighlights.map((hl) => (
                  <div key={hl.title} className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800">
                    <h5 className="text-xs font-bold text-zinc-200 mb-1">{hl.title}</h5>
                    <p className="text-xs text-zinc-400 leading-relaxed">{hl.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
              Technologies Utilized
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {study.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              ← Back to Overview
            </button>

            <div className="flex items-center gap-3">
              {study.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox High-Resolution Zoom */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700"
            aria-label="Close high-res preview"
          >
            <Cancel01Icon className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {lightboxImage.caption && (
            <p className="mt-4 text-xs sm:text-sm text-zinc-300 max-w-xl text-center">
              {lightboxImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
