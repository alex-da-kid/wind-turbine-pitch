import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLIENTS } from "@/lib/clients";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solutions from "@/components/sections/Solutions";
import Differentiator from "@/components/sections/Differentiator";
import HowItWorks from "@/components/sections/HowItWorks";
import Commitment from "@/components/sections/Commitment";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import Authority from "@/components/sections/Authority";
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

export default async function ClientPage({ params }: Props) {
  const { slug } = await params;
  const client = CLIENTS[slug];
  if (!client) notFound();

  const whatsappUrl = `https://wa.me/558531216961?text=${encodeURIComponent(client.whatsappMessage)}`;

  return (
    <>
      <Header />
      <main>
        <Hero
          tag={client.heroTag}
          headline={client.heroHeadline}
          subheadline={client.heroSubheadline}
        />
        <Authority />
        <CaseStudies />
        <PainPoints />
        <Solutions />
        <Differentiator />
        <HowItWorks />
        <Commitment />
        <Testimonials />
        <Team />
        <FinalCTA whatsappUrl={whatsappUrl} />
      </main>
      <Footer />
    </>
  );
}
