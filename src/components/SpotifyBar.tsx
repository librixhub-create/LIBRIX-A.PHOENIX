"use client";
import { useState } from "react";

const ARTIST_ID = "5aobzQ38sH1bb1FgakfUU7";
const ARTIST_URL = `https://open.spotify.com/artist/${ARTIST_ID}`;
const EMBED_URL  = `https://open.spotify.com/embed/artist/${ARTIST_ID}?utm_source=generator&theme=0`;

export default function SpotifyBar() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={`spotify-bar${aberto ? " spotify-bar--aberto" : ""}`} role="region" aria-label="Player do Spotify">
      {aberto && (
        <div className="spotify-bar-embed">
          <iframe
            src={EMBED_URL}
            width="100%"
            height="152"
            style={{ border: "none" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="A. Phoenix no Spotify"
          />
        </div>
      )}

      <div className="spotify-bar-controlo">
        <a
          href={ARTIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="spotify-bar-artista"
          aria-label="Abrir A. Phoenix no Spotify"
        >
          {/* Ícone Spotify */}
          <svg className="spotify-icone" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.516 17.305a.748.748 0 0 1-1.03.25c-2.818-1.723-6.365-2.112-10.54-1.157a.748.748 0 0 1-.346-1.446c4.566-1.044 8.481-.595 11.64 1.338a.748.748 0 0 1 .276.015zM18.99 14.03a.936.936 0 0 1-1.287.308c-3.226-1.982-8.14-2.557-11.953-1.4a.937.937 0 0 1-.539-1.787c4.355-1.322 9.763-.682 13.47 1.592a.934.934 0 0 1 .31 1.287zm.127-3.403C16.27 8.424 9.986 8.22 6.397 9.33a1.123 1.123 0 0 1-.696-2.137c4.112-1.34 10.944-1.081 15.258 1.558a1.123 1.123 0 0 1-1.842 1.876z" />
          </svg>
          <div className="spotify-bar-texto">
            <span className="spotify-bar-nome">A. Phoenix</span>
            <span className="spotify-bar-sub">Ouvir no Spotify</span>
          </div>
        </a>

        <div className="spotify-bar-acoes">
          <a
            href={ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="spotify-bar-btn-externo"
            aria-label="Abrir no Spotify"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Spotify</span>
          </a>
          <button
            type="button"
            className="spotify-bar-toggle"
            onClick={() => setAberto(!aberto)}
            aria-expanded={aberto}
            aria-label={aberto ? "Fechar player" : "Abrir player"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              {aberto
                ? <polyline points="18 15 12 9 6 15" />
                : <polyline points="6 9 12 15 18 9" />
              }
            </svg>
            <span>{aberto ? "Fechar" : "Player"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
