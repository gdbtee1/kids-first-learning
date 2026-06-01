import { GraduationCap, Star } from "lucide-react";

export default function BrandBanner() {
  return (
    <section className="relative overflow-hidden bg-[#1E3A5F]">
      <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#6FBF73]/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#F4B942] shadow-xl">
          <GraduationCap
            size={34}
            className="text-[#1E3A5F]"
          />
        </div>

        <div className="flex items-center gap-2 text-[#F4B942]">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
        </div>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Kids First
        </h1>

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
          Educational Learning Centers
        </p>
      </div>
    </section>
  );
}