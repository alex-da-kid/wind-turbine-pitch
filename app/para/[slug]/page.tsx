import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLIENTS } from "@/lib/clients";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import Differentiator from "@/components/sections/Differentiator";
import HowItWorks from "@/components/sections/HowItWorks";
import Commitment from "@/components/sections/Commitment";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FinalCTA from "@/components/sections/FinalCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CLIENTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = CLIENTS[slug];
  if (!client) return {};
  return {
    title: client.metaTitle,
    description: client.metaDescription,
    robots: { index: false, follow: false },
  };
}

const priorityLabel: Record<"A" | "B" | "C", string> = {
  A: "Operações ativas nos EUA",
  B: "Expansão para o mercado americano",
  C: "Parceria estratégica de mobilização",
};

export default async function ClientPage({ params }: Props) {
  const { slug } = await params;
  const client = CLIENTS[slug];
  if (!client) notFound();

  const whatsappUrl = `https://wa.me/558531216961?text=${encodeURIComponent(client.whatsappMessage)}`;

  return (
    <>
      <Header />
      <main>
        {/* 1. Hero — personalized */}
        <Hero
          tag={client.heroTag}
          headline={client.heroHeadline}
          subheadline={client.heroSubheadline}
        />

        {/* 2. Pitch — why we're reaching out */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start gap-10">
              {/* Left: label + company info */}
              <div className="md:w-64 flex-shrink-0">
                <span className="text-vow-primary text-xs font-semibold tracking-widest uppercase block mb-3">
                  Por que entramos em contato
                </span>
                <div className="border-l-2 border-vow-primary/20 pl-4">
                  <p className="text-vow-text font-medium text-sm">{client.companyName}</p>
                  <p className="text-vow-muted text-xs mt-0.5">{client.companyLocation}</p>
                  <span className="inline-block mt-2 bg-vow-primary/8 text-vow-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                    {priorityLabel[client.priority]}
                  </span>
                </div>
              </div>

              {/* Right: pitch copy */}
              <div className="flex-1">
                <p className="text-vow-text text-xl md:text-2xl font-light leading-relaxed">
                  {client.pitch}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client logos — social proof */}
        <Authority />

        {/* 4. Pain points */}
        <PainPoints />

        {/* 5. Solutions — O que fazemos */}
        <Solutions />

        {/* 6. Differentiator — Nosso diferencial */}
        <Differentiator />

        {/* 7. How it works */}
        <HowItWorks />

        {/* 8. Commitment — Nosso Modelo */}
        <Commitment />

        {/* 9. Relevant case studies */}
        <CaseStudies slugs={client.caseStudySlugs} />

        {/* 10. Testimonials */}
        <Testimonials />

        {/* 11. Team */}
        <Team />

        {/* 12. Personalized CTA */}
        <FinalCTA whatsappUrl={whatsappUrl} />
      </main>
      <Footer />
    </>
  );
}
