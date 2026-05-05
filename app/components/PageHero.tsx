import Link from 'next/link';
import Image from 'next/image';

export default function PageHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: {
  title: string;
  subtitle?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}) {
  return (
    <section className="pt-28 pb-10 md:pt-32 md:pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B1F3A] border border-[#0B1F3A]/10 shadow-[0_20px_60px_rgba(11,31,58,0.18)]">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#D62828] rounded-full mix-blend-multiply blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-[#D62828] rounded-full mix-blend-multiply blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 px-6 md:px-12 py-10 md:py-14 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">{title}</h1>
              {subtitle ? (
                <p className="mt-5 text-lg md:text-xl text-white/80 font-light max-w-3xl leading-relaxed">{subtitle}</p>
              ) : null}

              {primaryAction || secondaryAction ? (
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  {primaryAction ? (
                    <Link
                      href={primaryAction.href}
                      className="bg-[#D62828] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 shadow-[0_0_40px_rgba(214,40,40,0.3)]"
                    >
                      {primaryAction.label}
                    </Link>
                  ) : null}
                  {secondaryAction ? (
                    <Link
                      href={secondaryAction.href}
                      className="border border-white/25 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
                    >
                      {secondaryAction.label}
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
