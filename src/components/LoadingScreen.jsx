import { GraduationCap } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#FFF8EA]">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#F4B942]/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#6FBF73]/20 blur-3xl" />

      <div className="relative text-center">
        <div className="mx-auto flex h-24 w-24 animate-pulse items-center justify-center rounded-[2rem] bg-[#1E3A5F] shadow-2xl">
          <GraduationCap
            size={52}
            className="text-[#F4B942]"
          />
        </div>

        <h1 className="mt-8 text-5xl font-black tracking-tight text-[#1E3A5F]">
          Kids First
        </h1>

        <p className="mt-2 text-sm font-bold uppercase tracking-[0.35em] text-[#1E3A5F]/60">
          Educational Learning Centers
        </p>

        <div className="mx-auto mt-8 h-1 w-56 overflow-hidden rounded-full bg-white shadow">
          <div className="h-full w-full animate-[loading_1.8s_ease-in-out_infinite] rounded-full bg-[#F4B942]" />
        </div>

        <p className="mt-6 text-sm font-semibold text-[#1E3A5F]/70">
          Building Reading Confidence...
        </p>
      </div>
    </div>
  );
}