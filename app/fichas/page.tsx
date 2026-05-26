import type { Metadata } from "next";
import Link from "next/link";
import { CLIENTS, type ClientData } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Fichas de Prospecção | Vow Vistos",
  robots: { index: false, follow: false },
};

const priorityColor: Record<"A" | "B" | "C", string> = {
  A: "#005aff",
  B: "#19736e",
  C: "#606d7b",
};

const priorityLabel: Record<"A" | "B" | "C", string> = {
  A: "Prioridade A",
  B: "Prioridade B",
  C: "Prioridade C",
};

const priorityDescription: Record<"A" | "B" | "C", string> = {
  A: "Presença confirmada nos EUA",
  B: "Alta expansão / Em crescimento",
  C: "Operador de grande frota",
};

function groupByPriority(clients: Record<string, ClientData>) {
  const groups: Record<"A" | "B" | "C", ClientData[]> = { A: [], B: [], C: [] };
  for (const client of Object.values(clients)) {
    groups[client.priority].push(client);
  }
  return groups;
}

export default function FichasIndexPage() {
  const groups = groupByPriority(CLIENTS);
  const total = Object.keys(CLIENTS).length;

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "DM Sans, sans-serif" }}>

      {/* Header */}
      <div className="bg-[#1f3144] text-white px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
            Uso interno — Vow Vistos
          </div>
          <h1 className="text-3xl font-light text-white mb-1">Fichas de Prospecção</h1>
          <p className="text-white/60 text-sm">
            {total} empresas · Setor eólico brasileiro · Atualizado em{" "}
            {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-10 space-y-12">
        {(["A", "B", "C"] as const).map((priority) => (
          <div key={priority}>
            {/* Group header */}
            <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-gray-200">
              <span
                className="text-lg font-semibold"
                style={{ color: priorityColor[priority] }}
              >
                {priorityLabel[priority]}
              </span>
              <span className="text-sm text-gray-500">{priorityDescription[priority]}</span>
              <span className="ml-auto text-xs text-gray-400">
                {groups[priority].length} empresa{groups[priority].length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups[priority].map((client) => (
                <div
                  key={client.slug}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col"
                >
                  {/* Company name + type */}
                  <div className="mb-3 flex-1">
                    <div
                      className="text-[10px] font-semibold uppercase tracking-wide mb-1"
                      style={{ color: priorityColor[priority] }}
                    >
                      {client.type}
                    </div>
                    <h2 className="text-sm font-semibold text-gray-900 leading-snug">
                      {client.companyName}
                    </h2>
                    <div className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                      <span>{client.companyLocation}</span>
                      {client.size && (
                        <>
                          <span className="text-gray-300">·</span>
                          <span>{client.size}</span>
                        </>
                      )}
                    </div>
                    {(client.usSignal || client.growthSignal) && (
                      <p className="text-[11px] text-gray-500 mt-2 leading-relaxed line-clamp-2">
                        {client.usSignal || client.growthSignal}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                    <Link
                      href={`/ficha/${client.slug}`}
                      className="flex-1 text-center text-xs font-medium text-white py-2 rounded-lg transition-colors"
                      style={{ backgroundColor: priorityColor[priority] }}
                    >
                      Ver ficha
                    </Link>
                    <Link
                      href={`/para/${client.slug}`}
                      className="flex-1 text-center text-xs font-medium text-gray-600 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      Página de outreach
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
