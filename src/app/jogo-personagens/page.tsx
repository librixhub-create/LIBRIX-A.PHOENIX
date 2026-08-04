import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JogoPersonagens from "@/components/JogoPersonagens";

const descricao =
  "Testa o quanto conheces os personagens de Entre Mundos: O Chamado neste jogo rápido de adivinhação — 8 rondas, pontuação e um título final.";

export const metadata: Metadata = {
  title: "Quem é Quem — Jogo dos Personagens",
  description: descricao,
  openGraph: { title: "Quem é Quem em Entre Mundos? — A. Phoenix", description: descricao },
  twitter: { card: "summary_large_image", title: "Quem é Quem em Entre Mundos? — A. Phoenix", description: descricao },
};

export default function JogoPersonagensPage() {
  return (
    <div className="pagina-interior">
      <Nav />

      {/* ── Hero da página ── */}
      <header className="hero-interior hero-personagens">
        <p className="label-secao">Entre Mundos: O Chamado</p>
        <h1 className="hero-interior-titulo">Quem é Quem?</h1>
        <p className="sub hero-interior-sub">
          Oito pistas. Quatro rostos por ronda.<br />
          Quanto da saga já reconheces à primeira vista?
        </p>
        <div className="hero-personagens-ornamento" aria-hidden="true">❧ ✦ ❧</div>
      </header>

      <section className="secao-jogo-personagens">
        <div className="container">
          <JogoPersonagens />
        </div>
      </section>

      <Footer />
    </div>
  );
}
