import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao =
  "Entre em contacto com A. Phoenix, autora de Entre Mundos: O Chamado — para pedidos de entrevista, parcerias ou apenas para dizer olá.";

export const metadata: Metadata = {
  title: "Contacto",
  description: descricao,
  openGraph: { title: "Contacto — A. Phoenix", description: descricao },
  twitter: { card: "summary_large_image", title: "Contacto — A. Phoenix", description: descricao },
};

export default function ContatoPage() {
  return (
    <>
      <Nav active="contacto" />

      {/* ============ HERO PEQUENO ============ */}
      <header className="hero-interior">
        <h1>Contacto</h1>
        <p className="sub">Vamos conversar sobre histórias</p>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--branco-puro)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ FORMULÁRIO + INFO ============ */}
      <section className="secao-contacto">
        <div className="contacto-grid">
          <div className="surge-scroll">
            <form name="contacto" method="POST" data-netlify="true" className="form-contacto">
              <input type="hidden" name="form-name" value="contacto" />

              <div className="campo">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="O teu nome" required />
              </div>

              <div className="campo">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="O teu email" required />
              </div>

              <div className="campo">
                <label htmlFor="assunto">Assunto</label>
                <input type="text" id="assunto" name="assunto" placeholder="Sobre o que queres falar?" required />
              </div>

              <div className="campo">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={6} placeholder="Escreve a tua mensagem aqui..." required />
              </div>

              <button type="submit" className="botao botao-solido">Enviar Mensagem</button>
              <p className="confirmacao-form" role="status" />
            </form>
          </div>

          <div className="contacto-info surge-scroll">
            <h2>Vamos conversar</h2>
            <p>Quer seja para pedidos de entrevista, parcerias com clubes de leitura, colaborações ou apenas para partilhar o que sentiste ao ler <em>Entre Mundos</em> — adoraria ouvir-te. Cada mensagem é lida com atenção.</p>

            <div className="contacto-detalhe">
              <span className="rotulo">Email</span>
              <span className="valor">contacto@librixhub.com</span>
            </div>

            <div className="contacto-detalhe">
              <span className="rotulo">Editora</span>
              <span className="valor">Librix Hub</span>
            </div>

            <div className="contacto-detalhe">
              <span className="rotulo">Redes Sociais</span>
              <span className="valor">Instagram · TikTok · Goodreads</span>
            </div>

            <div className="rodape-redes rodape-redes--contacto">
              <a href="https://www.instagram.com/aphoenix_escritora/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" /><path d="M14 4c0 2.5 2 4.5 4.5 4.5" /></svg>
              </a>
              <a href="https://goodreads.com" target="_blank" rel="noopener" aria-label="Goodreads">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 4.6V2.4M12 21.6v-2.2" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
