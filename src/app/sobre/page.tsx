import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao =
  "Conheça A. Phoenix, autora de Entre Mundos: O Chamado — a sua história, a sua voz e o universo que a inspira a escrever.";

export const metadata: Metadata = {
  title: "Sobre a Autora",
  description: descricao,
  openGraph: { title: "Sobre a Autora — A. Phoenix", description: descricao, images: ["/assets/logo/logo-560.webp"] },
  twitter: { card: "summary_large_image", title: "Sobre a Autora — A. Phoenix", description: descricao, images: ["/assets/logo/logo-560.webp"] },
};

export default function SobrePage() {
  return (
    <>
      <Nav active="sobre" />

      {/* ============ HERO PEQUENO ============ */}
      <header className="hero-interior">
        <h1>A. PHOENIX</h1>
        <p className="sub">A Autora</p>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--branco-puro)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ BIO COMPLETA ============ */}
      <section className="secao-bio">
        <div className="bio-grid">
          <div className="avatar-wrap surge-scroll">
            <div className="retrato-wrap">
              <div className="retrato-anel" />
              <div className="retrato retrato--grande retrato--logo">
                <img src="/assets/logo/logo-560.webp" alt="A. Phoenix" className="retrato-logo" />
              </div>
            </div>
            <p className="assinatura">— A. Phoenix</p>
          </div>

          <div className="bio-completa surge-scroll">
            <p>Aphoenix nasceu com a alma inquieta de quem carrega histórias demais para guardar apenas para si. Leitora apaixonada desde a infância, encontrou na escrita o seu refúgio, a sua força e o seu modo de transformar emoções em mundos inteiros.</p>

            <p>Cresceu rodeada de livros que abriam portas para lugares que não existiam — e foi exatamente aí, nessa fronteira ténue entre o real e o imaginado, que decidiu construir a sua própria casa. Escrever tornou-se, para ela, menos uma escolha e mais um chamado: uma voz baixa que insistia em pedir para ser ouvida.</p>

            <p>Foi desse chamado que nasceu <em>Entre Mundos</em>. A ideia começou como um sussurro — uma cena, uma personagem, uma pergunta que não a deixava dormir: e se existisse uma fenda entre a luz e a sombra, e alguém estivesse destinado a atravessá-la sem saber? Dessa pergunta nasceu Gabrielle. E de Gabrielle nasceu uma saga inteira.</p>

            <p>Apaixonada por cidades com história, escolheu Londres como palco para o primeiro livro — uma cidade onde o antigo e o novo coexistem em cada esquina, onde a névoa parece esconder mais do que revela. Para Aphoenix, Londres não é apenas cenário: é personagem, é atmosfera, é um eco do próprio mistério que atravessa a narrativa.</p>

            <p>Escreve sobre amores que desafiam o tempo, sobre famílias que escondem mais do que mostram, e sobre personagens que precisam de escolher entre o conforto da escuridão conhecida e o risco de uma luz que ainda não compreendem. Acredita que as melhores histórias não dão respostas fáceis — elas acendem perguntas que continuam a arder muito depois da última página.</p>

            <p>Quando não está a escrever, Aphoenix anda perdida entre cadernos, chávenas de chá frio e listas de músicas que servem de banda sonora para os mundos que cria. <em>Entre Mundos: O Chamado</em> é o primeiro capítulo de uma jornada que promete crescer — e ela convida-o, leitor, a atravessar esta fenda com ela.</p>

            <a href="/#o-livro" className="link-seta">Conhecer o livro <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="container">
          <div className="valores-grid surge-scroll">
            <div className="valor-item">
              <span className="valor-simbolo">✦</span>
              <p>Força das Mulheres</p>
            </div>
            <div className="valor-item">
              <span className="valor-simbolo">✦</span>
              <p>Magia dos Recomeços</p>
            </div>
            <div className="valor-item">
              <span className="valor-simbolo">✦</span>
              <p>Poder das Palavras</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--branco-puro)", "--cor-divisor-para": "var(--sombra-profunda)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" />
        </svg>
      </div>

      <Footer editora />
    </>
  );
}
