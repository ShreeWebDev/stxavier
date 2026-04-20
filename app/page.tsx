'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import {
  BookOpen, Award, Users, ChevronRight, Phone, Mail, MapPin,
  GraduationCap, Target, Heart, FileText, CheckCircle2,
  Calendar, Star, Quote, ArrowRight, Book, ShieldCheck,
  Microscope, MonitorPlay, Library, Dumbbell, Palette,
  Monitor, BrainCircuit, PenTool, FolderOpen
} from 'lucide-react';

function SchoolLogo({
  size,
  priority,
  className = '',
}: {
  size: number;
  priority?: boolean;
  className?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div
        className={`flex items-center justify-center text-[#D62828] ${className}`}
        style={{ width: size, height: size }}
        aria-label="St. Xavier's High School Logo"
      >
        <GraduationCap style={{ width: Math.max(18, Math.floor(size * 0.55)), height: Math.max(18, Math.floor(size * 0.55)) }} />
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.png"
        alt="St. Xavier's High School Logo"
        fill
        sizes={`${size}px`}
        className="object-contain"
        priority={priority}
        onError={() => setImageFailed(true)}
      />
    </div>
  );
}

// Reusable Animation Component
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <main className="bg-white overflow-hidden selection:bg-[#F59E0B] selection:text-white pb-0">
      {/* 1. HEADER (Sticky) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="#home" className="flex items-center gap-3 group">
            <SchoolLogo size={72} priority />
            <div className="flex flex-col text-[#0B1F3A]">
              <span className="font-bold text-xl tracking-tight leading-none">St. Xavier&apos;s</span>
              <span className="text-xs uppercase tracking-widest font-medium opacity-80 mt-1">High School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium transition-all hover:text-[#D62828] relative group text-[#0B1F3A]/80"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D62828] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="hidden xl:flex items-center gap-6 text-sm">
              <a href="tel:02512495328" className="inline-flex items-center gap-2 text-[#0B1F3A]/70 hover:text-[#0B1F3A] transition-colors">
                <Phone className="w-4 h-4 text-[#D62828]" />
                <span className="font-medium">0251 2495 328</span>
              </a>
              <a href="mailto:info@stxaviersschool.in" className="inline-flex items-center gap-2 text-[#0B1F3A]/70 hover:text-[#0B1F3A] transition-colors">
                <Mail className="w-4 h-4 text-[#D62828]" />
                <span className="font-medium">info@stxaviersschool.in</span>
              </a>
            </div>
            <Link href="#admissions" className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 shadow-lg shadow-[#F59E0B]/20">
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-[#0B1F3A]" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-2 w-6">
              <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Nav Menu */}
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
                    className="text-[#0B1F3A] font-medium text-lg border-b border-[#0B1F3A]/5 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="#admissions" className="bg-[#F59E0B] text-white text-center py-3 rounded-xl font-semibold mt-2">
                  Apply Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:py-48 min-h-[90vh] flex items-center bg-[#0B1F3A] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D62828] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F59E0B] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
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
              <Link href="#admissions" className="bg-[#F59E0B] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
                Apply for Admission
              </Link>
              <Link href="#contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition-colors duration-300 backdrop-blur-md">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D62828]/20 to-transparent rounded-[3rem] -rotate-3 scale-105 transform translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=1000&auto=format&fit=crop" 
                alt="Students learning" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Superimposed badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(11,31,58,0.15)] flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 rounded-full bg-[#FFF7ED] flex items-center justify-center">
                <Target className="text-[#D62828] w-6 h-6" />
              </div>
              <div>
                <p className="text-[#0B1F3A] font-bold text-xl">25+</p>
                <p className="text-[#0B1F3A]/60 text-sm">Years of Legacy</p>
              </div>
            </div>
          </motion.div>
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
                <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] flex items-center justify-center mb-6 group-hover:bg-[#0B1F3A] transition-colors duration-300">
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
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&h=800&auto=format&fit=crop" 
                alt="Founder Shree Namdev Bhoir" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
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
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#FFF7ED] flex-shrink-0 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#D62828]" />
                    </div>
                    <span className="text-[#0B1F3A]/80 text-lg font-light leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Link href="#contact" className="inline-flex items-center gap-2 text-[#D62828] font-semibold hover:gap-4 transition-all">
                  Know more about our history <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. MANAGEMENT MESSAGE */}
      <section className="py-24 bg-[#FFF7ED]">
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
                <div className="bg-[#FFF7ED] rounded-[2rem] p-8 md:p-12 mb-8">
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
                        <div key={i} className="group flex items-center justify-between border-b border-[#0B1F3A]/5 pb-4 last:border-0 hover:bg-[#FFF7ED] -mx-4 px-4 py-2 rounded-lg transition-colors">
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

          <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbars cursor-grab active:cursor-grabbing">
            {/* Testimonial Cards */}
            {[
              {
                name: "Pooja Sirvi",
                role: "Ex-Xavier (Batch 2021–22) • CA Finalist",
                text: "This institution gave me far more than just education — it gave me a strong foundation for life. Teachers here mentor, believe in you, and help you discover your true potential.",
              },
              {
                name: "Priyanka Bora",
                role: "Ex-Xavier (Batch 2017–18) • Lawyer",
                text: "St. Xavier’s strikes a perfect balance between academics and co-curricular activities. The guidance I received built confidence, discipline, and the determination to face a competitive world.",
              },
            ].map((alumni, i) => (
              <FadeIn key={i} delay={i * 0.1} className="min-w-[85vw] md:min-w-[400px] snap-center">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                  </div>
                  <p className="text-white/80 font-light leading-relaxed mb-8 flex-grow">&quot;{alumni.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D62828] to-[#F59E0B] rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                      {alumni.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{alumni.name}</p>
                      <p className="text-[#F59E0B] text-sm">{alumni.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 11 & 12. FACILITIES & EVENTS */}
      <section id="facilities" className="py-24 bg-[#FFF7ED]">
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
                    <div className="w-16 h-16 mx-auto bg-[#FFF7ED] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0B1F3A] transition-colors">
                      <fac.icon className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-semibold text-[#0B1F3A]">{fac.name}</h4>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="text-[#0B1F3A]/60 font-light mt-8 max-w-2xl">
              School uses Municipal Corporation playground for various sports activities.
            </p>
          </div>

          {/* Events */}
          <div>
            <FadeIn>
              <div className="flex justify-between items-end mb-10">
                <h3 className="text-3xl font-bold text-[#0B1F3A]">Life at Campus</h3>
                <Link href="#" className="hidden md:flex items-center gap-2 text-[#D62828] font-medium hover:underline">View Calendar <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Annual Day", img: "1492538368651-71f2d48c863e" },
                { title: "Sports Meet", img: "1526676537331-7af3dd9da213" },
                { title: "Science Expo", img: "1532094349884-543bc11b234d" },
                { title: "Teacher's Day", img: "1577896851231-70ef18881754" }
              ].map((event, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
                    <Image 
                      src={`https://images.unsplash.com/photo-${event.img}?q=80&w=400&h=300&auto=format&fit=crop`} 
                      alt={event.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 vvia-[#0B1F3A]/40 to-transparent p-6 flex items-end">
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
                <tr className="bg-[#FFF7ED] text-[#0B1F3A]">
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
              <button className="text-[#D62828] border border-[#D62828] px-6 py-2 rounded-full hover:bg-[#D62828] hover:text-white transition-colors">See All</button>
            </div>
          </FadeIn>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              { h: 400, src: "/gallery/DSC03348.JPG" },
              { h: 300, src: "/gallery/DSC03352.JPG" },
              { h: 500, src: "/gallery/DSC03353.JPG" },
              { h: 250, src: "/gallery/DSC03356.JPG" },
              { h: 450, src: "/gallery/DSC03364.JPG" },
              { h: 350, src: "/gallery/DSC03465.JPG" },
              { h: 600, src: "/gallery/DSC03485.JPG" },
              { h: 300, src: "/gallery/DSC03637.JPG" },
              { h: 420, src: "/gallery/DSC03798.JPG" },
              { h: 280, src: "/gallery/DSC03799.JPG" },
              { h: 520, src: "/gallery/DSC03800.JPG" },
              { h: 260, src: "/gallery/DSC03805.JPG" },
              { h: 480, src: "/gallery/DSC03815.JPG" },
              { h: 340, src: "/gallery/DSC03828.JPG" },
              { h: 560, src: "/gallery/DSC03843.JPG" },
              { h: 320, src: "/gallery/DSC_9589.JPG" }
            ].map((item, i) => (
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
      <section id="contact" className="relative bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Get in Touch</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-10" />
            
            <div className="space-y-8 bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFF7ED] text-[#D62828] rounded-xl"><MapPin className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Campus Address</h4>
                  <p className="text-[#0B1F3A]/70 font-light">Kalu Nagar, Dombivli (W)<br/>Thane District, Maharashtra.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFF7ED] text-[#D62828] rounded-xl"><Phone className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Phone</h4>
                  <p className="text-[#0B1F3A]/70 font-light">0251 2495 328</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFF7ED] text-[#D62828] rounded-xl"><Mail className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Email ID</h4>
                  <p className="text-[#0B1F3A]/70 font-light">info@stxaviersschool.in</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="h-full min-h-[400px]">
            {/* Map Placeholder */}
            <div className="w-full h-full min-h-[400px] border-4 border-white bg-gray-200 rounded-[2rem] shadow-xl overflow-hidden relative group">
              <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&h=600&auto=format&fit=crop" alt="Map" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-[#0B1F3A] text-white px-6 py-3 rounded-full font-semibold shadow-2xl flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F59E0B]" /> View on Google Maps
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="bg-[#0B1F3A] pt-24 pb-12 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <SchoolLogo size={56} />
              <span className="font-bold text-xl tracking-tight text-white">St. Xavier&apos;s</span>
            </div>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Educating Students for Success in a Changing World. Shaping the future generations with core human values and academic brilliance.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Academic Curriculum', 'Admissions Form', 'Contact Directory'].map((link, i) => (
                <li key={i}><a href="#" className="text-white/60 hover:text-[#F59E0B] hover:translate-x-1 inline-block transition-transform text-sm font-light">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
              Student Space
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {['E-Learning Portal', 'Event Gallery', 'School Calendar', 'Alumni Network'].map((link, i) => (
                <li key={i}><a href="#" className="text-white/60 hover:text-[#F59E0B] hover:translate-x-1 inline-block transition-transform text-sm font-light">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-[#D62828] -mb-2"></span>
            </h4>
            <p className="text-white/60 font-light text-sm mb-4">Stay updated with latest school news and announcements.</p>
            <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
              <input type="email" placeholder="Email address" className="bg-transparent border-none text-white text-sm outline-none px-4 w-full placeholder:text-white/40" />
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
            <a href="#" className="text-white/40 hover:text-white text-sm font-light transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="text-white/40 hover:text-white text-sm font-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
