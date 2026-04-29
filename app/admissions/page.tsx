import { ChevronRight, FolderOpen, Mail, Phone, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function AdmissionsPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Admissions"
        subtitle="Documents and important notes for the admission process."
        primaryAction={{ label: 'Contact Admissions', href: '/contact' }}
        secondaryAction={{ label: 'View Academics', href: '/academics' }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Admission Details</h2>
                <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6" />
                <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">
                  Please keep the following documents ready. For help, reach out via phone or email.
                </p>
              </div>

              <div className="bg-[#FFEDED] rounded-[2rem] p-8 md:p-12 mb-8">
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-6 flex items-center gap-3">
                  <FolderOpen className="w-6 h-6 text-[#D62828]" /> Required Documents
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Birth Certificate (coloured photocopy) – Std I',
                    'Previous class marksheet (original) – Std II onwards',
                    'School Leaving Certificate (S.L.C.) (original) – Std II onwards',
                    'Aadhaar cards of student and parents',
                    'Valid proof of residence',
                    'Photos: 1 passport + 2 copies (1.7 cm × 2.0 cm)',
                    'N.O.C. (for local school transfers, where applicable)',
                    'Education Officer counter-signature (change of State/District, where applicable)',
                  ].map((doc) => (
                    <div
                      key={doc}
                      className="bg-white px-5 py-4 rounded-xl border border-[#0B1F3A]/5 shadow-sm flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="text-[#0B1F3A]/80 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#0B1F3A]/10 rounded-[2rem] p-8 md:p-10 mb-8">
                <h4 className="text-xl font-bold text-[#0B1F3A] mb-4">Important Notes</h4>
                <ul className="space-y-3">
                  {[
                    'Admissions from Std. II onwards are provisional until the School Leaving Certificate (S.L.C.) is submitted.',
                    'Last date for S.L.C. submission is 30th June; management reserves the right to cancel admission if not submitted within time.',
                    'Within Maharashtra: S.L.C. should be in Government of Maharashtra prescribed format.',
                    'UDISE (Primary): 27210607203 • UDISE (Secondary): 27210607206 • Secondary Index No.: S1617208',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#0B1F3A]/70 font-light">
                      <div className="mt-2 w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="mailto:info@stxaviersschool.in"
                  className="flex-1 border border-[#0B1F3A]/10 rounded-2xl p-6 flex flex-col justify-center gap-2 hover:bg-[#0B1F3A] hover:border-[#0B1F3A] hover:text-white transition-all group cursor-pointer"
                >
                  <Mail className="w-6 h-6 text-[#D62828]" />
                  <span className="font-semibold text-lg">Email Us</span>
                  <span className="font-light group-hover:text-white/70">info@stxaviersschool.in</span>
                </a>
                <a
                  href="tel:02512495328"
                  className="flex-1 border border-[#0B1F3A]/10 rounded-2xl p-6 flex flex-col justify-center gap-2 hover:bg-[#0B1F3A] hover:border-[#0B1F3A] hover:text-white transition-all group cursor-pointer"
                >
                  <Phone className="w-6 h-6 text-[#D62828]" />
                  <span className="font-semibold text-lg">Call Us</span>
                  <span className="font-light group-hover:text-white/70">0251 2495 328</span>
                </a>
              </div>

              <button className="mt-8 w-full bg-[#0B1F3A] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#D62828] transition-colors shadow-xl">
                Download Application Form
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full border border-[#0B1F3A]/10 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden bg-white shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
                <div className="w-32 h-32 absolute -top-16 -right-16 bg-[#F59E0B] rounded-full opacity-10 blur-2xl" />

                <ShieldCheck className="w-12 h-12 text-[#D62828] mb-6" />
                <h3 className="text-3xl font-bold text-[#0B1F3A] mb-4">Exams & Scholarships</h3>
                <p className="text-[#0B1F3A]/60 font-light mb-10 leading-relaxed">
                  Students are encouraged to participate in important examinations and competitions to build confidence and achieve recognition.
                </p>

                <div className="space-y-4 flex-grow">
                  {[
                    { title: 'Homi Bhabha Exam', cat: 'Science' },
                    { title: 'Mental Maths Exam', cat: 'Mathematics' },
                    { title: 'English State Grammar Exam', cat: 'English' },
                    { title: 'Scholarship Exam', cat: 'Scholarship' },
                    { title: 'Elementary & Intermediate Drawing Exam', cat: 'Drawing' },
                  ].map((exam) => (
                    <div
                      key={exam.title}
                      className="group flex items-center justify-between border-b border-[#0B1F3A]/5 pb-4 last:border-0 hover:bg-[#FFEDED] -mx-4 px-4 py-2 rounded-lg transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-[#0B1F3A]">{exam.title}</p>
                        <p className="text-xs text-[#F59E0B] font-medium tracking-wider uppercase mt-1">{exam.cat}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#0B1F3A]/30 group-hover:text-[#D62828]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
