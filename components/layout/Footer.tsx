import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1f3144" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image
                src="/Vow-Vistos-Logo.svg"
                alt="Vow Vistos"
                width={120}
                height={45}
                className="brightness-0 invert"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Mobilização internacional para operações do setor eólico.
              Imigração, logística e suporte operacional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium text-sm mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Imigração Corporativa",
                "Crew Travel Management",
                "Mobilização para os EUA",
                "Suporte Operacional",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h4 className="text-white font-medium text-sm mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <p className="text-white/60 text-sm">
                Atendimento especializado para operações internacionais.
              </p>
              <a
                href="mailto:contato@vowvistos.com"
                className="block text-white hover:text-white/80 transition-colors text-sm font-medium"
              >
                contato@vowvistos.com
              </a>
              <a
                href="#contato"
                className="inline-block bg-white text-vow-primary hover:bg-gray-100 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors mt-2"
              >
                Agendar Reunião
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {year} Vow Vistos. Todos os direitos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Mobilização internacional para o setor eólico.
          </p>
        </div>
      </div>
    </footer>
  );
}
