import { Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Contact"
        subtitle="We’re here to help. Reach out for admissions, academics, or general queries."
        primaryAction={{ label: 'Admissions', href: '/admissions' }}
        secondaryAction={{ label: 'View Gallery', href: '/gallery' }}
      />

      <section className="relative bg-[#FFEDED]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">Get in Touch</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-10" />

            <div className="space-y-8 bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgb(11,31,58,0.05)]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Campus Address</h4>
                  <p className="text-[#0B1F3A]/70 font-light">
                    Kalu Nagar, Dombivli (W)
                    <br />
                    Thane District, Maharashtra.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Phone</h4>
                  <p className="text-[#0B1F3A]/70 font-light">0251 2495 328</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FFEDED] text-[#D62828] rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] mb-1">Email ID</h4>
                  <p className="text-[#0B1F3A]/70 font-light">info@stxaviersschool.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[400px]">
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
          </div>
        </div>
      </section>
    </main>
  );
}
