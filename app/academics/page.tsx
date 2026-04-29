import { Book, CheckCircle2, Palette } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function AcademicsPage() {
  return (
    <main className="bg-white overflow-hidden">
      <PageHero
        title="Academics"
        subtitle="A strong academic framework with activity-based learning and board-oriented preparation."
        primaryAction={{ label: 'Admissions', href: '/admissions' }}
        secondaryAction={{ label: 'Contact Us', href: '/contact' }}
      />

      <section className="py-32 bg-[#0B1F3A] text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Academic Structure</h2>
            <div className="h-1 w-24 bg-[#F59E0B] rounded-full mb-6" />
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              A strong academic framework with activity-based learning and board-oriented preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-[#D62828] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#D62828]/20">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Primary Section</h3>
              <p className="text-[#F59E0B] font-medium tracking-wide text-sm mb-8 uppercase">Std 1 – 7</p>
              <ul className="space-y-5">
                {[
                  'Strong foundation in core subjects: English, Mathematics, EVS, Basic Science',
                  'Activity-based learning with models, charts, group learning, stories, songs, and games',
                  'Reading & writing skills development with structured reading and daily writing practice',
                  'Digital audio-visual learning using smart boards and educational videos',
                  'Continuous evaluation: tests, worksheets, projects, and oral assessments',
                  'Life skills & values: hygiene, manners, discipline, sharing, and teamwork',
                  'Co-curricular activities: drawing, craft, singing, dancing, elocution, and physical activities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-[#D62828] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#D62828]/20">
                <Book className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Secondary Section</h3>
              <p className="text-[#F59E0B] font-medium tracking-wide text-sm mb-8 uppercase">Std 8 – 10</p>
              <ul className="space-y-5">
                {[
                  'Strong academics framework: Maths, Science, English, Marathi, Hindi, Social Science',
                  'Exam & board preparation: unit tests, semester exams, preboard exams, extra classes and practice papers',
                  'Conceptual & application-based learning with experiments, projects, and real-life examples',
                  'Subject-wise expert teachers with individual attention for weak students',
                  'Digital classroom support: smart boards and animated explanations',
                  'Regular homework & assessments with monthly tests and structured homework plan',
                  'Career awareness & guidance sessions after 10th, motivation and study-skill workshops',
                  'Co-scholastic development: debate, quiz, elocution, science exhibitions, sports, yoga, fitness',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="font-light text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-[#0B1F3A]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1F3A] mb-4">SSC Toppers</h2>
            <div className="h-1 w-24 bg-[#D62828] rounded-full mb-6" />
            <p className="text-lg text-[#0B1F3A]/70 leading-relaxed font-light">St. Xavier&apos;s English High School</p>
          </div>

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
                  { year: '2013', name: 'PARKAR SIDDHI SADANAND', position: 'I', percentage: '82.60%' },
                  { year: '2013', name: 'POOJARY AKHILESH RAMAPPA', position: 'II', percentage: '80.73%' },
                  { year: '2013', name: 'CHAUDHARY RAKESH RAJENDRA', position: 'III', percentage: '80.18%' },
                  { year: '2014', name: 'SRIVASTAV SUJATA PRABHARAMAN', position: 'I', percentage: '89.20%' },
                  { year: '2014', name: 'NARVEKAR NAMIT NAVNATH', position: 'II', percentage: '84.40%' },
                  { year: '2014', name: 'RAVTE PRASANA SANDIP', position: 'III', percentage: '82.20%' },
                  { year: '2015', name: 'SHETTY SURAKSHA SURESH', position: 'I', percentage: '90.60%' },
                  { year: '2015', name: 'POOJARY NIKITA KRISHNA', position: 'II', percentage: '83.40%' },
                  { year: '2015', name: 'SHETTY VINYAS VISHWANATH', position: 'III', percentage: '87.40%' },
                  { year: '2016', name: 'POOJARY PREETI SHASHINDRA', position: 'I', percentage: '91.40%' },
                  { year: '2016', name: 'GHAG SIDDHI DINESH', position: 'II', percentage: '90.60%' },
                  { year: '2016', name: 'NAIK DEEPIKA SURENDRA', position: 'III', percentage: '90.00%' },
                  { year: '2017', name: 'PANDA SUSHIL LAXMAN', position: 'I', percentage: '89.40%' },
                  { year: '2017', name: 'NIVEDAN RAMPRASAD', position: 'II', percentage: '86.60%' },
                  { year: '2017', name: 'SHARMA DEVENSHI RAJENDRA', position: 'III', percentage: '85.40%' },
                  { year: '2018', name: 'PADALKAR CHAITALI PRAVIN', position: 'I', percentage: '93.80%' },
                  { year: '2018', name: 'BORA PRIYANKA NARENDRA', position: 'II', percentage: '92.40%' },
                  { year: '2018', name: 'KOTIAN DEEPA JAYRAM', position: 'III', percentage: '90.60%' },
                  { year: '2018', name: 'THAKUR AKASHAY BHIM', position: 'III', percentage: '90.60%' },
                  { year: '2019', name: 'DESHMUKH ROHIT SUHAS', position: 'I', percentage: '89%' },
                  { year: '2019', name: 'CHAVAN DARSHAN SADHYRANI', position: 'II', percentage: '86.20%' },
                  { year: '2019', name: 'WAGHDHARE VAIBHAVI DINESH', position: 'III', percentage: '85.60%' },
                  { year: '2020', name: 'MANNA PIYUSH ASTO', position: 'I', percentage: '96.00%' },
                  { year: '2020', name: 'SAWANT RASIKA DEEPAK', position: 'II', percentage: '94.80%' },
                  { year: '2020', name: 'RANGANKAR SRUSHTI SHAILENDRA', position: 'III', percentage: '90%' },
                  { year: '2021', name: 'PAWAR PURVANJALI HANUMANT', position: 'I', percentage: '93.60%' },
                  { year: '2021', name: 'POOJARY RAKSHITA SHEKHAR', position: 'II', percentage: '91.80%' },
                  { year: '2021', name: 'GUPTA TANISHA NATWARLAL', position: 'III', percentage: '91.00%' },
                  { year: '2022', name: 'TIWARI SAKSHI VEDPRAKASH', position: 'I', percentage: '94.60%' },
                  { year: '2022', name: 'BORHADE KRUSHALI GANESH', position: 'II', percentage: '92.80%' },
                  { year: '2022', name: 'PANDA SHUBHAM BHAGABAN', position: 'III', percentage: '92.20%' },
                  { year: '2023', name: 'GUPTA OMKAR GAJANAN', position: 'I', percentage: '91.80%' },
                  { year: '2023', name: 'POOJARY SHAMITH SURESH', position: 'II', percentage: '91.60%' },
                  { year: '2023', name: 'CHAVAN DAKSHA VIJAY', position: 'III', percentage: '90.60%' },
                  { year: '2024', name: 'MANDAL VIKRANT BUDDHISWAR', position: 'I', percentage: '92.20%' },
                  { year: '2024', name: 'PADALKAR KHYATI PRAVIN', position: 'II', percentage: '91.80%' },
                  { year: '2024', name: 'LAD MEET MADAN', position: 'III', percentage: '91.60%' },
                  { year: '2025', name: 'GUPTA PRASHANT NATWARLAL', position: 'I', percentage: '92.60%' },
                  { year: '2025', name: 'SINKAR SWARNGEE GITESH', position: 'II', percentage: '91.40%' },
                  { year: '2025', name: 'PARAB TANISHKA VINAYAK', position: 'III', percentage: '91.00%' },
                  { year: '2025', name: 'POKHRIYAL AYUSH RAKESH', position: 'III', percentage: '91.00%' },
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
    </main>
  );
}
