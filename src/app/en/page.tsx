import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao =
  "Entre Mundos: O Chamado, by A. Phoenix — a fantasy romance saga where light and shadow meet. English edition coming soon.";

export const metadata: Metadata = {
  title: "English Edition — Coming Soon",
  description: descricao,
  openGraph: { title: "Entre Mundos: O Chamado — English Edition Coming Soon", description: descricao, images: ["/assets/livro/capa-frontal.webp"] },
  twitter: { card: "summary_large_image", title: "Entre Mundos: O Chamado — English Edition Coming Soon", description: descricao, images: ["/assets/livro/capa-frontal.webp"] },
};

const mensagemWhatsapp = encodeURIComponent(
  "Hi! I'd love to know more about the English edition of Entre Mundos: O Chamado."
);
const linkWhatsapp = `https://wa.me/351930475550?text=${mensagemWhatsapp}`;

export default function EnglishPage() {
  return (
    <>
      <Nav active="en" />

      {/* ============ HERO ============ */}
      <header className="hero" id="topo">
        <video
          className="hero-video"
          src="/assets/video/hero-fundo.mp4"
          poster="/assets/artes/cidade-que-respira.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="hero-centrado">
          <div className="hero-conteudo">
            <div className="hero-linha" />
            <span className="hero-titulo-mascara">
              <h1 className="hero-titulo">ENTRE MUNDOS</h1>
            </span>
            <div className="hero-separador" />
            <p className="hero-subtitulo">The Calling</p>
            <p className="hero-livro">Book I</p>
            <p className="hero-frase">
              &ldquo;Before the light, there was the shadow. And everything that came after was born from where the two met.&rdquo;
            </p>
            <div className="hero-botoes">
              <div className="grupo-botoes">
                <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="botao botao-solido">Notify Me</a>
                <a href="#synopsis" className="botao botao-contorno">Read the Synopsis</a>
              </div>
              <p className="hero-disponibilidade">Available now in Portuguese on Amazon — English edition coming soon</p>
            </div>
          </div>
        </div>

        <div className="scroll-indicador" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--creme)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ THE BOOK ============ */}
      <section className="secao-livro" id="book">
        <div className="livro-grid">
          <div className="book-3d-container">
            <div className="book-3d">
              <div className="book-spine"><span>ENTRE MUNDOS · O CHAMADO</span></div>
              <div className="book-pages" />
              <div className="book-front">
                <img src="/assets/livro/capa-frontal.webp" alt="Cover of Entre Mundos: O Chamado, by A. Phoenix" className="book-capa-img" />
              </div>
            </div>
          </div>

          <div className="livro-info surge-scroll">
            <div className="badges-linha">
              <span className="badge">Saga · Book I</span>
              <span className="badge">English Edition · Coming Soon</span>
            </div>
            <h2>Entre Mundos: O Chamado</h2>
            <p className="autor-linha">by A. Phoenix</p>
            <div className="linha-fina-ouro" />
            <ul className="lista-detalhes">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>{" "}388 pages
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>{" "}Fantasy Romance / Saga
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>{" "}Set in London
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>{" "}Published in 2026
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>{" "}Published by Librix Hub
              </li>
            </ul>
            <div className="formatos-disponiveis">
              <span className="formato-chip">Kindle</span>
              <span className="formato-chip">Paperback</span>
              <span className="formato-chip">Hardcover</span>
            </div>
            <div className="cta-livro">
              <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="botao botao-escuro">Ask About the English Edition</a>
            </div>
            <p className="texto-pequeno texto-confianca">🇵🇹 Portuguese edition available now on Amazon · 🇬🇧 English edition coming soon</p>
          </div>
        </div>
      </section>

      {/* ============ READER REVIEWS ============ */}
      <section className="secao-avaliacoes">
        <div className="container">
          <h2 className="titulo-editorial surge-scroll">What Readers Are Saying</h2>
          <div className="avaliacoes-grid">

            <div className="avaliacao-card surge-scroll">
              <div className="avaliacao-estrelas" aria-hidden="true">★★★★★</div>
              <p className="avaliacao-texto">&ldquo;This was a read that surprised me. I got to know the world little by little at first, but then I became completely absorbed in the story. The characters have real depth, and the ending left me curious to find out what happens next. Absolutely worth reading — highly recommend.&rdquo;</p>
              <p className="avaliacao-autor">Luis <span>· Verified Amazon review (Spain) — translated from Portuguese</span></p>
            </div>

            <div className="avaliacao-card surge-scroll">
              <div className="avaliacao-estrelas" aria-hidden="true">★★★★★</div>
              <p className="avaliacao-texto">&ldquo;I laughed, I cried, I got angry, I was completely lost... and then it all made sense. The characters feel like real people. The mysteries kept pulling me in — I kept saying &lsquo;just one more chapter&rsquo;... and before I knew it, it was almost 3am. It's been a while since a book pulled me in this deep.&rdquo;</p>
              <p className="avaliacao-autor">Reader <span>· message sent to the author via WhatsApp — translated from Portuguese</span></p>
            </div>

          </div>
        </div>
      </section>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--branco-puro)", "--cor-divisor-para": "var(--violeta)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ SYNOPSIS ============ */}
      <section className="secao-sinopse" id="synopsis">
        <div className="container">
          <p className="titulo-secao surge-scroll">Synopsis</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <div className="sinopse-texto surge-scroll">
            <p>When an invisible rift opens between worlds, nothing remains untouched. Gabrielle, a young woman marked by secrets she doesn&rsquo;t yet understand, becomes the center of an ancient struggle between light and darkness.</p>
            <p>As her family unravels and hidden forces close in, a forbidden love, a forgotten past, and a promise made centuries ago begin to awaken. In the heart of London, a shadow takes shape. In the silence of a distant village, a guardian returns. And in every corner of the world, destinies that should never have crossed begin to intertwine.</p>
            <p>Between revelations, betrayals, and a power no one fully understands, Gabrielle discovers that some truths don&rsquo;t illuminate — they burn.</p>
            <p>This is the beginning of a saga where nothing is what it seems, and where every choice can save or destroy everything that exists.</p>
          </div>
          <div className="sinopse-cta surge-scroll">
            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className="botao botao-solido">Notify Me When It's Out</a>
          </div>
        </div>
      </section>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--creme)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ ABOUT THE AUTHOR ============ */}
      <section className="secao-autora" id="about-author">
        <div className="autora-grid">
          <div className="avatar-wrap surge-scroll">
            <div className="retrato-wrap">
              <div className="retrato-anel" />
              <div className="retrato retrato--logo">
                <img src="/assets/logo/logo-560.webp" alt="A. Phoenix" className="retrato-logo" />
              </div>
            </div>
          </div>
          <div className="surge-scroll">
            <p className="label-secao">About the Author</p>
            <h2 className="nome-autora">A. Phoenix</h2>
            <div className="bio-resumo">
              <p>&ldquo;A. Phoenix was born with the restless soul of someone who carries too many stories to keep to herself. A passionate reader since childhood, she found in writing her refuge, her strength, and her way of turning emotions into entire worlds.&rdquo;</p>
            </div>
            <a href="/sobre" className="link-seta">Read more about the author (in Portuguese) <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--branco-puro)", "--cor-divisor-para": "var(--sombra-profunda)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <Footer />
    </>
  );
}
