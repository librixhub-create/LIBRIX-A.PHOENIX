import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { personagens } from "@/data/personagens";

const descricao =
  "Conhece os personagens de Entre Mundos: O Chamado — Gabrielle, Ethan, Arael e todos os que habitam os mundos de A. Phoenix.";

export const metadata: Metadata = {
  title: "Personagens",
  description: descricao,
  openGraph: { title: "Personagens — A. Phoenix", description: descricao },
  twitter: { card: "summary_large_image", title: "Personagens — A. Phoenix", description: descricao },
};

const destaques = personagens.filter((p) => p.destaque);
const secundarios = personagens.filter((p) => !p.destaque);

export default function PersonagensPage() {
  return (
    <div className="pagina-interior">
      <Nav active="personagens" />

      {/* ── Hero da página ── */}
      <header className="hero-interior hero-personagens">
        <p className="label-secao">Entre Mundos: O Chamado</p>
        <h1 className="hero-interior-titulo">Os Personagens</h1>
        <p className="sub hero-interior-sub">
          Cada um carrega um segredo. Cada um esconde uma verdade.<br />
          Conhece quem habita os mundos de <em>Entre Mundos</em>.
        </p>
        <div className="hero-personagens-ornamento" aria-hidden="true">❧ ✦ ❧</div>
        <p className="hero-personagens-creditos">Artes dos personagens: © Helyd.dreambooks — todos os direitos reservados</p>
      </header>

      {/* ── Personagens em destaque (3 protagonistas) ── */}
      <section className="secao-personagens-pagina secao-personagens-pagina--destaques">
        <div className="container">
          <p className="titulo-secao surge-scroll">Protagonistas</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <div className="personagens-destaques-grid">
            {destaques.map((p) => (
              <article key={p.slug} className="card-personagem-pagina surge-scroll">
                <div className="card-personagem-pagina-foto-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.foto}
                    alt={p.nome}
                    className="card-personagem-pagina-foto"
                    loading="lazy"
                  />
                  <div className="card-personagem-pagina-glow" aria-hidden="true" />
                </div>
                <div className="card-personagem-pagina-corpo">
                  <span className="card-personagem-pagina-mundo">{p.mundo}</span>
                  <h2 className="card-personagem-pagina-nome">{p.nome}</h2>
                  <p className="card-personagem-pagina-papel">— {p.papel} —</p>
                  <p className="card-personagem-pagina-desc">{p.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personagens secundários ── */}
      <section className="secao-personagens-pagina secao-personagens-pagina--secundarios">
        <div className="container">
          <p className="titulo-secao fundo-claro surge-scroll">Também presentes na saga</p>
          <div className="linha-ouro surge-scroll" />
          <div className="personagens-secundarios-grid">
            {secundarios.map((p) => (
              <article key={p.slug} className="card-personagem-sec surge-scroll">
                <div className="card-personagem-sec-foto-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.foto}
                    alt={p.nome}
                    className="card-personagem-sec-foto"
                    loading="lazy"
                  />
                  {p.fotoAlt && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.fotoAlt}
                      alt=""
                      aria-hidden="true"
                      className="card-personagem-sec-foto card-personagem-sec-foto--alt"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="card-personagem-sec-corpo">
                  <span className="card-personagem-sec-mundo">{p.mundo}</span>
                  <h3 className="card-personagem-sec-nome">{p.nome}</h3>
                  <p className="card-personagem-sec-papel">{p.papel}</p>
                  <p className="card-personagem-sec-desc">{p.descricao}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="video-copyright">Artes dos personagens: © Helyd.dreambooks — todos os direitos reservados</p>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="secao-personagens-cta">
        <div className="container surge-scroll">
          <p className="titulo-secao">Descobre os seus destinos</p>
          <p className="sub" style={{ textAlign: "center", maxWidth: 520, margin: "0 auto 40px", color: "var(--cinza-suave)" }}>
            Todos estes personagens convergem numa história que começa a 10 de julho de 2026.
          </p>
          <div className="grupo-botoes" style={{ justifyContent: "center" }}>
            <a href="/jogo-personagens" className="botao botao-solido">Jogar Quem é Quem</a>
            <a href="/blog" className="botao botao-contorno">Ver o Blog</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
