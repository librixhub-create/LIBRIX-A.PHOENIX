import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao =
  "Conhece os personagens de Entre Mundos: O Chamado — Gabrielle, Ethan, Arael e todos os que habitam os mundos de A. Phoenix.";

export const metadata: Metadata = {
  title: "Personagens",
  description: descricao,
  openGraph: { title: "Personagens — A. Phoenix", description: descricao },
  twitter: { card: "summary_large_image", title: "Personagens — A. Phoenix", description: descricao },
};

type Personagem = {
  slug: string;
  nome: string;
  papel: string;
  mundo: string;
  descricao: string;
  foto: string;
  destaque?: boolean;
};

const personagens: Personagem[] = [
  {
    slug: "gabrielle",
    nome: "Gabrielle Dubois",
    papel: "A Alma que Lembra",
    mundo: "Londres · Paris",
    descricao:
      "A jovem protagonista da saga. Marcada por memórias que não são suas e por um poder que ainda não compreende, Gabrielle é o centro de uma disputa ancestral entre a luz e a sombra.",
    foto: "/assets/personagens/gabrielle-dubois.jpeg",
    destaque: true,
  },
  {
    slug: "ethan",
    nome: "Ethan Smith",
    papel: "O Que Carrega o Silêncio",
    mundo: "Londres · Paris",
    descricao:
      "Filho de uma família de elite londrina, Ethan guarda segredos que protegem mais do que a si próprio. O seu silêncio é uma escolha — e uma armadura.",
    foto: "/assets/personagens/ethan-smith.jpeg",
    destaque: true,
  },
  {
    slug: "arael",
    nome: "Arael",
    papel: "O Guardador do Véu",
    mundo: "Além da Fenda",
    descricao:
      "Figura ancestral aprisionada além da Fenda. Arael é o guardião de segredos que remontam a séculos. O seu regresso muda tudo o que Gabrielle julgava saber.",
    foto: "/assets/personagens/arael.jpeg",
    destaque: true,
  },
  {
    slug: "angeli",
    nome: "Angeli Dubois",
    papel: "A Mãe que Sabe Mais do que Diz",
    mundo: "Londres · Paris",
    descricao:
      "A mãe de Gabrielle nunca foi apenas uma mãe. Por trás do amor e do silêncio, Angeli carrega um peso que há muito escolheu não partilhar com ninguém.",
    foto: "/assets/personagens/angeli-dubois.jpeg",
  },
  {
    slug: "asha",
    nome: "Asha",
    papel: "A que Vigia o Silêncio",
    mundo: "Londres · Vilarejo do Véu",
    descricao:
      "Presente em Londres e no Vilarejo do Véu, Asha observa onde outros agem. O seu papel na história é mais profundo do que aparenta à superfície.",
    foto: "/assets/personagens/asha.jpeg",
  },
  {
    slug: "amirah",
    nome: "Amirah",
    papel: "A Sacerdotisa que Não Descansou",
    mundo: "Pérsia Antiga",
    descricao:
      "Da Pérsia Antiga, além da Fenda. Amirah lançou o selo que alterou o destino de todos. A sua presença na história transcende o tempo e os mundos.",
    foto: "/assets/personagens/amirah.jpeg",
  },
  {
    slug: "loui",
    nome: "Loui",
    papel: "A Melodia que Ficou",
    mundo: "Paris · Flashback",
    descricao:
      "Paris. Música. Memória. Loui é a figura que ficou no passado de Gabrielle — e que não a deixou partir. Algumas presenças marcam para sempre.",
    foto: "/assets/personagens/loui.jpeg",
  },
];

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
            <a href="/blog" className="botao botao-solido">Ver o Blog</a>
            <a href="/#experiencias" className="botao botao-contorno">Novidades Exclusivas</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
