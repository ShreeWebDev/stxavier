import fs from 'node:fs';
import path from 'node:path';
import PageHero from '../components/PageHero';
import GallerySections, { type GallerySection } from '../components/GallerySections';

function isImageFile(file: string) {
  return /\.(jpe?g|png|webp|gif)$/i.test(file);
}

function encodePathSegments(...segments: string[]) {
  return segments.map((s) => encodeURIComponent(s)).join('/');
}

function getGallerySections(): GallerySection[] {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const dirents = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir, { withFileTypes: true }) : [];

  const rootImages = dirents
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter(isImageFile)
    .filter((f) => f.toLowerCase() !== 'st_francis_xavier.jpeg')
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      src: `/gallery/${encodePathSegments(file)}`,
      alt: file,
    }));

  const preferredOrder = [
    '15th Aug',
    'anualsports',
    'classroom',
    'comon',
    'drawing competition',
    'Investiture ceremony',
    'marathi day',
    'PTA meeting',
    'science day',
    'shivjayanti',
    'singing',
  ].map((x) => x.toLowerCase());

  const folders = dirents
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => name.toLowerCase() !== 'other');

  const folderSections: GallerySection[] = folders
    .map((folderName) => {
      const folderPath = path.join(galleryDir, folderName);
      const files = fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : [];
      const images = files
        .filter(isImageFile)
        .filter((f) => f.toLowerCase() !== 'st_francis_xavier.jpeg')
        .sort((a, b) => a.localeCompare(b))
        .map((file) => ({
          src: `/gallery/${encodePathSegments(folderName, file)}`,
          alt: `${folderName} - ${file}`,
        }));
      return { title: folderName, images };
    })
    .filter((s) => s.images.length > 0)
    .sort((a, b) => {
      const ai = preferredOrder.indexOf(a.title.toLowerCase());
      const bi = preferredOrder.indexOf(b.title.toLowerCase());
      if (ai === -1 && bi === -1) return a.title.localeCompare(b.title);
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    });

  const sections: GallerySection[] = [];
  if (rootImages.length > 0) {
    sections.push({ title: 'Highlights', images: rootImages });
  }
  sections.push(...folderSections);

  return sections;
}

export default function GalleryPage() {
  const sections = getGallerySections();
  const total = sections.reduce((sum, s) => sum + s.images.length, 0);

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
            <p className="mt-3 text-[#0B1F3A]/70 font-light">Browse {total} photos from our campus.</p>
          </div>

          <GallerySections sections={sections} />
        </div>
      </section>
    </main>
  );
}
