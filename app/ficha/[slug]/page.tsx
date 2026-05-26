import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLIENTS } from "@/lib/clients";
import PrintButton from "@/components/PrintButton";
import { painPoints } from "@/lib/data/pain-points";
import { caseStudies } from "@/lib/data/case-studies";
import { COMPANY_INTEL } from "@/lib/data/company-intel";

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
    title: `Ficha — ${client.companyName} | Vow Vistos`,
    robots: { index: false, follow: false },
  };
}

const priorityColor: Record<"A" | "B" | "C", string> = {
  A: "#005aff",
  B: "#19736e",
  C: "#606d7b",
};

const priorityLabel: Record<"A" | "B" | "C", string> = {
  A: "PRIORIDADE A — Presença confirmada nos EUA",
  B: "PRIORIDADE B — Alta expansão / Em crescimento",
  C: "PRIORIDADE C — Operador de grande frota",
};

const decisionMakers = [
  "Gerente de O&M / Operations & Maintenance Manager",
  "Diretor de Operações / Director of Operations",
  "Gerente de Projetos Internacionais",
  "Head of International Expansion / Business Development",
  "RH / People Operations (vistos e logística de viagem)",
];

export default async function FichaPage({ params }: Props) {
  const { slug } = await params;
  const client = CLIENTS[slug];
  if (!client) notFound();

  const relevantPainPoints = painPoints.filter((p) =>
    client.painFocus.includes(p.id)
  );
  const relevantCases = caseStudies.filter((c) =>
    client.caseStudySlugs.includes(c.slug)
  );
  const whatsappUrl = `https://wa.me/558531216961?text=${encodeURIComponent(client.whatsappMessage)}`;
  const color = priorityColor[client.priority];
  const intel = COMPANY_INTEL[slug];

  return (
    <>
      <style>{`
        @media print {
          @page { size: A4; margin: 12mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
        }
      `}</style>

      {/* Print button — hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <PrintButton />
        <a
          href={`/para/${slug}`}
          className="bg-white border border-gray-300 text-gray-700 text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Ver página de outreach →
        </a>
      </div>

      {/* Document */}
      <div
        className="min-h-screen bg-white font-sans"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <div className="max-w-[800px] mx-auto px-8 py-8">

          {/* ── Header ──────────────────────────────────────────────── */}
          <div className="flex items-start justify-between mb-6 pb-5 border-b-2" style={{ borderColor: color }}>
            <div>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color }}>
                Ficha de Prospecção — Uso Interno
              </div>
              <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
                {client.companyName}
              </h1>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-sm text-gray-500">{client.companyLocation}</span>
                <span className="text-gray-300">·</span>
                <span className="text-sm text-gray-500">{client.type}</span>
                <span className="text-gray-300">·</span>
                <span className="text-sm text-gray-500">{client.size}</span>
                {client.founded && (
                  <>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm text-gray-500">Fundada {client.founded}</span>
                  </>
                )}
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <div
                className="inline-block text-white text-[10px] font-bold tracking-wide uppercase px-3 py-1.5 rounded"
                style={{ backgroundColor: color }}
              >
                {client.priority === "A" ? "● Prioridade A" : client.priority === "B" ? "◎ Prioridade B" : "○ Prioridade C"}
              </div>
              {client.website && (
                <div className="text-xs text-gray-400 mt-2">{client.website}</div>
              )}
              <div className="text-[10px] text-gray-400 mt-1">
                {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
              </div>
            </div>
          </div>

          {/* ── Priority label ──────────────────────────────────────── */}
          <div
            className="text-[10px] font-semibold tracking-widest uppercase mb-5 px-3 py-1.5 rounded inline-block"
            style={{ backgroundColor: `${color}14`, color }}
          >
            {priorityLabel[client.priority]}
          </div>

          {/* ── Two-column body ─────────────────────────────────────── */}
          <div className="grid grid-cols-[1fr_280px] gap-6">

            {/* Left column */}
            <div className="space-y-5">

              {/* Market signal */}
              {(client.usSignal || client.growthSignal) && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Sinal de Mercado
                  </div>
                  <div
                    className="text-sm text-gray-700 leading-relaxed border-l-2 pl-3 py-0.5"
                    style={{ borderColor: color }}
                  >
                    {client.usSignal || client.growthSignal}
                  </div>
                </div>
              )}

              {/* Pitch angle */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Ângulo de Abordagem
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">{client.pitch}</p>
              </div>

              {/* Pain points */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Dores Prioritárias
                </div>
                <div className="space-y-2">
                  {relevantPainPoints.map((p) => (
                    <div key={p.id} className="flex gap-2.5">
                      <div
                        className="w-1 rounded-full flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: color, minHeight: "100%" }}
                      />
                      <div>
                        <div className="text-xs font-semibold text-gray-800">{p.headline}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{p.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decision makers */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Contatos-Alvo
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {decisionMakers.map((dm) => (
                    <span
                      key={dm}
                      className="text-[10px] border rounded px-2 py-0.5 text-gray-600"
                      style={{ borderColor: "#dee2e6" }}
                    >
                      {dm}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Notas do Comercial
                </div>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-gray-200 pb-1 h-6" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5">

              {/* Cases */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Cases Relevantes
                </div>
                <div className="space-y-3">
                  {relevantCases.map((c) => (
                    <div
                      key={c.id}
                      className="border rounded-lg p-3"
                      style={{ borderColor: "#dee2e6" }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded"
                          style={{ backgroundColor: `${color}14`, color }}
                        >
                          {c.tag}
                        </span>
                        <span className="text-[9px] text-gray-400">{c.route}</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">{c.stat}</div>
                      <div className="text-[9px] text-gray-500 uppercase tracking-wide font-medium mb-1.5">
                        {c.statLabel}
                      </div>
                      <p className="text-[10px] text-gray-600 leading-relaxed">{c.outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company intel — contact + people */}
              {intel && (intel.phone || intel.email || intel.address || intel.addressUSA || intel.keyPeople?.length) && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Inteligência da Empresa
                  </div>
                  <div className="space-y-1.5">
                    {intel.phone && (
                      <div className="flex gap-1.5 text-[10px] text-gray-700">
                        <span className="font-semibold text-gray-400 flex-shrink-0">Tel</span>
                        <span>{intel.phone}</span>
                        {intel.phone2 && <span>/ {intel.phone2}</span>}
                      </div>
                    )}
                    {intel.email && (
                      <div className="flex gap-1.5 text-[10px] text-gray-700">
                        <span className="font-semibold text-gray-400 flex-shrink-0">Email</span>
                        <span>{intel.email}</span>
                      </div>
                    )}
                    {intel.address && (
                      <div className="flex gap-1.5 text-[10px] text-gray-700">
                        <span className="font-semibold text-gray-400 flex-shrink-0">BR</span>
                        <span>{intel.address}</span>
                      </div>
                    )}
                    {intel.addressUSA && (
                      <div className="flex gap-1.5 text-[10px] text-gray-700">
                        <span className="font-semibold text-gray-400 flex-shrink-0">USA</span>
                        <span>{intel.addressUSA}</span>
                      </div>
                    )}
                  </div>
                  {intel.keyPeople && intel.keyPeople.length > 0 && (
                    <div className="mt-2.5 space-y-1">
                      <div className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                        Pessoas-Chave Identificadas
                      </div>
                      {intel.keyPeople.map((p) => (
                        <div key={p.name} className="text-[10px] text-gray-700 leading-snug">
                          <span className="font-semibold">{p.name}</span>
                          <span className="text-gray-400"> — {p.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Company facts from intel */}
              {intel && intel.companyFacts && intel.companyFacts.length > 0 && (
                <div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                    Dados da Empresa
                  </div>
                  <ul className="space-y-1">
                    {intel.companyFacts.map((fact, i) => (
                      <li key={i} className="flex gap-1.5 text-[10px] text-gray-700">
                        <span style={{ color }} className="flex-shrink-0">—</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outreach actions */}
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                  Ações de Outreach
                </div>
                <div className="space-y-2">
                  <a
                    href={whatsappUrl}
                    className="flex items-center gap-2 text-xs text-gray-700 hover:text-gray-900"
                  >
                    <span className="text-base">📱</span>
                    <span>WhatsApp Guilherme</span>
                  </a>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-base">🔗</span>
                    <span>LinkedIn: &quot;Gerente O&M {client.companyName}&quot;</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-base">📧</span>
                    <span>contato@vowvistos.com</span>
                  </div>
                  {(intel?.website ?? client.website) && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-base">🌐</span>
                      <span>{intel?.website ?? client.website}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Vow Vistos hook */}
              <div
                className="rounded-lg p-3 text-white text-xs leading-relaxed"
                style={{ backgroundColor: color }}
              >
                <div className="text-[9px] font-bold uppercase tracking-widest mb-1.5 opacity-80">
                  Argumento-chave
                </div>
                <p className="opacity-95">
                  &ldquo;Cada dia que uma turbina fica parada esperando um técnico preso na fila do visto custa dezenas de milhares ao seu cliente. A Vow Vistos não processa vistos — gerencia sua operação de crew mobilization.&rdquo;
                </p>
              </div>

              {/* Page URL */}
              <div
                className="rounded-lg p-3 text-xs"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Página personalizada para envio
                </div>
                <div className="font-mono text-gray-700 break-all">
                  vowvistos.com/para/{slug}
                </div>
              </div>
            </div>
          </div>

          {/* ── Footer ──────────────────────────────────────────────── */}
          <div
            className="mt-6 pt-4 border-t flex items-center justify-between"
            style={{ borderColor: "#dee2e6" }}
          >
            <div className="text-[9px] text-gray-400 uppercase tracking-widest">
              Vow Vistos — Documento interno. Não distribuir.
            </div>
            <div className="text-[9px] text-gray-400">
              vowvistos.com · contato@vowvistos.com · +55 85 3121-6961
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
