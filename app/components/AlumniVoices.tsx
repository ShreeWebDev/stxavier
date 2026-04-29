'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import { useMemo, useState } from 'react';

type Alumni = {
  name: string;
  role: string;
  excerpt: string;
  imageSrc: string;
  fullText: string;
};

export default function AlumniVoices({ alumni }: { alumni: Alumni[] }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = useMemo(() => {
    if (activeIndex === null) return null;
    return alumni[activeIndex] ?? null;
  }, [activeIndex, alumni]);

  return (
    <>
      <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbars cursor-grab active:cursor-grabbing">
        {alumni.map((item, i) => (
          <div key={item.name} className="min-w-[85vw] md:min-w-[400px] snap-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="inline-block w-4 h-4">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]">
                      <path d="M12 17.27l5.18 3.03-1.64-5.81L20 10.24l-5.9-.51L12 4.5 9.9 9.73 4 10.24l4.46 4.25L6.82 20.3z" />
                    </svg>
                  </span>
                ))}
              </div>

              <p className="text-white/80 font-light leading-relaxed mb-8 flex-grow">&quot;{item.excerpt}&quot;</p>

              <div className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10 shadow-lg">
                    <Image src={item.imageSrc} alt={item.name} width={48} height={48} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-[#F59E0B] text-sm">{item.role}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    setOpen(true);
                  }}
                  className="shrink-0 border border-white/20 text-white/90 px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {open && active ? (
        <div
          className="fixed inset-0 z-[60] bg-[#0B1F3A]/80 backdrop-blur-sm px-6 py-10 overflow-y-auto"
          onClick={() => {
            setOpen(false);
            setActiveIndex(null);
          }}
        >
          <div
            className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#0B1F3A]/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0B1F3A]/5 border border-[#0B1F3A]/10">
                  <Image src={active.imageSrc} alt={active.name} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1F3A]">{active.name}</p>
                  <p className="text-[#D62828] text-sm font-medium">{active.role}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setActiveIndex(null);
                }}
                className="p-2 rounded-full hover:bg-[#0B1F3A]/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[#0B1F3A]/70" />
              </button>
            </div>

            <div className="px-6 py-6">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0B1F3A]/5 border border-[#0B1F3A]/10">
                <Image src={active.imageSrc} alt={active.name} fill className="object-cover" />
              </div>

              <div className="mt-6 text-[#0B1F3A]/80 leading-relaxed font-light whitespace-pre-line">
                {active.fullText.trim()}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

