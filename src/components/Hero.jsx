import { Award, Phone, Star, Users, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8EA]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#6FBF73]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1E3A5F]/10 bg-white px-4 py-2 text-sm font-bold text-[#1E3A5F] shadow-sm">
              <Star className="text-[#F4B942]" size={16} />
              Trusted Since 1985
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
              Helping Children & Adults Build Strong Reading Skills
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B5563]">
              One-on-one reading tutoring, phonics training, language arts
              support, and individualized learning plans designed to help
              learners succeed with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:3137400004"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B942] px-8 py-4 text-base font-black text-[#1E3A5F] shadow-xl transition hover:-translate-y-1"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1E3A5F] bg-white px-8 py-4 text-base font-black text-[#1E3A5F] transition hover:bg-[#1E3A5F] hover:text-white"
              >
                View Services
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <Award size={24} className="mx-auto mb-2 text-[#F4B942]" />
                <p className="text-xs font-black text-[#1E3A5F]">Certified</p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <Star size={24} className="mx-auto mb-2 text-[#F4B942]" />
                <p className="text-xs font-black text-[#1E3A5F]">Since 1985</p>
              </div>

              <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <Users size={24} className="mx-auto mb-2 text-[#6FBF73]" />
                <p className="text-xs font-black text-[#1E3A5F]">All Ages</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -left-2 top-6 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-black uppercase tracking-wide text-[#1E3A5F]">
                State Certified Teacher
              </p>
            </div>

            <div className="absolute -right-2 top-20 z-20 rounded-2xl bg-[#F4B942] px-4 py-3 shadow-xl">
              <p className="text-xs font-black uppercase tracking-wide text-[#1E3A5F]">
                Since 1985
              </p>
            </div>

            <div className="absolute bottom-6 left-4 z-20 rounded-2xl bg-[#1E3A5F] px-5 py-4 text-white shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                Helping Students
              </p>
              <p className="mt-1 text-lg font-black">
                Build Reading Confidence
              </p>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Child learning and reading"
                className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[500px] lg:h-[620px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}