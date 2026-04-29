import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Dumbbell, Library, Microscope, Monitor } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function FacilitiesPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Facilities"
        subtitle="A safe, supportive campus with learning spaces and activities that encourage curiosity, creativity, and growth."
        primaryAction={{ label: 'View Gallery', href: '/gallery' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />

      <section className="py-24 bg-[#FFEDED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">World-Class Facilities</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6" />
            <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">
              Modern facilities designed to support academics, sports, and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
            {[
              { icon: Microscope, name: 'Science Lab' },
              { icon: Monitor, name: 'Computer Lab' },
              { icon: Library, name: 'Library' },
              { icon: Dumbbell, name: 'Playground' },
            ].map((fac) => (
              <div
                key={fac.name}
                className="bg-white rounded-2xl p-6 py-8 text-center shadow-sm border border-[#0B1F3A]/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-[#FFEDED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0B1F3A] transition-colors">
                  <fac.icon className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-semibold text-[#0B1F3A]">{fac.name}</h4>
              </div>
            ))}
          </div>

          <p className="text-[#0B1F3A]/60 font-light mt-8 max-w-2xl mx-auto text-center">
            School uses Municipal Corporation playground for various sports activities.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A]">Life at Campus</h3>
            <Link href="/gallery" className="hidden md:flex items-center gap-2 text-[#D62828] font-medium hover:underline">
              View Photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Computer Lab', src: '/gallery/other/campus/computer_lab.png' },
              { title: 'Science Lab', src: '/gallery/other/campus/science_lab.jpg' },
              { title: 'Library', src: '/gallery/other/campus/library.jpg' },
              { title: 'Playground', src: '/gallery/other/campus/playground.jpg' },
            ].map((event) => (
              <div key={event.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={event.src}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent p-6 flex items-end">
                  <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform">
                    {event.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
