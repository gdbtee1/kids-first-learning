import { Phone } from "lucide-react";

export default function MobileCallButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 md:hidden">
      <a
        href="tel:3137400004"
        className="flex items-center justify-center gap-2 rounded-full bg-[#F4B942] px-6 py-4 text-base font-black text-[#1E3A5F] shadow-2xl"
      >
        <Phone size={20} />
        Call Now: (313) 740-0004
      </a>
    </div>
  );
}