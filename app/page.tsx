import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import Link from 'next/link';
import AlumniVoices from './components/AlumniVoices';
import {
  BookOpen, Award, Users, ChevronRight, Phone, Mail, MapPin,
  Target, Heart, FileText, CheckCircle2,
  Calendar, Star, Quote, ArrowRight, Book, ShieldCheck,
  Microscope, MonitorPlay, Library, Dumbbell, Palette,
  Monitor, BrainCircuit, PenTool, FolderOpen
} from 'lucide-react';

function getGalleryPreviewImages(limit = 15) {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  const files = fs.existsSync(galleryDir) ? fs.readdirSync(galleryDir) : [];
  const heights = [400, 300, 500, 250, 450, 350, 600, 300, 420, 280, 520, 260, 480, 340, 560];

  return files
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .filter((file) => file.toLowerCase() !== 'st_francis_xavier.jpeg')
    .sort((a, b) => a.localeCompare(b))
    .slice(0, limit)
    .map((file, i) => ({
      src: `/gallery/${file}`,
      h: heights[i % heights.length],
    }));
}

function readPublicText(relPath: string) {
  try {
    const fullPath = path.join(process.cwd(), 'public', relPath);
    return fs.readFileSync(fullPath, 'utf8');
  } catch {
    return '';
  }
}

function toExcerpt(text: string, maxLen = 220) {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return `${clean.slice(0, maxLen).trim()}…`;
}

