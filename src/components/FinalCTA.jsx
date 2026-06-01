import { Phone, ArrowRight, Star } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A5F] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#6FBF73]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1E3A5F] via-[#24466f] to-[#2F5B8C] p-8 shadow-2xl sm:p-12 lg:p-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.15em] text-[#F4B942] backdrop-blur">
              <Star size={15} />
              Start Today
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reading Is The Key To Success In Every Subject
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              Give your child the confidence, skills, and support they need to
              become a stronger reader and learner. Personalized tutoring is
              available for children, teens, and adults.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:3137400004"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B942] px-8 py-4 text-base font-black text-[#1E3A5F] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Phone size={18} />
                Call (313) 740-0004
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-black text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-[#1E3A5F]"
              >
                View Services
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                State Certified Teacher
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                Since 1985
              </div>

              <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                Children & Adults
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}