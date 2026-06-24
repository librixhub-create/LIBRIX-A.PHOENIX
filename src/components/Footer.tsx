type FooterProps = {
  /** Apenas a página Sobre mostra a nota editorial completa da Librix Hub. */
  editora?: boolean;
};

export default function Footer({ editora = false }: FooterProps) {
  return (
    <footer className="rodape">
      <img src="/assets/logo/logo-120.png" alt="A. Phoenix" className="rodape-rosa" />
      <p className="nome">A. PHOENIX</p>
      <p className="creditos">© 2026 A. Phoenix · Entre Mundos · Publicado por Librix Hub</p>
      <ul className="rodape-links">
        <li><a href="/#topo">Início</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/#o-livro">Adquirir</a></li>
        <li><a href="/contato">Contacto</a></li>
        <li><a href="/imprensa">Imprensa</a></li>
      </ul>
      <div className="rodape-redes">
        <a href="https://www.instagram.com/aphoenix_escritora/" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 4v9.5a3.5 3.5 0 1 1-3-3.46" /><path d="M14 4c0 2.5 2 4.5 4.5 4.5" /></svg>
        </a>
        <a href="https://goodreads.com" target="_blank" rel="noopener" aria-label="Goodreads">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 4.6V2.4M12 21.6v-2.2" /></svg>
        </a>
      </div>
      <p className="rodape-dev">
        Desenvolvido com amor por <a href="https://www.librixhub.com" target="_blank" rel="noopener">Librix Hub</a>
      </p>

      {editora && (
        <div className="rodape-editora">
          <p className="rodape-editora-titulo">Nota da Editora</p>
          <p className="rodape-editora-marca">Librix Hub — Serviços Editoriais e Digitais</p>
          <p className="rodape-editora-contactos">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>{" "}
            <a href="https://www.librixhub.com" target="_blank" rel="noopener">www.librixhub.com</a> ·{" "}
            <a href="https://www.librixapp.com" target="_blank" rel="noopener">www.librixapp.com</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" /></svg>{" "}
            <a href="https://instagram.com/librixhub" target="_blank" rel="noopener">@librixhub</a>
          </p>
          <p>
            A Librix Hub agradece a confiança e a colaboração da nossa autora na publicação da obra{" "}
            <em>Entre Mundos: O Chamado</em>, escrita por A. Phoenix.
          </p>
          <p>
            Temos orgulho de ter participado em todo o processo de desenvolvimento editorial — incluindo a edição
            completa da obra, a publicação e a criação do website oficial — contribuindo para que este projeto
            alcançasse a sua melhor versão e chegasse aos leitores com qualidade e profissionalismo.
          </p>
          <p className="rodape-editora-slogan">Librix Hub — Transformando ideias em publicações de impacto.</p>
        </div>
      )}
    </footer>
  );
}
