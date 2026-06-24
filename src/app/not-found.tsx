import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />

      <header className="hero-interior">
        <h1>Fenda Sem Destino</h1>
        <p className="sub">Esta página não existe neste mundo — talvez tenha ficado presa entre dois.</p>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--branco-puro)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <section className="secao-contacto" style={{ textAlign: "center" }}>
        <div className="container">
          <p style={{ fontSize: 18, color: "var(--texto-suave)", marginBottom: 28 }}>
            Erro 404 — a fenda entre mundos não te trouxe ao sítio certo.
          </p>
          <a href="/" className="botao botao-solido">Voltar ao Início</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
