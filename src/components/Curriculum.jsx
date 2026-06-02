import { BookMarked, CheckCircle, Sparkles } from "lucide-react";

import first from "../assets/first.JPG";
import second from "../assets/second.JPG";
import third from "../assets/third.JPG";
import four from "../assets/four.JPG";
import five from "../assets/five.JPG";

const programs = [
  "SFA",
  "Open Court",
  "Project Read",
  "Hooked on Phonics",
  "A.B.E.",
  "Fast Forward Reading",
  "Orton-Gillingham Phonics",
];

const studentPhotos = [first, second, third, four, five];

export default function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute left-0 top-10 h-48 w-48 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#6FBF73]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF8EA] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1E3A5F]">
            <Sparkles size={15} className="text-[#F4B942]" />
            Curriculum & Methods
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#1E3A5F] sm:text-4xl lg:text-5xl">
            Proven Methods That Support Real Reading Growth
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            We support trusted reading, phonics, and educational methods that
            help learners build confidence, strengthen comprehension, and
            improve academic performance.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1E3A5F]/10 bg-[#FFF8EA] p-5 shadow-xl sm:p-7">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3A5F] text-[#F4B942]">
              <BookMarked size={24} />
            </div>

            <div>
              <h3 className="text-xl font-black text-[#1E3A5F]">
                Curriculums We Support
              </h3>
              <p className="text-sm font-semibold text-[#4B5563]">
                Structured support for different learning needs.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm"
              >
                <CheckCircle size={18} className="shrink-0 text-[#6FBF73]" />
                <span className="text-sm font-black text-[#1E3A5F]">
                  {program}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* STUDENT GALLERY */}
        <div className="lg:col-span-2">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF8EA] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1E3A5F]">
              <Sparkles size={15} className="text-[#F4B942]" />
              Student Success Gallery
            </div>

            <h3 className="mt-4 text-3xl font-black text-[#1E3A5F]">
              Learning, Growing & Achieving
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-[#4B5563]">
              Every learner has a unique journey. We are committed to helping
              students build confidence, improve reading skills, and develop a
              lifelong love of learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {studentPhotos.map((photo, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[1.5rem] border border-[#1E3A5F]/10 bg-white shadow-lg"
              >
                <img
                  src={photo}
                  alt={`Student ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#1E3A5F] p-6 text-white shadow-xl sm:p-8 lg:col-span-2">
          <div className="grid items-center gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <h3 className="text-2xl font-black">
              Individualized Learning Plans
            </h3>

            <p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Every student learns differently. Tutoring is customized to match
              the learner’s current abilities, goals, and pace, creating a
              supportive environment for long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}