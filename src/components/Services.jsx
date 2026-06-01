import {
  BookOpen,
  ClipboardCheck,
  FileCheck,
  GraduationCap,
  Users,
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "One-on-One Reading Tutoring",
    text: "Personal reading support designed around each student’s current skill level, confidence, and learning needs.",
    featured: true,
  },
  {
    icon: ClipboardCheck,
    title: "Phonics Skills Testing",
    text: "Targeted phonics testing to identify strengths, gaps, and the best path forward.",
  },
  {
    icon: FileCheck,
    title: "Pre & Post Reading Assessments",
    text: "Clear assessments to measure reading growth before and after tutoring support.",
  },
  {
    icon: GraduationCap,
    title: "Language Arts Support",
    text: "Help with reading comprehension, vocabulary, writing, grammar, and classroom skills.",
  },
  {
    icon: Users,
    title: "Adult Basic Education",
    text: "Supportive instruction for adults working to improve reading and foundational skills.",
  },
  {
    icon: Calculator,
    title: "Math Tutoring: Pre-K–6th Grade",
    text: "Early math support to help students build confidence with foundational math concepts.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#6FBF73]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF8EA] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1E3A5F]">
            <Sparkles size={15} className="text-[#F4B942]" />
            Tutoring Services
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#1E3A5F] sm:text-4xl lg:text-5xl">
            Reading & Tutoring Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Personalized support for children, teens, and adults who need stronger
            reading, phonics, language arts, or foundational math skills.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                  service.featured
                    ? "border-[#1E3A5F] bg-[#1E3A5F] text-white md:col-span-2 lg:col-span-1"
                    : "border-[#1E3A5F]/10 bg-[#FFF8EA] text-[#1F2933] hover:bg-white"
                }`}
              >
                {service.featured && (
                  <div className="absolute right-5 top-5 rounded-full bg-[#F4B942] px-3 py-1 text-xs font-black text-[#1E3A5F]">
                    Most Requested
                  </div>
                )}

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition group-hover:scale-105 sm:h-16 sm:w-16 ${
                    service.featured
                      ? "bg-[#F4B942] text-[#1E3A5F]"
                      : "bg-[#1E3A5F] text-[#F4B942]"
                  }`}
                >
                  <Icon size={28} />
                </div>

                <h3
                  className={`max-w-[15rem] text-xl font-black leading-tight ${
                    service.featured ? "text-white" : "text-[#1E3A5F]"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 sm:text-base ${
                    service.featured ? "text-white/80" : "text-[#4B5563]"
                  }`}
                >
                  {service.text}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 text-sm font-black ${
                    service.featured ? "text-[#F4B942]" : "text-[#1E3A5F]"
                  }`}
                >
                  Learn more
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}