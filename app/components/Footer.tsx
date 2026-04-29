import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SchoolLogo from './SchoolLogo';

export default function Footer() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#0B1F3A] pt-24 pb-12 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <SchoolLogo size={56} />
            <span className="font-bold text-xl tracking-tight text-white">St. Xavier&apos;s</span>
          </div>
          <p className="text-white/60 font-light text-sm leading-relaxed">
            Educating Students for Success in a Changing World. Shaping the future generations with core human values and
            academic brilliance.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
            Pages
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2" />
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 hover:text-[#F59E0B] hover:translate-x-1 inline-block transition-transform text-sm font-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
            Contact
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2" />
          </h4>
          <ul className="space-y-3 text-sm font-light text-white/60">
            <li>
              <a href="tel:02512495328" className="hover:text-[#F59E0B] transition-colors">
                02512495328
              </a>
            </li>
            <li>
              <a href="mailto:info@stxaviersschool.in" className="hover:text-[#F59E0B] transition-colors">
                info@stxaviersschool.in
              </a>
            </li>
            <li>Kalu Nagar, Dombivli (W), Thane District, Maharashtra.</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
            Newsletter
            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2" />
          </h4>
          <p className="text-white/60 font-light text-sm mb-4">Stay updated with latest school news and announcements.</p>
          <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-none text-white text-sm outline-none px-4 w-full placeholder:text-white/40"
            />
            <button className="bg-[#D62828] text-white p-2 rounded-full hover:bg-white hover:text-[#D62828] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm font-light text-center md:text-left">
          © {new Date().getFullYear()} St. Xavier&apos;s English High School. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-white/40 hover:text-white text-sm font-light transition-colors">
            Privacy Policy
          </a>
          <span className="text-white/20">|</span>
          <a href="#" className="text-white/40 hover:text-white text-sm font-light transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