// Reusable Animation Component
const FadeIn = ({ children, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <div className={className}>{children}</div>
);

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">
      {title}
    </h2>
    <div className={`h-1 w-24 bg-[#D62828] rounded-full mb-6 ${centered ? 'mx-auto' : ''}`} />
    {subtitle && <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">{subtitle}</p>}
  </div>
);

export default function Home() {
  const galleryPreview = getGalleryPreviewImages(15);
  const poojaText = readPublicText(path.join('gallery', 'other', 'pooja_sirvi.txt'));
  const priyankaText = readPublicText(path.join('gallery', 'other', 'priyanka_bora.txt'));
  const alumni = [
    {
      name: 'Pooja Sirvi',
      role: 'Ex-Xavier (Batch 2021–22) • CA Finalist',
      excerpt: toExcerpt(poojaText || 'This institution gave me far more than just education — it gave me a strong foundation for life. Teachers here mentor, believe in you, and help you discover your true potential.'),
      imageSrc: '/gallery/other/pooja_sirvi.png',
      fullText: poojaText || '',
    },
    {
      name: 'Priyanka Bora',
      role: 'Ex-Xavier (Batch 2017–18) • Lawyer',
      excerpt: toExcerpt(priyankaText || 'St. Xavier’s strikes a perfect balance between academics and co-curricular activities. The guidance I received built confidence, discipline, and the determination to face a competitive world.'),
      imageSrc: '/gallery/other/priyanka_bora.png',
      fullText: priyankaText || '',
    },
  ];

  return (
    <main className="bg-white overflow-hidden selection:bg-[#F59E0B] selection:text-white pb-0">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-40 pb-20 md:py-48 min-h-[90vh] flex items-center bg-[#0B1F3A] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D62828] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-sm font-medium tracking-wide uppercase">Motto • Educating Students for Success in a Changing World</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.05]">
              St. Xavier&apos;s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">English High School</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 font-light max-w-xl leading-relaxed">
              Educating Students for Success in a Changing World. 25+ years of excellence in nurturing young minds to become tomorrow&apos;s leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/admissions" className="bg-[#D62828] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 shadow-[0_0_40px_rgba(214,40,40,0.3)]">
                Apply for Admission
              </Link>
              <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D62828]/20 to-transparent rounded-[3rem] -rotate-3 scale-105 transform translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/gallery/st_francis_xavier.jpeg" 
                alt="St. Francis Xavier" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            {/* Superimposed badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(11,31,58,0.15)] flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-[#FFEDED] flex items-center justify-center">
                <Target className="text-[#D62828] w-6 h-6" />
              </div>
              <div>
                <p className="text-[#0B1F3A] font-bold text-xl">25+</p>
                <p className="text-[#0B1F3A]/60 text-sm">Years of Legacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST SECTION (Overlapping Hero slightly) */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "25+ Years of Service", desc: "Om Sai Trust has been serving society in Dombivli for over 25 years." },
            { icon: Heart, title: "Affordable Quality Education", desc: "Established in 2002 with a vision to make quality education accessible." },
            { icon: BookOpen, title: "Community Welfare", desc: "Medical camps and social initiatives that strengthen our local community." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(11,31,58,0.06)] hover:shadow-[0_20px_40px_rgb(11,31,58,0.12)] transition-all duration-300 hover:-translate-y-2 border border-[#0B1F3A]/5 group">
                <div className="w-14 h-14 rounded-2xl bg-[#FFEDED] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#D62828] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{item.title}</h3>
                <p className="text-[#0B1F3A]/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. ABOUT SCHOOL */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-[3rem] overflow-hidden relative">
              <Image 
                src="/gallery/DSC_9589.JPG" 
                alt="About Our School" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Absolute info card */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-[#0B1F3A] p-8 rounded-[2rem] text-white max-w-xs shadow-2xl">
              <Quote className="w-8 h-8 text-[#F59E0B] mb-4 opacity-70" />
              <p className="font-light italic text-white/90">&quot;Education is the most powerful weapon which you can use to change the world.&quot;</p>
            </div>
          </FadeIn>
          
          <div className="order-1 lg:order-2">
            <FadeIn>
              <SectionHeading 
                title="About Our School" 
                subtitle="St. Xavier’s English High School was established with a vision of providing affordable, quality education in a safe, caring, and joyful environment in Dombivli."
              />
              <ul className="space-y-6 mt-8">
                {[
                  "Founder: Shree Namdev Bhoir (Om Sai Trust)",
                  "Learning atmosphere where every child feels valued, confident, and inspired",
                  "Emphasis on academic excellence, character building, life skills, and strong moral values",
                  "Parents, teachers, and students work together in harmony",
                  "Innovative teaching methods and technology-enabled learning for tomorrow’s challenges"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#FFEDED] flex-shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#D62828]" />
                    </div>
                    <span className="text-[#0B1F3A]/80 text-lg font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link href="/about" className="inline-flex items-center gap-2 text-[#D62828] font-semibold hover:gap-4 transition-all">
                  Know more about our history <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. MANAGEMENT MESSAGE */}
      <section className="py-24 bg-[#FFEDED]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <Quote className="w-12 h-12 text-[#D62828] mx-auto mb-8 opacity-20" />
            <p className="text-2xl md:text-3xl text-[#0B1F3A] font-light leading-relaxed mb-10">
              &quot;We warmly welcome everyone to our school community. Over the years, we have dedicated ourselves to creating an environment where learning is meaningful, joyful, and grounded in discipline and respect. Our aim is to ensure that every student receives the right balance of academic learning, co-curricular activities, and overall personal development.&quot;
            </p>
            <div className="inline-block border-t-2 border-[#D62828] pt-6">
              <h4 className="text-xl font-bold text-[#0B1F3A]">School Management & Trustee Members</h4>
              <p className="text-[#0B1F3A]/60 mt-1">St. Xavier&apos;s English High School</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. ACHIEVEMENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionHeading 
              title="Achievements" 
              subtitle="Our students participate in inter-school competitions and win trophies across academics, sports, and co-curricular activities."
              centered
            />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Award, title: "Inter-School Competitions", desc: "Regular participation in debates, quizzes, science exhibitions, and sports events.", badge: "Active" },
              { icon: Star, title: "Prizes & Certificates", desc: "Recognition across sports, indoor games, subject-based exams, and general knowledge.", badge: "Recognized" },
              { icon: Target, title: "Consistent Excellence", desc: "A culture of discipline, learning, and guided preparation that builds confidence.", badge: "Focused" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#0B1F3A]/10 p-10 rounded-3xl relative overflow-hidden group hover:border-[#D62828]/30 transition-colors duration-300">
                  <div className="absolute top-0 right-0 bg-[#D62828] text-white text-xs font-bold px-4 py-1.5 rounded-bl-3xl z-10 tracking-widest uppercase">
                    {item.badge}
                  </div>
                  <item.icon className="w-12 h-12 text-[#F59E0B] mb-6" />
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">{item.title}</h3>
                  <p className="text-[#0B1F3A]/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACADEMICS */}
      <section id="academics" className="py-32 bg-[#0B1F3A] text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                Academic Structure
              </h2>
              <div className="h-1 w-24 bg-[#F59E0B] rounded-full mb-6" />
              <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
                A strong academic framework with activity-based learning and board-oriented preparation.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Primary */}
            <FadeIn delay={0.1}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors duration-300">
                <div className="bg-[#D62828] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#D62828]/20">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Primary Section</h3>
                <p className="text-[#F59E0B] font-medium tracking-wide text-sm mb-8 uppercase">Std 1 – 7</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Strong foundation in core subjects: English, Mathematics, EVS, Basic Science</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Activity-based learning with models, charts, group learning, stories, songs, and games</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Reading & writing skills development with structured reading and daily writing practice</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Digital audio-visual learning using smart boards and educational videos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Continuous evaluation: tests, worksheets, projects, and oral assessments</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Life skills & values: hygiene, manners, discipline, sharing, and teamwork</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Co-curricular activities: drawing, craft, singing, dancing, elocution, and physical activities</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            {/* Secondary */}
            <FadeIn delay={0.2}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors duration-300">
                <div className="bg-[#D62828] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#D62828]/20">
                  <Book className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Secondary Section</h3>
                <p className="text-[#F59E0B] font-medium tracking-wide text-sm mb-8 uppercase">Std 8 – 10</p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Strong academics framework: Maths, Science, English, Marathi, Hindi, Social Science</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Exam & board preparation: unit tests, semester exams, preboard exams, extra classes and practice papers</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Conceptual & application-based learning with experiments, projects, and real-life examples</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Subject-wise expert teachers with individual attention for weak students</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Digital classroom support: smart boards and animated explanations</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Regular homework & assessments with monthly tests and structured homework plan</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Career awareness & guidance sessions after 10th, motivation and study-skill workshops</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">Co-scholastic development: debate, quiz, elocution, science exhibitions, sports, yoga, fitness</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8 & 9. ADMISSIONS & SCHOLARSHIPS (Combined distinctively) */}
      <section id="admissions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Admissions Side */}
            <div className="lg:col-span-7">
              <FadeIn>
                <SectionHeading title="Admissions" subtitle="Documents and important notes for the admission process." />
                <div className="bg-[#FFEDED] rounded-[2rem] p-8 md:p-12 mb-8">
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-6 flex items-center gap-3">
                    <FolderOpen className="w-6 h-6 text-[#D62828]"/> Required Documents
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Birth Certificate (coloured photocopy) – Std I",
                      "Previous class marksheet (original) – Std II onwards",
                      "School Leaving Certificate (S.L.C.) (original) – Std II onwards",
                      "Aadhaar cards of student and parents",
                      "Valid proof of residence",
                      "Photos: 1 passport + 2 copies (1.7 cm × 2.0 cm)",
                      "N.O.C. (for local school transfers, where applicable)",
                      "Education Officer counter-signature (change of State/District, where applicable)",
                    ].map((doc, i) => (
                      <div key={i} className="bg-white px-5 py-4 rounded-xl border border-[#0B1F3A]/5 shadow-sm flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                        <span className="text-[#0B1F3A]/80 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white border border-[#0B1F3A]/10 rounded-[2rem] p-8 md:p-10 mb-8">
                  <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Important Notes</h4>
                  <ul className="space-y-3">
                    {[
                      "Admissions from Std. II onwards are provisional until the School Leaving Certificate (S.L.C.) is submitted.",
                      "Last date for S.L.C. submission is 30th June; management reserves the right to cancel admission if not submitted within time.",
                      "Within Maharashtra: S.L.C. should be in Government of Maharashtra prescribed format.",
                      "UDISE (Primary): 27210607203 • UDISE (Secondary): 27210607206 • Secondary Index No.: S1617208",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#0B1F3A]/70 font-light">
                        <div className="mt-2 w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="mailto:info@stxaviersschool.in" className="flex-1 border border-[#0B1F3A]/10 rounded-2xl p-6 flex flex-col justify-center gap-2 hover:bg-[#0B1F3A] hover:border-[#0B1F3A] hover:text-white transition-all group cursor-pointer">
                    <Mail className="w-6 h-6 text-[#D62828]" />
                    <span className="font-semibold text-lg">Email Us</span>
                    <span className="font-light group-hover:text-white/70">info@stxaviersschool.in</span>
                  </a>
                  <a href="tel:02512495328" className="flex-1 border border-[#0B1F3A]/10 rounded-2xl p-6 flex flex-col justify-center gap-2 hover:bg-[#0B1F3A] hover:border-[#0B1F3A] hover:text-white transition-all group cursor-pointer">
                    <Phone className="w-6 h-6 text-[#D62828]" />
                    <span className="font-semibold text-lg">Call Us</span>
                    <span className="font-light group-hover:text-white/70">0251 2495 328</span>
                  </a>
                </div>
                <button className="mt-8 w-full bg-[#0B1F3A] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#D62828] transition-colors shadow-xl">
                  Download Application Form
                </button>
              </FadeIn>
            </div>

            {/* Scholarships Side */}
            <div className="lg:col-span-5">
               <FadeIn delay={0.2} className="h-full">
                  <div className="h-full border border-[#0B1F3A]/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden bg-white shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
                    <div className="w-32 h-32 absolute -top-16 -right-16 bg-[#F59E0B] rounded-full opacity-10 blur-2xl"></div>
                    
                    <ShieldCheck className="w-12 h-12 text-[#D62828] mb-6" />
                    <h3 className="text-3xl font-bold text-[#0B1F3A] mb-4">Exams & Scholarships</h3>
                    <p className="text-[#0B1F3A]/60 font-light mb-10 leading-relaxed">
                      Students are encouraged to participate in important examinations and competitions to build confidence and achieve recognition.
                    </p>
                    
                    <div className="space-y-4 flex-grow">
                      {[
                        { title: "Homi Bhabha Exam", cat: "Science" },
                        { title: "Mental Maths Exam", cat: "Mathematics" },
                        { title: "English State Grammar Exam", cat: "English" },
                        { title: "Scholarship Exam", cat: "Scholarship" },
                        { title: "Elementary & Intermediate Drawing Exam", cat: "Drawing" },
                      ].map((exam, i) => (
                        <div key={i} className="group flex items-center justify-between border-b border-[#0B1F3A]/5 pb-4 last:border-0 hover:bg-[#FFEDED] -mx-4 px-4 py-2 rounded-lg transition-colors">
                          <div>
                            <p className="font-semibold text-[#0B1F3A]">{exam.title}</p>
                            <p className="text-xs text-[#F59E0B] font-medium tracking-wider uppercase mt-1">{exam.cat}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-[#0B1F3A]/30 group-hover:text-[#D62828]" />
                        </div>
                      ))}
                    </div>
                  </div>
               </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 10. ALUMNI TESTIMONIALS */}
      <section className="py-24 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Alumni Voices
                </h2>
                <div className="h-1 w-24 bg-[#D62828] rounded-full" />
              </div>
              <p className="text-white/60 font-light max-w-sm text-sm">
                Hear from our proud graduates who are making a significant impact across the world.
              </p>
            </div>
          </FadeIn>

          <AlumniVoices alumni={alumni} />
        </div>
      </section>

      {/* 11 & 12. FACILITIES & EVENTS */}
      <section id="facilities" className="py-24 bg-[#FFEDED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Facilities */}
          <div className="mb-32">
            <FadeIn>
              <SectionHeading title="World-Class Facilities" centered />
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-12">
              {[
                { icon: Microscope, name: "Science Lab" },
                { icon: Monitor, name: "Computer Lab" },
                { icon: Library, name: "Library" },
                { icon: Dumbbell, name: "Playground" }
              ].map((fac, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 py-8 text-center shadow-sm border border-[#0B1F3A]/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="w-16 h-16 mx-auto bg-[#FFEDED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0B1F3A] transition-colors">
                      <fac.icon className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-[#0B1F3A]">{fac.name}</h4>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-[#0B1F3A]/60 font-light mt-8 max-w-2xl mx-auto text-center">
              School uses Municipal Corporation playground for various sports activities.
            </p>
          </div>

          {/* Events */}
          <div>
            <FadeIn>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-3xl font-bold text-[#0B1F3A]">Life at Campus</h3>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Computer Lab", src: "/gallery/other/campus/computer_lab.png" },
                { title: "Science Lab", src: "/gallery/other/campus/science_lab.jpg" },
                { title: "Library", src: "/gallery/other/campus/library.jpg" },
                { title: "Playground", src: "/gallery/other/campus/playground.jpg" }
              ].map((event, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                    <Image 
                      src={event.src} 
                      alt={event.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent p-6 flex items-end">
                      <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform">{event.title}</h4>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 13. TOPPERS */}
      <section className="py-24 bg-white border-b border-[#0B1F3A]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionHeading title="SSC Toppers" subtitle="St. Xavier&apos;s English High School" />
          </FadeIn>
          <div className="mt-12 overflow-x-auto rounded-[2rem] border border-[#0B1F3A]/10 bg-white shadow-sm">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="bg-[#FFEDED] text-[#0B1F3A]">
                  <th className="text-left px-6 py-4 font-bold">Year</th>
                  <th className="text-left px-6 py-4 font-bold">Name</th>
                  <th className="text-left px-6 py-4 font-bold">Position</th>
                  <th className="text-left px-6 py-4 font-bold">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B1F3A]/10">
                {[
                  { year: "2013", name: "PARKAR SIDDHI SADANAND", position: "I", percentage: "82.60%" },
                  { year: "2013", name: "POOJARY AKHILESH RAMAPPA", position: "II", percentage: "80.73%" },
                  { year: "2013", name: "CHAUDHARY RAKESH RAJENDRA", position: "III", percentage: "80.18%" },
                  { year: "2014", name: "SRIVASTAV SUJATA PRABHARAMAN", position: "I", percentage: "89.20%" },
                  { year: "2014", name: "NARVEKAR NAMIT NAVNATH", position: "II", percentage: "84.40%" },
                  { year: "2014", name: "RAVTE PRASANA SANDIP", position: "III", percentage: "82.20%" },
                  { year: "2015", name: "SHETTY SURAKSHA SURESH", position: "I", percentage: "90.60%" },
                  { year: "2015", name: "POOJARY NIKITA KRISHNA", position: "II", percentage: "83.40%" },
                  { year: "2015", name: "SHETTY VINYAS VISHWANATH", position: "III", percentage: "87.40%" },
                  { year: "2016", name: "POOJARY PREETI SHASHINDRA", position: "I", percentage: "91.40%" },
                  { year: "2016", name: "GHAG SIDDHI DINESH", position: "II", percentage: "90.60%" },
                  { year: "2016", name: "NAIK DEEPIKA SURENDRA", position: "III", percentage: "90.00%" },
                  { year: "2017", name: "PANDA SUSHIL LAXMAN", position: "I", percentage: "89.40%" },
                  { year: "2017", name: "NIVEDAN RAMPRASAD", position: "II", percentage: "86.60%" },
                  { year: "2017", name: "SHARMA DEVENSHI RAJENDRA", position: "III", percentage: "85.40%" },
                  { year: "2018", name: "PADALKAR CHAITALI PRAVIN", position: "I", percentage: "93.80%" },
                  { year: "2018", name: "BORA PRIYANKA NARENDRA", position: "II", percentage: "92.40%" },
                  { year: "2018", name: "KOTIAN DEEPA JAYRAM", position: "III", percentage: "90.60%" },
                  { year: "2018", name: "THAKUR AKASHAY BHIM", position: "III", percentage: "90.60%" },
                  { year: "2019", name: "DESHMUKH ROHIT SUHAS", position: "I", percentage: "89%" },
                  { year: "2019", name: "CHAVAN DARSHAN SADHYRANI", position: "II", percentage: "86.20%" },
                  { year: "2019", name: "WAGHDHARE VAIBHAVI DINESH", position: "III", percentage: "85.60%" },
                  { year: "2020", name: "MANNA PIYUSH ASTO", position: "I", percentage: "96.00%" },
                  { year: "2020", name: "SAWANT RASIKA DEEPAK", position: "II", percentage: "94.80%" },
                  { year: "2020", name: "RANGANKAR SRUSHTI SHAILENDRA", position: "III", percentage: "90%" },
                  { year: "2021", name: "PAWAR PURVANJALI HANUMANT", position: "I", percentage: "93.60%" },
                  { year: "2021", name: "POOJARY RAKSHITA SHEKHAR", position: "II", percentage: "91.80%" },
                  { year: "2021", name: "GUPTA TANISHA NATWARLAL", position: "III", percentage: "91.00%" },
                  { year: "2022", name: "TIWARI SAKSHI VEDPRAKASH", position: "I", percentage: "94.60%" },
                  { year: "2022", name: "BORHADE KRUSHALI GANESH", position: "II", percentage: "92.80%" },
                  { year: "2022", name: "PANDA SHUBHAM BHAGABAN", position: "III", percentage: "92.20%" },
                  { year: "2023", name: "GUPTA OMKAR GAJANAN", position: "I", percentage: "91.80%" },
                  { year: "2023", name: "POOJARY SHAMITH SURESH", position: "II", percentage: "91.60%" },
                  { year: "2023", name: "CHAVAN DAKSHA VIJAY", position: "III", percentage: "90.60%" },
                  { year: "2024", name: "MANDAL VIKRANT BUDDHISWAR", position: "I", percentage: "92.20%" },
                  { year: "2024", name: "PADALKAR KHYATI PRAVIN", position: "II", percentage: "91.80%" },
                  { year: "2024", name: "LAD MEET MADAN", position: "III", percentage: "91.60%" },
                  { year: "2025", name: "GUPTA PRASHANT NATWARLAL", position: "I", percentage: "92.60%" },
                  { year: "2025", name: "SINKAR SWARNGEE GITESH", position: "II", percentage: "91.40%" },
                  { year: "2025", name: "PARAB TANISHKA VINAYAK", position: "III", percentage: "91.00%" },
                  { year: "2025", name: "POKHRIYAL AYUSH RAKESH", position: "III", percentage: "91.00%" },
                ].map((row, i) => (
                  <tr key={`${row.year}-${row.position}-${row.name}-${i}`} className="text-[#0B1F3A]">
                    <td className="px-6 py-4 font-semibold">{row.year}</td>
                    <td className="px-6 py-4">{row.name}</td>
                    <td className="px-6 py-4 font-bold text-[#D62828]">{row.position}</td>
                    <td className="px-6 py-4 font-semibold">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 14. GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3A]">Photo Gallery</h2>
              <Link href="/gallery" className="text-[#D62828] border border-[#D62828] px-6 py-2 rounded-full hover:bg-[#D62828] hover:text-white transition-colors">
                See All
              </Link>
            </div>
          </FadeIn>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryPreview.map((item, i) => (
              <FadeIn key={i} delay={(i%4) * 0.1}>
                <div className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer mb-4">
                  <Image 
                    src={item.src} 
                    alt={`Gallery ${i}`} 
                    width={400} 
                    height={item.h} 
                    className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/20 transition-colors duration-300"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 15. CONTACT */}
      <section id="contact" className="relative bg-[#FFEDED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Get in Touch</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-10" />
            
            <div className="space-y-8 bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Campus Address</h4>
                  <p className="text-[#0B1F3A]/70 font-light">Kalu Nagar, Dombivli (W)<br/>Thane District, Maharashtra.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Phone</h4>
                  <p className="text-[#0B1F3A]/70 font-light">0251 2495 328</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Email ID</h4>
                  <p className="text-[#0B1F3A]/70 font-light">info@stxaviersschool.in</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="h-full min-h-[400px]">
            <div className="w-full h-full min-h-[400px] border-4 border-white bg-gray-200 rounded-[2rem] shadow-xl overflow-hidden">
              <iframe
                title="Xavier English High School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.45954343260615!2d73.07871542103017!3d19.223454773358352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7be199fea1031%3A0xa91e4019538983a0!2sXavier%20English%20High%20School!5e0!3m2!1sen!2sin!4v1776707733263!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
