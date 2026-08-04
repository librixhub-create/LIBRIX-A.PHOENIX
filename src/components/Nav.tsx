type NavProps = {
  /** A página inicial usa âncoras na própria página; as restantes apontam de volta para "/". */
  home?: boolean;
  active?: "sobre" | "blog" | "contacto" | "personagens";
};

export default function Nav({ home = false, active }: NavProps) {
  const topo = home ? "#topo" : "/#topo";
  const oLivro = home ? "#o-livro" : "/#o-livro";
  const sinopse = home ? "#sinopse" : "/#sinopse";
  const audio = home ? "#audio-previa" : "/#audio-previa";
  const spotify = home ? "#spotify" : "/#spotify";
  const quiz = home ? "#quiz" : "/#quiz";
  const novidades = home ? "#experiencias" : "/#experiencias";

  return (
    <nav className={home ? "nav" : "nav nav-scroll"}>
      <div className="container">
        <a href="/" className="nav-logo">
          <img src="/assets/logo/logo-120.png" alt="" className="nav-logo-img" />
          A. PHOENIX
        </a>
        <ul className="nav-links">
          <li><a href={topo}>Início</a></li>
          <li><a href={oLivro}>O Livro</a></li>
          <li><a href={sinopse}>Sinopse</a></li>
          <li><a href="/personagens" className={active === "personagens" ? "ativo" : undefined}>Personagens</a></li>
          <li className="nav-link-extra"><a href="/jogo-personagens">Quem é Quem</a></li>
          <li className="nav-link-extra"><a href={audio}>Áudio</a></li>
          <li className="nav-link-extra"><a href={spotify}>Spotify</a></li>
          <li className="nav-link-extra"><a href={quiz}>Quiz</a></li>
          <li className="nav-link-extra"><a href={novidades}>Novidades</a></li>
          <li><a href="/sobre" className={active === "sobre" ? "ativo" : undefined}>Sobre</a></li>
          <li><a href="/blog" className={active === "blog" ? "ativo" : undefined}>Blog</a></li>
          {active === "contacto" ? (
            <li><a href="/contato" className="ativo">Contacto</a></li>
          ) : (
            <li><a href={oLivro}>Adquirir</a></li>
          )}
        </ul>
        <button className="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
