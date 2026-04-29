import Link from 'next/link';

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
    <section className="relative pt-40 pb-16 bg-[#0B1F3A] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D62828] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">{title}</h1>
        {subtitle ? <p className="mt-5 text-lg md:text-xl text-white/80 font-light max-w-3xl">{subtitle}</p> : null}

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
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors duration-300 backdrop-blur-md"
              >
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
