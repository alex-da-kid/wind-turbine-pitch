import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import Differentiator from "@/components/sections/Differentiator";
import HowItWorks from "@/components/sections/HowItWorks";
import Commitment from "@/components/sections/Commitment";
import CaseStudies from "@/components/sections/CaseStudies";
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <CaseStudies />
        <PainPoints />
        <Solutions />
        <Differentiator />
        <HowItWorks />
        <Commitment />
        <Testimonials />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
