'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import SchoolLogo from './SchoolLogo';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Academics', href: '/academics' },
      { name: 'Admissions', href: '/admissions' },
      { name: 'Facilities', href: '/facilities' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Contact', href: '/contact' },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="hidden sm:block bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm">
            <a href="tel:02512495328" className="text-white/90 hover:text-white transition-colors">
              02512495328
            </a>
            <a href="mailto:info@stxaviersschool.in" className="text-white/90 hover:text-white transition-colors">
              info@stxaviersschool.in
            </a>
          </div>
          <div className="text-sm font-medium text-white/90 whitespace-nowrap">Established 2002</div>
        </div>
      </div>

      <div className={`transition-all duration-300 bg-white ${isScrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="block sm:hidden">
              <SchoolLogo size={56} priority />
            </div>
            <div className="hidden sm:block">
              <SchoolLogo size={72} priority />
            </div>
            <div className="flex flex-col text-[#0B1F3A]">
              <span className="font-bold text-xl tracking-tight leading-none">St. Xavier&apos;s</span>
              <span className="text-xs uppercase tracking-widest font-medium opacity-80 mt-1">High School</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all hover:text-[#D62828] relative group ${
                  isActive(link.href) ? 'text-[#0B1F3A]' : 'text-[#0B1F3A]/80'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#D62828] transition-all ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#D62828] hover:bg-[#D62828]/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-lg shadow-[#D62828]/20"
            >
              Apply Now
            </Link>
          </nav>

          <button className="lg:hidden p-2 text-[#0B1F3A]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="space-y-2 w-6">
              <span
                className={`block h-0.5 w-full bg-current transition-all ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-0.5 w-full bg-current transition-all ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#0B1F3A]/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium text-lg border-b border-[#0B1F3A]/5 pb-2 ${
                    isActive(link.href) ? 'text-[#D62828]' : 'text-[#0B1F3A]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#D62828] text-white text-center py-3 rounded-xl font-semibold mt-2"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
