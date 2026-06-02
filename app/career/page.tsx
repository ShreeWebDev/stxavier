import { Briefcase, FileText, Mail, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';

type PageProps = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CareerPage({ searchParams }: PageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const getParam = (key: string) => {
    const value = resolvedSearchParams[key];
    if (Array.isArray(value)) return value[0];
    return value;
  };
  const success = getParam('success') === '1';
  const error = getParam('error') === '1';

  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Careers"
        subtitle="Join our teaching team. Submit your details and resume to apply for teaching opportunities at St. Xavier’s."
        primaryAction={{ label: 'Apply Now', href: '/career#apply' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />

      <section id="apply" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="mb-10 max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">
                    Teacher Application
                  </h2>
                  <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6" />
                  <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">
                    We’re looking for dedicated educators who believe in strong values, structured learning, and student
                    growth.
                  </p>
                </div>

                <div className="bg-[#FFEDED] rounded-[2rem] p-8 md:p-10 border border-[#0B1F3A]/5 shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white text-[#D62828] rounded-xl border border-[#0B1F3A]/5">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1F3A]">What to include</h3>
                      <ul className="mt-4 space-y-3 text-[#0B1F3A]/70 font-light">
                        <li className="flex items-start gap-3">
                          <div className="mt-2 w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                          <span>Accurate contact details</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-2 w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                          <span>Resume (PDF/DOC/DOCX)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-2 w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                          <span>Relevant teaching experience (if any)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 grid sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:info@stxavierenglishschool.in"
                      className="bg-white rounded-2xl p-5 border border-[#0B1F3A]/10 hover:bg-[#0B1F3A] hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-[#D62828] group-hover:text-white" />
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-sm font-light text-[#0B1F3A]/70 group-hover:text-white/70">
                            info@stxavierenglishschool.in
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="tel:02512495328"
                      className="bg-white rounded-2xl p-5 border border-[#0B1F3A]/10 hover:bg-[#0B1F3A] hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-[#D62828] group-hover:text-white" />
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-sm font-light text-[#0B1F3A]/70 group-hover:text-white/70">0251 2495 328</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {success ? (
                <div className="mb-8 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 px-6 py-5 text-emerald-900">
                  <p className="font-semibold">Application submitted successfully.</p>
                  <p className="mt-1 text-sm text-emerald-900/80 font-light">
                    Thank you. Our team will review your application and contact you if shortlisted.
                  </p>
                </div>
              ) : null}
              {error ? (
                <div className="mb-8 rounded-[1.5rem] border border-red-200 bg-red-50 px-6 py-5 text-red-900">
                  <p className="font-semibold">Could not submit your application.</p>
                  <p className="mt-1 text-sm text-red-900/80 font-light">
                    Please try again, or email your resume to info@stxavierenglishschool.in.
                  </p>
                </div>
              ) : null}

              <div className="rounded-[2.5rem] border border-[#0B1F3A]/10 bg-white shadow-[0_20px_50px_rgb(11,31,58,0.05)] overflow-hidden">
                <div className="px-8 md:px-10 py-8 bg-[#0B1F3A] text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Apply for Teaching</h3>
                      <p className="text-white/75 font-light mt-1">All fields marked with * are required.</p>
                    </div>
                  </div>
                </div>

                <div className="px-8 md:px-10 py-10">
                  <form action="/api/career" method="post" encType="multipart/form-data" className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                          Full Name<span className="text-[#D62828]">*</span>
                        </label>
                        <input
                          name="fullName"
                          required
                          autoComplete="name"
                          className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-white px-5 py-4 text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 focus:outline-none focus:ring-2 focus:ring-[#D62828]/30 focus:border-[#D62828]/40"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                          Email<span className="text-[#D62828]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-white px-5 py-4 text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 focus:outline-none focus:ring-2 focus:ring-[#D62828]/30 focus:border-[#D62828]/40"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                          Phone<span className="text-[#D62828]">*</span>
                        </label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          name="phone"
                          required
                          pattern="^[0-9]{10}$"
                          maxLength={10}
                          autoComplete="tel"
                          className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-white px-5 py-4 text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 focus:outline-none focus:ring-2 focus:ring-[#D62828]/30 focus:border-[#D62828]/40"
                          placeholder="10 digit number"
                        />
                        <p className="mt-2 text-xs text-[#0B1F3A]/55 font-light">Enter 10 digits without spaces.</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">
                        Resume Upload<span className="text-[#D62828]">*</span>
                      </label>
                      <input
                        type="file"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="w-full rounded-2xl border border-[#0B1F3A]/15 bg-white px-5 py-4 text-[#0B1F3A] file:mr-4 file:rounded-xl file:border-0 file:bg-[#FFEDED] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0B1F3A] hover:file:bg-[#D62828] hover:file:text-white"
                      />
                      <p className="mt-2 text-xs text-[#0B1F3A]/55 font-light">
                        Accepted formats: PDF, DOC, DOCX. Max size: 5 MB.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#D62828] text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-[#0B1F3A] transition-all duration-300 shadow-[0_0_40px_rgba(214,40,40,0.25)]"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
