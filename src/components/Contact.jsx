import { Clock, Phone, UserRound, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF8EA] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F4B942]">
            Hours & Contact
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[#1E3A5F] sm:text-4xl lg:text-5xl">
            Register for Tutoring Today
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <Clock className="mb-5 text-[#F4B942]" size={38} />

            <h3 className="text-2xl font-black text-[#1E3A5F]">
              Tutoring Hours
            </h3>

            <div className="mt-6 space-y-4 text-lg font-bold text-[#1F2933]">
              <p>Monday–Friday: 3:00pm–6:00pm</p>
              <p>Saturday: 10:00am–1:00pm</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1E3A5F] p-8 text-white shadow-xl">
            <UserRound className="mb-5 text-[#F4B942]" size={38} />

            <h3 className="text-2xl font-black">Register Today</h3>

            <div className="mt-6 space-y-4 text-lg font-bold">
              <p>Call: (313) 740-0004</p>
              <p>Ask for Ms. Beverly</p>
              <p className="flex items-center gap-2 text-[#F4B942]">
                <AlertCircle size={20} />
                Limited vacancies available
              </p>
            </div>

            <a
              href="tel:3137400004"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4B942] px-7 py-4 text-base font-black text-[#1E3A5F] shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}