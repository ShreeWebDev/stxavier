import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, ChevronRight, Quote, Star, Target } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="About Our School"
        subtitle="St. Xavier’s English High School was established with a vision of providing affordable, quality education in a safe, caring, and joyful environment in Dombivli."
        primaryAction={{ label: 'Contact Us', href: '/contact' }}
        secondaryAction={{ label: 'View Academics', href: '/academics' }}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-[3rem] overflow-hidden relative">
              <Image src="/gallery/DSC_9589.JPG" alt="About Our School" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-[#0B1F3A] p-8 rounded-[2rem] text-white max-w-xs shadow-2xl">
              <Quote className="w-8 h-8 text-[#F59E0B] mb-4 opacity-70" />
              <p className="font-light italic text-white/90">
                &quot;Education is the most powerful weapon which you can use to change the world.&quot;
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Our Story</h2>
              <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6" />
              <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">
                A learning atmosphere where every child feels valued, confident, and inspired — with strong academics,
                character building, life skills, and moral values.
              </p>
            </div>

            <ul className="space-y-6 mt-8">
              {[
                'Founder: Shree Namdev Bhoir (Om Sai Trust)',
                'Learning atmosphere where every child feels valued, confident, and inspired',
                'Emphasis on academic excellence, character building, life skills, and strong moral values',
                'Parents, teachers, and students work together in harmony',
                'Innovative teaching methods and technology-enabled learning for tomorrow’s challenges',
              ].map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#FFEDED] flex-shrink-0 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#D62828]" />
                  </div>
                  <span className="text-[#0B1F3A]/80 text-lg font-light leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#D62828] font-semibold hover:gap-4 transition-all">
                Get in touch <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFEDED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/60 shadow-2xl">
              <Image
                src="/gallery/other/school_trustee.png"
                alt="School Management & Trustee Members"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1F3A]">
              SCHOOL MANAGEMENT & TRUSTEE MEMBERS
            </h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mt-5 mb-8" />
            <p className="text-[#0B1F3A]/70 font-light leading-relaxed text-lg whitespace-pre-line">
              We warmly welcome everyone to our school community. Over the years, we have dedicated ourselves to creating an environment where learning is meaningful, joyful, and grounded in discipline and respect.
              {'\n\n'}
              Our aim is to ensure that every student receives the right balance of academic learning, co-curricular activities, and overall personal development. We take pride in our team of skilled and caring teachers who work tirelessly to guide each student with patience and dedication. Their commitment plays a vital role in shaping confident, responsible, and well-rounded individuals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Achievements</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6 mx-auto" />
            <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">
              Our students participate in inter-school competitions and win trophies across academics, sports, and co-curricular activities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Award,
                title: 'Inter-School Competitions',
                desc: 'Regular participation in debates, quizzes, science exhibitions, and sports events.',
                badge: 'Active',
              },
              {
                icon: Star,
                title: 'Prizes & Certificates',
                desc: 'Recognition across sports, indoor games, subject-based exams, and general knowledge.',
                badge: 'Recognized',
              },
              {
                icon: Target,
                title: 'Consistent Excellence',
                desc: 'A culture of discipline, learning, and guided preparation that builds confidence.',
                badge: 'Focused',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#0B1F3A]/10 p-10 rounded-3xl relative overflow-hidden group hover:border-[#D62828]/30 transition-colors duration-300"
              >
                <div className="absolute top-0 right-0 bg-[#D62828] text-white text-xs font-bold px-4 py-1.5 rounded-bl-3xl z-10 tracking-widest uppercase">
                  {item.badge}
                </div>
                <item.icon className="w-12 h-12 text-[#F59E0B] mb-6" />
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">{item.title}</h3>
                <p className="text-[#0B1F3A]/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
