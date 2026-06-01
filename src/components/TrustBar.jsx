import {
  Award,
  BookOpen,
  Users,
  ClipboardCheck,
} from "lucide-react";

const items = [
  {
    icon: Award,
    title: "State Certified Teacher",
  },
  {
    icon: BookOpen,
    title: "Orton-Gillingham Trained",
  },
  {
    icon: Users,
    title: "Children, Teens & Adults",
  },
  {
    icon: ClipboardCheck,
    title: "Individual Learning Plans",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-[#1E3A5F]/5">
          <div className="grid divide-y divide-[#E5E7EB] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 p-6 transition-all duration-300 hover:bg-[#FFF8EA]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1E3A5F] text-[#F4B942] shadow-md">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black leading-snug text-[#1E3A5F]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}