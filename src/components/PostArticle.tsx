import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type PostArticleProps = {
  categoria: string;
  titulo: string;
  meta: string;
  children: ReactNode;
};

export default function PostArticle({ categoria, titulo, meta, children }: PostArticleProps) {
  return (
    <>
      <Nav active="blog" />
      <article className="secao-post">
        <div className="post-conteudo">
          <div className="linha-dupla surge-scroll">
            <span />
            <img src="/rose-icon.svg" alt="" width={22} height={22} />
            <span />
          </div>
          <span className="categoria-badge">{categoria}</span>
          <h1>{titulo}</h1>
          <p className="post-meta">{meta}</p>

          <div className="post-corpo surge-scroll">{children}</div>

          <div className="post-rodape-nav surge-scroll">
            <a href="/blog" className="botao botao-contorno botao-contorno-violeta">← Voltar ao Blog</a>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
