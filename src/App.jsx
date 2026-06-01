import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import MobileCallButton from "./components/MobileCallButton";
import BrandBanner from "./components/BrandBanner";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <main className="bg-[#FFF8EA] pb-24 text-[#1F2933] md:pb-0">
        <BrandBanner />
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