import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import PageHero from '../components/PageHero';

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const files = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir) : [];

  return files
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .filter((file) => file.toLowerCase() !== 'st_francis_xavier.jpeg')
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      file,
      src: `/gallery/${file}`,
    }));
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Gallery"
        subtitle="A glimpse of school life, events, and everyday moments on campus."
        primaryAction={{ label: 'Contact Us', href: '/contact' }}
        secondaryAction={{ label: 'Facilities', href: '/facilities' }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A]">Photo Gallery</h2>
            <p className="mt-3 text-[#0B1F3A]/70 font-light">Browse {images.length} photos from our campus.</p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={img.file} className="break-inside-avoid relative rounded-2xl overflow-hidden group mb-4">
                <Image
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

