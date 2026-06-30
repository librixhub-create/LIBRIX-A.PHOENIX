import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FlipbookAmostra from "@/components/FlipbookAmostra";

function Divisor({ de, para }: { de: string; para: string }) {
  return (
    <div className="divisor" style={{ "--cor-divisor-de": de, "--cor-divisor-para": para } as React.CSSProperties}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C360,64 1080,64 1440,0 L1440,64 L0,64 Z" />
      </svg>
    </div>
  );
}

function DivisorInverso({ de, para }: { de: string; para: string }) {
  return (
    <div className="divisor" style={{ "--cor-divisor-de": de, "--cor-divisor-para": para } as React.CSSProperties}>
      <svg viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" />
      </svg>
    </div>
  );
}

const livroJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Entre Mundos: O Chamado",
  author: { "@type": "Person", name: "A. Phoenix" },
  bookFormat: "https://schema.org/Hardcover",
  isPartOf: { "@type": "BookSeries", name: "Entre Mundos" },
  position: 1,
  numberOfPages: 324,
  inLanguage: "pt-PT",
  datePublished: "2026",
  publisher: { "@type": "Organization", name: "Librix Hub" },
  image: "/assets/livro/capa-frontal.webp",
  description:
    "Quando uma fenda invisível se abre entre mundos, nada permanece intocado. Gabrielle torna-se o centro de uma disputa ancestral entre a luz e a escuridão.",
  offers: {
    "@type": "Offer",
    price: "14.90",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(livroJsonLd) }} />
      <Nav home />

      {/* ============ HERO ============ */}
      <header className="hero" id="topo">

        {/* Orbs de fundo */}
        <div className="hero-orbs" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
          <span className="orb orb-4" />
        </div>

        <div className="hero-centrado">
          <div className="hero-conteudo">
            <div className="hero-linha" />
            <span className="hero-titulo-mascara">
              <h1 className="hero-titulo">ENTRE MUNDOS</h1>
            </span>
            <div className="hero-separador" />
            <p className="hero-subtitulo">O Chamado</p>
            <p className="hero-livro">Livro I</p>
            <p
              className="hero-frase"
              data-texto="&ldquo;Antes da luz, houve a sombra. E tudo o que veio depois nasceu do encontro entre as duas.&rdquo;"
            />
            <div className="hero-botoes">
              <div className="grupo-botoes">
                <button type="button" className="botao botao-solido" data-adquirir>Adquirir Agora</button>
                <a href="#sinopse" className="botao botao-contorno">Ler a Sinopse</a>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicador" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </header>

      <Divisor de="var(--sombra)" para="var(--creme)" />

      {/* ============ FRASE DE IMPACTO ============ */}
      <section className="frase-impacto surge-scroll">
        <div className="linha-dupla">
          <span />
          <img src="/rose-icon.svg" alt="" width={26} height={26} />
          <span />
        </div>
        <blockquote>&ldquo;Algumas verdades não iluminam — queimam.&rdquo;</blockquote>
        <cite>— Entre Mundos: O Chamado</cite>
      </section>

      {/* ============ O LIVRO (produto) ============ */}
      <section className="secao-livro" id="o-livro">
        <div className="livro-grid">
          <div className="book-3d-container surge-scroll">
            <div className="book-3d">
              <div className="book-spine"><span>ENTRE MUNDOS · O CHAMADO</span></div>
              <div className="book-pages" />
              <div className="book-front">
                <img src="/assets/livro/capa-frontal.webp" alt="Capa do livro Entre Mundos: O Chamado, de A. Phoenix" className="book-capa-img" />
              </div>
            </div>
          </div>

          <div className="livro-info surge-scroll">
            <span className="badge">Saga · Livro I</span>
            <h2>Entre Mundos: O Chamado</h2>
            <p className="autor-linha">por A. Phoenix</p>
            <div className="linha-fina-ouro" />
            <ul className="lista-detalhes">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>{" "}324 páginas
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>{" "}Romance Fantástico / Saga
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>{" "}Ambientado em Londres
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>{" "}Publicado em 2026
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>{" "}Publicado por Librix Hub
              </li>
            </ul>
            <p className="preco">€14,90 <span>/ edição digital e física</span></p>
            <div className="cta-livro">
              <button type="button" className="botao botao-escuro" data-adquirir>Adquirir o Livro</button>
            </div>
            <p className="texto-pequeno">Disponível em formato digital e físico</p>
          </div>
        </div>
      </section>

      <DivisorInverso de="var(--branco-puro)" para="var(--violeta)" />

      {/* ============ PRÉVIA EM ÁUDIO (AUDIOBOOK) ============ */}
      <section className="secao-audio" id="audio-previa">
        <div className="container">
          <p className="titulo-secao surge-scroll">Prévia em Áudio</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />

          <div className="audio-grid surge-scroll">
            <div className="audio-capa">
              <img src="/assets/livro/capa-frontal.webp" alt="Capa do livro Entre Mundos: O Chamado, de A. Phoenix" />
              <div className="audio-capa-selo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path d="M12 3v12m0 0a4 4 0 1 1-4 4" />
                  <path d="M16 3v9a4 4 0 0 1-4 4" />
                </svg>
                Audiobook
              </div>
            </div>

            <div className="audio-conteudo">
              <h2>Ouça o Chamado</h2>
              <p className="audio-descricao">
                Uma narração exclusiva da sinopse de <em>Entre Mundos: O Chamado</em> — com voz feminina e atmosfera de
                suspense. A fenda entre os mundos começa aqui, antes mesmo de virares a primeira página.
              </p>

              <div className="audio-player" data-audio-player>
                <button className="audio-botao" type="button" data-audio-toggle aria-label="Reproduzir prévia em áudio" aria-pressed="false">
                  <svg className="icone-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                  <svg className="icone-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
                </button>

                <div className="audio-corpo">
                  <div className="audio-onda" aria-hidden="true">
                    {Array.from({ length: 20 }, (_, i) => (
                      <span key={i} style={{ "--i": i } as React.CSSProperties} />
                    ))}
                  </div>
                  <div className="audio-barra" data-audio-barra role="slider" aria-label="Progresso da prévia em áudio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0} tabIndex={0}>
                    <div className="audio-barra-preenchida" data-audio-progresso />
                  </div>
                  <div className="audio-tempos">
                    <span data-audio-atual>0:00</span>
                    <span data-audio-total>0:49</span>
                  </div>
                </div>

                <audio data-audio-elemento preload="metadata">
                  <source src="/assets/audio/previa-entre-mundos.wav" type="audio/wav" />
                  O teu navegador não suporta áudio incorporado.
                </audio>
              </div>

              <p className="audio-legenda">&ldquo;Antes da luz, houve a sombra.&rdquo; — prévia narrada da sinopse</p>

              <a href="#o-livro" className="link-seta link-seta--claro">Conhecer o livro completo <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      <Divisor de="var(--violeta)" para="var(--sombra)" />

      {/* ============ SPOTIFY ============ */}
      <section className="secao-spotify" id="spotify">
        <div className="container">
          <p className="titulo-secao surge-scroll">No Spotify</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <p className="spotify-secao-intro surge-scroll">
            Mergulha na atmosfera de <em>Entre Mundos</em> com a música da autora — disponível agora no Spotify.
          </p>
          <div className="spotify-embed-secao surge-scroll">
            <iframe
              src="https://open.spotify.com/embed/artist/5aobzQ38sH1bb1FgakfUU7?utm_source=generator&theme=0"
              width="100%"
              height="352"
              style={{ border: "none" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="A. Phoenix no Spotify"
            />
          </div>
          <div className="botao-centro surge-scroll">
            <a
              href="https://open.spotify.com/artist/5aobzQ38sH1bb1FgakfUU7"
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao-spotify"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.305a.748.748 0 0 1-1.03.25c-2.818-1.723-6.365-2.112-10.54-1.157a.748.748 0 0 1-.346-1.446c4.566-1.044 8.481-.595 11.64 1.338a.748.748 0 0 1 .276.015zM18.99 14.03a.936.936 0 0 1-1.287.308c-3.226-1.982-8.14-2.557-11.953-1.4a.937.937 0 0 1-.539-1.787c4.355-1.322 9.763-.682 13.47 1.592a.934.934 0 0 1 .31 1.287zm.127-3.403C16.27 8.424 9.986 8.22 6.397 9.33a1.123 1.123 0 0 1-.696-2.137c4.112-1.34 10.944-1.081 15.258 1.558a1.123 1.123 0 0 1-1.842 1.876z" />
              </svg>
              Seguir no Spotify
            </a>
          </div>
        </div>
      </section>

      <Divisor de="var(--sombra)" para="var(--creme)" />

      {/* ============ VÍDEO ============ */}
      <section className="secao-video">
        <div className="container">
          <p className="titulo-secao fundo-claro surge-scroll">Vê o Reel</p>
          <div className="linha-ouro surge-scroll" />
          <div className="video-embed-wrap surge-scroll">
            <video controls playsInline poster="/assets/livro/capa-frontal.webp" className="video-nativo">
              <source src="/assets/video/reel-entre-mundos.mp4" type="video/mp4" />
              O teu navegador não suporta vídeo incorporado.
            </video>
            <p className="video-copyright">© Helyd.dreambooks</p>
          </div>
        </div>
      </section>

      <DivisorInverso de="var(--creme)" para="var(--sombra)" />

      {/* ============ SINOPSE ============ */}
      <section className="secao-sinopse" id="sinopse">
        <div className="container">
          <p className="titulo-secao surge-scroll">Sinopse</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <div className="sinopse-texto surge-scroll">
            <p>Quando uma fenda invisível se abre entre mundos, nada permanece intocado. Gabrielle, uma jovem marcada por segredos que desconhece, torna-se o centro de uma disputa ancestral entre a luz e a escuridão.</p>
            <p>Enquanto a sua família desmorona e forças ocultas se aproximam, um amor proibido, um passado esquecido e uma promessa feita há séculos começam a despertar. No coração de Londres, uma sombra ganha forma. No silêncio de uma aldeia distante, um guardião regressa. E em cada canto do mundo, destinos que nunca deveriam cruzar-se começam a entrelaçar-se.</p>
            <p>Entre revelações, traições e um poder que ninguém compreende completamente, Gabrielle descobre que algumas verdades não iluminam — queimam.</p>
            <p>Este é o início de uma saga onde nada é o que parece, e onde cada escolha pode salvar ou destruir tudo o que existe.</p>
          </div>
          <div className="sinopse-cta surge-scroll">
            <button type="button" className="botao botao-solido" data-adquirir>Adquirir Agora</button>
          </div>
        </div>
      </section>

      <Divisor de="var(--sombra)" para="var(--branco-puro)" />

      {/* ============ AMOSTRA GRÁTIS (FLIPBOOK) ============ */}
      <section className="secao-amostra">
        <div className="container">
          <p className="titulo-secao fundo-claro surge-scroll">Amostra Grátis</p>
          <div className="linha-ouro surge-scroll" />
          <h2 className="amostra-titulo surge-scroll">Lê as Primeiras Páginas</h2>
          <p className="amostra-intro surge-scroll">Um fragmento do Capítulo 1 — vira a página para continuar.</p>
          <div className="surge-scroll">
            <FlipbookAmostra />
          </div>
        </div>
      </section>

      <DivisorInverso de="var(--branco-puro)" para="var(--violeta)" />

      {/* ============ A SAGA EM NÚMEROS ============ */}
      <section className="secao-stats" id="stats">
        <div className="container">
          <p className="titulo-secao surge-scroll">A Saga em Números</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <div className="stats-grid surge-scroll">
            <div className="stat-item">
              <span className="stat-number" data-counter="324">0</span>
              <span className="stat-label">Páginas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-counter="37">0</span>
              <span className="stat-label">Capítulos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-counter="1">0</span>
              <span className="stat-label">Livro I da Saga</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-counter="2026">0</span>
              <span className="stat-label">Ano de Publicação</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUIZ INTERATIVO ============ */}
      <section className="secao-quiz" id="quiz">
        <div className="container">
          <p className="titulo-secao surge-scroll">Teste Interativo</p>
          <div className="linha-ouro fundo-escuro surge-scroll" />
          <h2 className="quiz-titulo surge-scroll">Que Fragmento de Entre Mundos Vive em Ti?</h2>
          <p className="quiz-intro surge-scroll">Responde a estas 5 perguntas e descobre que ligação tens com a fenda entre a luz e a sombra — e qual personagem da saga mais se parece contigo.</p>

          <div className="quiz-card surge-scroll" data-quiz>
            <div className="quiz-progresso">
              <div className="quiz-progresso-barra"><div className="quiz-progresso-preenchida" data-quiz-progresso /></div>
              <span className="quiz-progresso-texto">Pergunta <span data-quiz-atual>1</span> de <span data-quiz-total>5</span></span>
            </div>

            <div className="quiz-perguntas">
              <div className="quiz-pergunta quiz-pergunta-ativa" data-quiz-pergunta>
                <h3>1. Encontras uma porta escondida que ninguém mais parece ver. O que fazes?</h3>
                <div className="quiz-opcoes">
                  <button type="button" className="quiz-opcao" data-perfil="caminhante">Abro-a sem hesitar — preciso de saber o que está do outro lado.</button>
                  <button type="button" className="quiz-opcao" data-perfil="guardiao">Fico de vigia, atenta a qualquer perigo antes de avançar.</button>
                  <button type="button" className="quiz-opcao" data-perfil="sombra">Sinto que já a conheço... como se fizesse parte de mim.</button>
                  <button type="button" className="quiz-opcao" data-perfil="coracao">Penso em quem eu levaria comigo, se pudesse escolher.</button>
                </div>
              </div>

              <div className="quiz-pergunta" data-quiz-pergunta>
                <h3>2. Descobres que alguém que amas guarda um segredo há anos. Como reages?</h3>
                <div className="quiz-opcoes">
                  <button type="button" className="quiz-opcao" data-perfil="caminhante">Confronto a verdade de frente — preciso de saber tudo, custe o que custar.</button>
                  <button type="button" className="quiz-opcao" data-perfil="guardiao">Protejo essa pessoa primeiro e procuro compreender depois.</button>
                  <button type="button" className="quiz-opcao" data-perfil="sombra">Não me surpreende. Há sempre algo por dizer em quem mais amamos.</button>
                  <button type="button" className="quiz-opcao" data-perfil="coracao">Pergunto-me apenas: isto muda o que sinto por ela?</button>
                </div>
              </div>

              <div className="quiz-pergunta" data-quiz-pergunta>
                <h3>3. Estás em Londres, sozinha, à noite. Um sussurro chama-te pelo nome. O que sentes?</h3>
                <div className="quiz-opcoes">
                  <button type="button" className="quiz-opcao" data-perfil="caminhante">Curiosidade. Sigo o som até onde ele me levar.</button>
                  <button type="button" className="quiz-opcao" data-perfil="guardiao">Alerta. Algo não está bem — e preciso de estar pronta.</button>
                  <button type="button" className="quiz-opcao" data-perfil="sombra">Calma, como se, finalmente, alguém me reconhecesse.</button>
                  <button type="button" className="quiz-opcao" data-perfil="coracao">Um arrepio... e a certeza de que já vivi este momento.</button>
                </div>
              </div>

              <div className="quiz-pergunta" data-quiz-pergunta>
                <h3>4. Se pudesses escolher um poder do universo de Entre Mundos, qual seria?</h3>
                <div className="quiz-opcoes">
                  <button type="button" className="quiz-opcao" data-perfil="caminhante">Atravessar fendas entre mundos e ver o que está para além do visível.</button>
                  <button type="button" className="quiz-opcao" data-perfil="guardiao">Proteger quem amo de qualquer perigo, mesmo invisível.</button>
                  <button type="button" className="quiz-opcao" data-perfil="sombra">Sentir e compreender as sombras que os outros preferem ignorar.</button>
                  <button type="button" className="quiz-opcao" data-perfil="coracao">Saber, ao olhar nos olhos de alguém, se o destino nos liga.</button>
                </div>
              </div>

              <div className="quiz-pergunta" data-quiz-pergunta>
                <h3>5. No final, o que mais desejas para a tua própria história?</h3>
                <div className="quiz-opcoes">
                  <button type="button" className="quiz-opcao" data-perfil="caminhante">Respostas — não importa quantos mundos seja preciso atravessar.</button>
                  <button type="button" className="quiz-opcao" data-perfil="guardiao">Coragem para proteger quem fica, mesmo quando tudo parece perdido.</button>
                  <button type="button" className="quiz-opcao" data-perfil="sombra">Aceitar, finalmente, a parte de mim que ainda tento esconder.</button>
                  <button type="button" className="quiz-opcao" data-perfil="coracao">Um amor capaz de atravessar tempo, mundos e medos.</button>
                </div>
              </div>
            </div>

            <div className="quiz-resultados">
              <div className="quiz-resultado" data-quiz-resultado="caminhante">
                <span className="quiz-resultado-simbolo" aria-hidden="true">❉</span>
                <p className="quiz-resultado-label">O teu fragmento é</p>
                <h3>Caminhante Entre Mundos</h3>
                <p>Como Gabrielle, és movido(a) pela curiosidade e pela necessidade de saber a verdade — mesmo quando ela exige atravessar fendas que outros preferem ignorar. O desconhecido não te assusta: chama-te. Em <em>Entre Mundos: O Chamado</em>, vais reconhecer-te em cada porta que ela escolhe abrir.</p>
                <div className="quiz-resultado-cta">
                  <button type="button" className="botao botao-solido" data-adquirir>Conhecer o Livro</button>
                </div>
              </div>

              <div className="quiz-resultado" data-quiz-resultado="guardiao">
                <span className="quiz-resultado-simbolo" aria-hidden="true">☀</span>
                <p className="quiz-resultado-label">O teu fragmento é</p>
                <h3>Guardião(ã) da Luz</h3>
                <p>Há em ti uma força silenciosa que protege antes de pensar em si própria. Em <em>Entre Mundos</em>, és como aqueles que escolhem ficar e lutar pela luz mesmo quando a escuridão parece mais forte. Vais identificar-te com as personagens prontas a sacrificar tudo por quem amam.</p>
                <div className="quiz-resultado-cta">
                  <button type="button" className="botao botao-solido" data-adquirir>Conhecer o Livro</button>
                </div>
              </div>

              <div className="quiz-resultado" data-quiz-resultado="sombra">
                <span className="quiz-resultado-simbolo" aria-hidden="true">☾</span>
                <p className="quiz-resultado-label">O teu fragmento é</p>
                <h3>Filho(a) da Sombra</h3>
                <p>A escuridão não te assusta — faz parte de ti. Compreendes o que muitos preferem não ver, e isso torna-te mais forte, não mais frágil. Em <em>Entre Mundos</em>, vais sentir uma ligação especial com as personagens que carregam segredos... e com a sombra que, afinal, também pode escolher um lado.</p>
                <div className="quiz-resultado-cta">
                  <button type="button" className="botao botao-solido" data-adquirir>Conhecer o Livro</button>
                </div>
              </div>

              <div className="quiz-resultado" data-quiz-resultado="coracao">
                <span className="quiz-resultado-simbolo" aria-hidden="true">❦</span>
                <p className="quiz-resultado-label">O teu fragmento é</p>
                <h3>Coração Indomável</h3>
                <p>Para ti, o que move o mundo não é o poder nem o destino — é o amor que se recusa a desistir. Em <em>Entre Mundos</em>, vais reconhecer-te nos laços que atravessam tempo, mundos e medos, e nas escolhas feitas não por dever, mas por quem se ama.</p>
                <div className="quiz-resultado-cta">
                  <button type="button" className="botao botao-solido" data-adquirir>Conhecer o Livro</button>
                </div>
              </div>

              <div className="quiz-lead">
                <p className="quiz-lead-titulo">Queres a tua carta de personagem completa?</p>
                <p className="quiz-lead-texto">Fala connosco diretamente no WhatsApp e recebe a descrição completa do teu perfil, mais um conto bónus exclusivo do universo de <em>Entre Mundos</em>.</p>
                <a
                  href="https://wa.me/351930475550?text=Ol%C3%A1!%20Acabei%20de%20fazer%20o%20quiz%20%22Que%20Fragmento%20de%20Entre%20Mundos%20Vive%20em%20Ti%3F%22%20e%20gostaria%20de%20receber%20a%20minha%20carta%20de%20personagem%20completa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botao botao-whatsapp"
                  aria-label="Falar no WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>

              <button type="button" className="quiz-reiniciar" data-quiz-reiniciar>↺ Refazer o teste</button>
            </div>
          </div>
        </div>
      </section>

      <Divisor de="var(--violeta)" para="var(--sombra)" />

      {/* ============ NOVIDADES EXCLUSIVAS ============ */}
      <section className="secao-novidades" id="experiencias">
        <div className="container">
          <p className="titulo-secao surge-scroll">Novidades Exclusivas</p>
          <p className="sub surge-scroll" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px", color: "var(--cinza-suave)" }}>
            Três experiências interativas criadas especialmente para os leitores de <em>Entre Mundos</em>. Explora, joga e decifra.
          </p>

          <div className="novidades-grid">
            {/* Mapa dos Mundos */}
            <a
              href="/experiencias/mapa.html"
              target="_blank"
              rel="noopener noreferrer"
              className="novidade-card surge-scroll"
              aria-label="Abrir Mapa dos Mundos"
            >
              <div className="novidade-icon" aria-hidden="true">🗺️</div>
              <div className="novidade-tag">Exploração</div>
              <h3 className="novidade-titulo">Mapa dos Mundos</h3>
              <p className="novidade-desc">
                Percorre os quatro mundos do livro — Londres, Paris, Pérsia Antiga e Índia. Descobre os personagens, os lugares e os segredos de cada cenário.
              </p>
              <span className="novidade-cta">
                Explorar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16} aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Jogo da Memória */}
            <a
              href="/experiencias/jogo-memoria.html"
              target="_blank"
              rel="noopener noreferrer"
              className="novidade-card surge-scroll"
              aria-label="Abrir Jogo da Memória"
            >
              <div className="novidade-icon" aria-hidden="true">🃏</div>
              <div className="novidade-tag">Jogo</div>
              <h3 className="novidade-titulo">Memória do Véu</h3>
              <p className="novidade-desc">
                Encontra os pares — cada símbolo esconde um personagem. Quantas jogadas precisas para desvendar todos os segredos do Véu?
              </p>
              <span className="novidade-cta">
                Jogar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16} aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Decifra o Pergaminho */}
            <a
              href="/experiencias/jogo-pergaminho.html"
              target="_blank"
              rel="noopener noreferrer"
              className="novidade-card surge-scroll"
              aria-label="Abrir Decifra o Pergaminho"
            >
              <div className="novidade-icon" aria-hidden="true">📜</div>
              <div className="novidade-tag">Desafio</div>
              <h3 className="novidade-titulo">Decifra o Pergaminho</h3>
              <p className="novidade-desc">
                Os símbolos do Véu têm um significado. Consegues identificar a que personagem ou lugar pertence cada símbolo ancestral?
              </p>
              <span className="novidade-cta">
                Decifrar
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16} aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Divisor de="var(--sombra)" para="var(--creme)" />

      {/* ============ SOBRE A AUTORA (teaser) ============ */}
      <section className="secao-autora" id="sobre-teaser">
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
            <p className="label-secao">Sobre a Autora</p>
            <h2 className="nome-autora">A. Phoenix</h2>
            <div className="bio-resumo">
              <p>&ldquo;Aphoenix nasceu com a alma inquieta de quem carrega histórias demais para guardar apenas para si. Leitora apaixonada desde a infância, encontrou na escrita o seu refúgio, a sua força e o seu modo de transformar emoções em mundos inteiros.&rdquo;</p>
            </div>
            <a href="/sobre" className="link-seta">Ler mais sobre a autora <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      {/* ============ BLOG (preview) ============ */}
      <section className="secao-blog" id="blog-preview">
        <div className="container">
          <p className="titulo-secao fundo-claro surge-scroll">Do Blog</p>
          <div className="linha-ouro surge-scroll" />
          <div className="blog-grid">
            <article className="card-post surge-scroll">
              <div className="blog-card-header bastidores" style={{ backgroundImage: "linear-gradient(165deg, rgba(13,13,26,.32) 0%, rgba(13,13,26,.8) 100%), url('/assets/artes/eco-do-pergaminho.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <span className="blog-card-header-simbolo">❧</span>
              </div>
              <div className="card-post-corpo">
                <span className="categoria-badge">Bastidores</span>
                <h3>Os Bastidores de Entre Mundos — Como uma saga nasceu de um silêncio</h3>
                <p>Uma viagem pelo processo criativo por trás da saga: as primeiras anotações, as dúvidas e o momento em que Gabrielle ganhou voz própria.</p>
                <span className="data-post">12 Jan 2026</span>
                <a href="/post-template" className="ler-mais">Ler mais →</a>
              </div>
            </article>

            <article className="card-post surge-scroll">
              <div className="blog-card-header reflexoes" style={{ backgroundImage: "linear-gradient(165deg, rgba(13,13,26,.32) 0%, rgba(13,13,26,.8) 100%), url('/assets/artes/sombra-que-dividiu.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <span className="blog-card-header-simbolo">✧</span>
              </div>
              <div className="card-post-corpo">
                <span className="categoria-badge">Reflexões</span>
                <h3>Gabrielle: A personagem que me ensinou a ser corajosa</h3>
                <p>Como dar vida a uma protagonista marcada por segredos me obrigou a confrontar os meus próprios medos enquanto escritora — e enquanto pessoa.</p>
                <span className="data-post">28 Jan 2026</span>
                <a href="/post-gabrielle-coragem" className="ler-mais">Ler mais →</a>
              </div>
            </article>

            <article className="card-post surge-scroll">
              <div className="blog-card-header universo" style={{ backgroundImage: "linear-gradient(165deg, rgba(13,13,26,.32) 0%, rgba(13,13,26,.8) 100%), url('/assets/artes/homem-que-parou-o-salao.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <span className="blog-card-header-simbolo">❉</span>
              </div>
              <div className="card-post-corpo">
                <span className="categoria-badge">Universo</span>
                <h3>Londres como palco — Por que escolhi esta cidade para a saga</h3>
                <p>Entre névoas, ruas antigas e segredos guardados em pedra, Londres tornou-se mais do que um cenário: tornou-se uma personagem da história.</p>
                <span className="data-post">09 Fev 2026</span>
                <a href="/post-londres-palco" className="ler-mais">Ler mais →</a>
              </div>
            </article>
          </div>
          <div className="botao-centro surge-scroll">
            <a href="/blog" className="botao botao-contorno botao-contorno-violeta">Ver Todos os Posts</a>
          </div>
        </div>
      </section>

      <DivisorInverso de="var(--branco-puro)" para="var(--violeta)" />

      {/* ============ NEWSLETTER ============ */}
      <section className="secao-newsletter">
        <div className="container surge-scroll">
          <h2>Entra no Universo</h2>
          <p className="sub">Recebe capítulos exclusivos, bastidores da saga e avisos de novos livros — fala connosco diretamente no WhatsApp.</p>
          <div className="grupo-botoes" style={{ marginBottom: "18px" }}>
            <a
              href="https://wa.me/351930475550?text=Ol%C3%A1!%20Quero%20entrar%20no%20universo%20de%20Entre%20Mundos%20e%20receber%20cap%C3%ADtulos%20exclusivos%20e%20bastidores%20da%20saga."
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao-whatsapp"
              aria-label="Entrar no universo via WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
          <p className="privacidade">Suporte direto · Sem spam · Apenas histórias.</p>
        </div>
      </section>

      <Divisor de="var(--violeta)" para="var(--sombra-profunda)" />

      <Footer />

      {/* ============ MODAL AVISO DATA DE LANÇAMENTO ============ */}
      <div id="modal-adquirir" className="modal-adquirir" role="dialog" aria-modal="true" aria-labelledby="modal-adquirir-titulo" hidden>
        <div className="modal-adquirir-caixa">
          <div className="modal-adquirir-icon" aria-hidden="true">📅</div>
          <p className="modal-adquirir-data">10 / 07 / 2026</p>
          <h2 id="modal-adquirir-titulo" className="modal-adquirir-titulo">Em breve na Amazon</h2>
          <p className="modal-adquirir-texto">
            <strong>Entre Mundos: O Chamado</strong> estará disponível para compra no dia <strong>10 de julho de 2026</strong> na Amazon. Aguarda essa data para adquirires o teu exemplar.
          </p>
          <p className="modal-adquirir-subtexto">
            Enquanto isso, explora o blog do site e acompanha todas as novidades e atualizações — há muito para descobrir antes do lançamento!
          </p>
          <div className="modal-adquirir-botoes">
            <a href="/blog" className="botao botao-solido">Ver o Blog</a>
            <button type="button" className="botao botao-contorno" id="modal-adquirir-fechar">Fechar</button>
          </div>
          <button type="button" className="modal-adquirir-x" id="modal-adquirir-x" aria-label="Fechar">✕</button>
        </div>
        <div className="modal-adquirir-fundo" id="modal-adquirir-fundo" />
      </div>
    </>
  );
}
