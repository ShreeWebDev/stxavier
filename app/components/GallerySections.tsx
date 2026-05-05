'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
};

export type GallerySection = {
  title: string;
  images: GalleryImage[];
};

export default function GallerySections({ sections }: { sections: GallerySection[] }) {
  const [open, setOpen] = useState(false);
  const [sectionIndex, setSectionIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const activeSection = useMemo(() => {
    if (sectionIndex === null) return null;
    return sections[sectionIndex] ?? null;
  }, [sectionIndex, sections]);

  const activeImage = useMemo(() => {
    if (!activeSection || imageIndex === null) return null;
    return activeSection.images[imageIndex] ?? null;
  }, [activeSection, imageIndex]);

  const close = () => {
    setOpen(false);
    setSectionIndex(null);
    setImageIndex(null);
  };

  const prev = () => {
    if (!activeSection || imageIndex === null) return;
    const nextIndex = (imageIndex - 1 + activeSection.images.length) % activeSection.images.length;
    setImageIndex(nextIndex);
  };

  const next = () => {
    if (!activeSection || imageIndex === null) return;
    const nextIndex = (imageIndex + 1) % activeSection.images.length;
    setImageIndex(nextIndex);
  };

  return (
    <>
      <div className="space-y-14">
        {sections.map((section, sIdx) => (
          <div key={section.title}>
            <div className="flex items-end justify-between gap-6 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3A]">{section.title}</h2>
                <div className="h-1 w-16 bg-[#D62828] rounded-full mt-3" />
              </div>
              <p className="text-sm text-[#0B1F3A]/60 font-light">{section.images.length} photos</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.images.map((img, iIdx) => (
                <button
                  key={`${img.src}-${iIdx}`}
                  type="button"
                  onClick={() => {
                    setSectionIndex(sIdx);
                    setImageIndex(iIdx);
                    setOpen(true);
                  }}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group border border-[#0B1F3A]/5 bg-white shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/15 transition-colors duration-300" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {open && activeImage && activeSection ? (
        <div
          className="fixed inset-0 z-[70] bg-[#0B1F3A]/85 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
          onClick={close}
        >
          <div
            className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[#0B1F3A]/10">
              <div className="min-w-0">
                <p className="text-[#0B1F3A] font-bold truncate">{activeSection.title}</p>
                <p className="text-[#0B1F3A]/60 text-sm font-light">
                  {imageIndex !== null ? imageIndex + 1 : 1} / {activeSection.images.length}
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="p-2 rounded-full hover:bg-[#0B1F3A]/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[#0B1F3A]/70" />
              </button>
            </div>

            <div className="px-5 md:px-7 py-5">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0B1F3A]/5 border border-[#0B1F3A]/10">
                <Image src={activeImage.src} alt={activeImage.alt} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 1024px" />
              </div>

              {activeSection.images.length > 1 ? (
                <div className="mt-4 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={prev}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B1F3A]/10 text-[#0B1F3A] font-semibold hover:bg-[#0B1F3A]/5 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0B1F3A]/10 text-[#0B1F3A] font-semibold hover:bg-[#0B1F3A]/5 transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

