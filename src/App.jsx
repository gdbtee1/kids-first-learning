import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import MobileCallButton from "./components/MobileCallButton";

export default function App() {
  return (
    <>
      <main className="bg-[#FFF8EA] text-[#1F2933]">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Curriculum />
        <Contact />
        <FinalCTA />
      </main>

      <MobileCallButton />
    </>
  );
}