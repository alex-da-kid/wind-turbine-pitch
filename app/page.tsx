import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import Differentiator from "@/components/sections/Differentiator";
import HowItWorks from "@/components/sections/HowItWorks";
import ProblemsWePrevented from "@/components/sections/ProblemsWePrevented";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Authority from "@/components/sections/Authority";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Differentiator />
        <HowItWorks />
        <ProblemsWePrevented />
        <CaseStudies />
        <Testimonials />
        <Authority />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
