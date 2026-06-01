import { CheckCircle, Phone } from "lucide-react";

const reasons = [
  "Personalized learning plans matched to each student’s ability",
  "High-interest learning activities and materials",
  "Reading and Language Arts support aligned with Common Core Standards",
  "Professional instruction from a licensed teacher",
  "Support for children, teens, and adults",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#1E3A5F] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F4B942]">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Families Choose Kids First
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/75">
            A caring, professional tutoring experience focused on building
            confidence, improving reading skills, and helping every learner grow.
          </p>

          <a
            href="tel:3137400004"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B942] px-7 py-4 text-base font-black text-[#1E3A5F] shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            <Phone size={20} />
            Register Today
          </a>
        </div>

        <div className="rounded-[2rem] bg-white/10 p-5 backdrop-blur">
          <div className="space-y-4 rounded-[1.5rem] bg-white p-6 shadow-2xl">
            {reasons.map((reason) => (
              <div key={reason} className="flex gap-4">
                <CheckCircle
                  className="mt-1 shrink-0 text-[#6FBF73]"
                  size={23}
                />
                <p className="text-base font-bold leading-7 text-[#1F2933]">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}