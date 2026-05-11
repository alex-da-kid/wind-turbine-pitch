export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vow-border bg-vow-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="text-vow-text font-bold text-xl tracking-tight">
                VOW
              </span>
              <span className="text-vow-primary text-xs font-semibold tracking-widest uppercase">
                VISTOS
              </span>
            </div>
            <p className="text-vow-muted text-sm leading-relaxed max-w-xs">
              Mobilização internacional para operações do setor eólico.
              Imigração, logística e suporte operacional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-vow-text font-semibold text-sm mb-4">
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
                    className="text-vow-muted hover:text-vow-text transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contato">
            <h4 className="text-vow-text font-semibold text-sm mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <p className="text-vow-muted text-sm">
                Atendimento especializado para operações internacionais.
              </p>
              <a
                href="mailto:contato@vowvistos.com"
                className="block text-vow-primary hover:text-vow-primary-hover transition-colors text-sm font-medium"
              >
                contato@vowvistos.com
              </a>
              <a
                href="#contato"
                className="inline-block bg-vow-primary hover:bg-vow-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors mt-2"
              >
                Agendar Reunião
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vow-border mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-vow-muted text-xs">
            © {year} Vow Vistos. Todos os direitos reservados.
          </p>
          <p className="text-vow-muted text-xs">
            Mobilização internacional para o setor eólico.
          </p>
        </div>
      </div>
    </footer>
  );
}
