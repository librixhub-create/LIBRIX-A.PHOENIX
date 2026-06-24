import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao =
  "Media kit oficial de A. Phoenix e Entre Mundos: O Chamado — biografia, sinopse, ficha técnica e imagens para imprensa, bloggers e criadores de conteúdo.";

export const metadata: Metadata = {
  title: "Imprensa",
  description: descricao,
  openGraph: { title: "Imprensa — A. Phoenix", description: descricao, images: ["/assets/livro/capa-frontal.webp"] },
  twitter: { card: "summary_large_image", title: "Imprensa — A. Phoenix", description: descricao },
};

export default function ImprensaPage() {
  return (
    <>
      <Nav />

      <header className="hero-interior">
        <h1>Imprensa</h1>
        <p className="sub">Para jornalistas, bloggers e criadores de conteúdo</p>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--branco-puro)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <section className="secao-imprensa">
        <div className="container">

          <div className="imprensa-bloco surge-scroll">
            <h2>Ficha Técnica</h2>
            <div className="imprensa-ficha-grid">
              <div className="contacto-detalhe">
                <span className="rotulo">Título</span>
                <span className="valor">Entre Mundos: O Chamado</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Autora</span>
                <span className="valor">A. Phoenix</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Editora</span>
                <span className="valor">Librix Hub</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Género</span>
                <span className="valor">Romance Fantástico / Saga</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Páginas</span>
                <span className="valor">324</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Saga</span>
                <span className="valor">Livro I de Entre Mundos</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Publicação</span>
                <span className="valor">2026</span>
              </div>
              <div className="contacto-detalhe">
                <span className="rotulo">Preço</span>
                <span className="valor">€14,90 (edição digital e física)</span>
              </div>
            </div>
          </div>

          <div className="imprensa-bloco surge-scroll">
            <h2>Biografia</h2>
            <p>&ldquo;Aphoenix nasceu com a alma inquieta de quem carrega histórias demais para guardar apenas para si. Leitora apaixonada desde a infância, encontrou na escrita o seu refúgio, a sua força e o seu modo de transformar emoções em mundos inteiros.&rdquo;</p>
            <p>Apaixonada por cidades com história, escolheu Londres como palco para <em>Entre Mundos: O Chamado</em> — o primeiro livro de uma saga sobre o encontro entre a luz e a sombra.</p>
            <p style={{ textAlign: "center", marginBottom: 0 }}>
              <a href="/sobre" className="link-seta">Ler a biografia completa <span aria-hidden="true">→</span></a>
            </p>
          </div>

          <div className="imprensa-bloco surge-scroll">
            <h2>Sinopse</h2>
            <p>Quando uma fenda invisível se abre entre mundos, nada permanece intocado. Gabrielle, uma jovem marcada por segredos que desconhece, torna-se o centro de uma disputa ancestral entre a luz e a escuridão.</p>
            <p>Entre revelações, traições e um poder que ninguém compreende completamente, Gabrielle descobre que algumas verdades não iluminam — queimam. Este é o início de uma saga onde nada é o que parece, e onde cada escolha pode salvar ou destruir tudo o que existe.</p>
            <p style={{ textAlign: "center", marginBottom: 0 }}>
              <a href="/#sinopse" className="link-seta">Ler a sinopse completa <span aria-hidden="true">→</span></a>
            </p>
          </div>

          <div className="imprensa-bloco surge-scroll">
            <h2>Imagens para Download</h2>
            <div className="imprensa-downloads">
              <div className="imprensa-download-card">
                <div className="imprensa-download-thumb">
                  <img src="/assets/livro/capa-frontal.webp" alt="Capa do livro Entre Mundos: O Chamado" />
                </div>
                <p className="imprensa-download-legenda">Capa do Livro</p>
                <a href="/assets/livro/capa-frontal.webp" download className="botao botao-contorno botao-contorno-violeta">Descarregar</a>
              </div>
              <div className="imprensa-download-card">
                <div className="imprensa-download-thumb">
                  <img src="/assets/logo/logo-560.webp" alt="Retrato/logótipo de A. Phoenix" />
                </div>
                <p className="imprensa-download-legenda">Retrato da Autora</p>
                <a href="/assets/logo/logo-560.webp" download className="botao botao-contorno botao-contorno-violeta">Descarregar</a>
              </div>
              <div className="imprensa-download-card">
                <div className="imprensa-download-thumb">
                  <img src="/assets/logo/logo-260.webp" alt="Logótipo A. Phoenix" />
                </div>
                <p className="imprensa-download-legenda">Logótipo</p>
                <a href="/assets/logo/logo-260.webp" download className="botao botao-contorno botao-contorno-violeta">Descarregar</a>
              </div>
            </div>
          </div>

          <div className="imprensa-bloco surge-scroll" style={{ textAlign: "center" }}>
            <h2>Contacto de Imprensa</h2>
            <div className="contacto-detalhe" style={{ display: "inline-block", textAlign: "left" }}>
              <span className="rotulo">Email</span>
              <span className="valor">contacto@librixhub.com</span>
            </div>
            <p style={{ marginTop: 24, marginBottom: 0 }}>
              <a href="/contato" className="botao botao-solido">Pedir Entrevista ou Material Adicional</a>
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
