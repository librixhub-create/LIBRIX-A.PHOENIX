"use client";

import { useState } from "react";

const paginas = ["capa", "texto", "bloqueado"] as const;

export default function FlipbookAmostra() {
  const [atual, setAtual] = useState(0);

  const avancar = () => setAtual((p) => Math.min(p + 1, paginas.length - 1));
  const recuar = () => setAtual((p) => Math.max(p - 1, 0));

  return (
    <div className="flipbook-wrap">
      <div className="flipbook">
        {paginas.map((tipo, i) => (
          <div
            key={tipo}
            className={`flipbook-pagina${i < atual ? " flipbook-pagina--virada" : ""}`}
            style={{ zIndex: paginas.length - i }}
          >
            <div className="flipbook-face flipbook-face--frente">
              {tipo === "capa" && (
                <img
                  src="/assets/livro/capitulo-1-capa.jpg"
                  alt="Capítulo 1 — A Cidade que Respira"
                  className="flipbook-imagem"
                />
              )}

              {tipo === "texto" && (
                <div className="flipbook-texto">
                  <p className="flipbook-texto-titulo">Capítulo 1<br />A Cidade que Respira</p>
                  <p>Londres não os acolheu. Londres os devorou.</p>
                  <p>O ar do porto era úmido e frio, cheio de sal, carvão e madeira molhada, um cheiro que se impunha antes de qualquer convite. Gabrielle Dubois sentiu esse aroma antes mesmo do vento.</p>
                  <p>O cais vibrava sob as botas, não só pela madeira, mas pela própria cidade, que pulsava entre as pedras. As gaivotas gritavam nos mastros, os marinheiros xingavam em línguas que ela não entendia, e tudo se movia num caos com ritmo próprio.</p>
                  <p>A umidade entrava pelos tecidos e grudava no cabelo. Gabrielle passou a mão na trança, tentando afastar a sensação de que a cidade a tocava de propósito.</p>
                  <p className="flipbook-texto-final">Londres tinha presença&hellip;</p>
                </div>
              )}

              {tipo === "bloqueado" && (
                <div className="flipbook-bloqueado">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  <p className="flipbook-bloqueado-titulo">Compra</p>
                  <p className="flipbook-bloqueado-sub">Disponível em breve</p>
                </div>
              )}
            </div>
            <div className="flipbook-face flipbook-face--verso" />
          </div>
        ))}
      </div>

      <div className="flipbook-controlos">
        <button type="button" className="flipbook-seta" onClick={recuar} disabled={atual === 0} aria-label="Página anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span className="flipbook-paginacao">{atual + 1} / {paginas.length}</span>
        <button type="button" className="flipbook-seta" onClick={avancar} disabled={atual === paginas.length - 1} aria-label="Página seguinte">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}
