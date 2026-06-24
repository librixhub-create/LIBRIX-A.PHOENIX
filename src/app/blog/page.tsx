import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const descricao = "Bastidores, reflexões e segredos do universo de Entre Mundos: O Chamado, escritos por A. Phoenix.";

export const metadata: Metadata = {
  title: "Blog",
  description: descricao,
  openGraph: { title: "Blog — A. Phoenix", description: descricao },
  twitter: { card: "summary_large_image", title: "Blog — A. Phoenix", description: descricao },
};

type Post = {
  categoria: "bastidores" | "reflexoes" | "universo";
  rotulo: string;
  simbolo: string;
  imagem: string;
  titulo: string;
  resumo: string;
  data: string;
  href: string;
};

const posts: Post[] = [
  {
    categoria: "bastidores",
    rotulo: "Bastidores",
    simbolo: "❧",
    imagem: "/assets/artes/eco-do-pergaminho.webp",
    titulo: "Os Bastidores de Entre Mundos — Como uma saga nasceu de um silêncio",
    resumo: "Uma viagem pelo processo criativo por trás da saga: as primeiras anotações, as dúvidas e o momento em que Gabrielle ganhou voz própria.",
    data: "12 Jan 2026",
    href: "/post-template",
  },
  {
    categoria: "reflexoes",
    rotulo: "Reflexões",
    simbolo: "✧",
    imagem: "/assets/artes/sombra-que-dividiu.webp",
    titulo: "Gabrielle: A personagem que me ensinou a ser corajosa",
    resumo: "Como dar vida a uma protagonista marcada por segredos me obrigou a confrontar os meus próprios medos enquanto escritora — e enquanto pessoa.",
    data: "28 Jan 2026",
    href: "/post-gabrielle-coragem",
  },
  {
    categoria: "universo",
    rotulo: "Universo",
    simbolo: "❉",
    imagem: "/assets/artes/homem-que-parou-o-salao.webp",
    titulo: "Londres como palco — Por que escolhi esta cidade para a saga",
    resumo: "Entre névoas, ruas antigas e segredos guardados em pedra, Londres tornou-se mais do que um cenário: tornou-se uma personagem da história.",
    data: "09 Fev 2026",
    href: "/post-londres-palco",
  },
  {
    categoria: "bastidores",
    rotulo: "Bastidores",
    simbolo: "❧",
    imagem: "/assets/artes/o-que-sobra-do-rasgo.webp",
    titulo: "Entre rascunhos e revelações — reescrever um capítulo inteiro",
    resumo: "Por vezes, a história certa só aparece depois de termos coragem de apagar a errada. O dia em que reescrevi o capítulo mais importante do livro.",
    data: "22 Fev 2026",
    href: "/post-capitulo-reescrito",
  },
  {
    categoria: "universo",
    rotulo: "Universo",
    simbolo: "❉",
    imagem: "/assets/artes/verdade-sangrou.webp",
    titulo: "A simbologia da rosa em Entre Mundos",
    resumo: "Porque escolhi a rosa como símbolo da saga — e o que ela representa sobre beleza, espinhos e tudo aquilo que escolhemos proteger.",
    data: "06 Mar 2026",
    href: "/post-simbologia-rosa",
  },
  {
    categoria: "reflexoes",
    rotulo: "Reflexões",
    simbolo: "✧",
    imagem: "/assets/artes/peso-do-nao-dito.webp",
    titulo: "Escrever quando o medo é maior do que a vontade",
    resumo: "Sobre os dias em que a página em branco parece um abismo — e sobre escolher escrever mesmo assim, uma palavra de cada vez.",
    data: "19 Mar 2026",
    href: "/post-medo-vontade",
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav active="blog" />

      {/* ============ HERO PEQUENO ============ */}
      <header className="hero-interior">
        <h1>O Blog</h1>
        <p className="sub">Bastidores, reflexões e segredos do universo</p>
      </header>

      <div className="divisor" style={{ "--cor-divisor-de": "var(--sombra)", "--cor-divisor-para": "var(--branco-puro)" } as React.CSSProperties}>
        <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
        </svg>
      </div>

      {/* ============ LISTAGEM DE POSTS ============ */}
      <section className="secao-blog-listagem">
        <div className="container">
          <div className="intro-blog surge-scroll">
            <p>&ldquo;Cada história tem uma história por trás. Aqui partilho as minhas — os bastidores da escrita, os pensamentos que me visitam pelo caminho e os pequenos segredos do universo de Entre Mundos.&rdquo;</p>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article className="card-post surge-scroll" key={post.href}>
                <div
                  className={`blog-card-header ${post.categoria}`}
                  style={{
                    backgroundImage: `linear-gradient(165deg, rgba(13,13,26,.32) 0%, rgba(13,13,26,.8) 100%), url('${post.imagem}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="blog-card-header-simbolo">{post.simbolo}</span>
                </div>
                <div className="card-post-corpo">
                  <span className="categoria-badge">{post.rotulo}</span>
                  <h3>{post.titulo}</h3>
                  <p>{post.resumo}</p>
                  <span className="data-post">{post.data}</span>
                  <a href={post.href} className="ler-mais">Ler mais →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
