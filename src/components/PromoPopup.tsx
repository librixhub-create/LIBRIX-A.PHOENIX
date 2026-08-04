"use client";

import { useEffect, useState } from "react";

const INICIO_PROMO = new Date("2026-07-14T00:00:00-03:00").getTime();
const FIM_PROMO = new Date("2026-07-18T23:59:59-03:00").getTime();
const CHAVE_SESSAO = "promoGratisVisto";

function calcularRestante(agora: number) {
  const diff = Math.max(0, FIM_PROMO - agora);
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    minutos: Math.floor((diff % 3600000) / 60000),
    segundos: Math.floor((diff % 60000) / 1000),
    encerrado: diff <= 0,
  };
}

export default function PromoPopup() {
  const [aberto, setAberto] = useState(false);
  const [tempo, setTempo] = useState(() => calcularRestante(Date.now()));

  useEffect(() => {
    const agora = Date.now();
    if (agora < INICIO_PROMO || agora > FIM_PROMO) return;
    if (sessionStorage.getItem(CHAVE_SESSAO)) return;

    const timeoutId = setTimeout(() => {
      setAberto(true);
      sessionStorage.setItem(CHAVE_SESSAO, "1");
    }, 1600);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const intervalId = setInterval(() => {
      const restante = calcularRestante(Date.now());
      setTempo(restante);
      if (restante.encerrado) {
        setAberto(false);
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [aberto]);

  const fechar = () => setAberto(false);

  return (
    <div
      className="promo-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-titulo"
      hidden={!aberto}
    >
      <div className="promo-popup-fundo" onClick={fechar} />
      <div className="promo-popup-caixa">
        <button type="button" className="promo-popup-x" onClick={fechar} aria-label="Fechar">✕</button>

        <span className="promo-popup-etiqueta">🎉 Oferta por Tempo Limitado</span>

        <p id="promo-popup-titulo" className="promo-popup-titulo">
          O e-book <em>Entre Mundos: O Chamado</em> está <strong>100% GRÁTIS</strong> na Amazon Kindle!
        </p>
        <p className="promo-popup-texto">
          De 14 a 18 de julho, baixa a tua cópia sem pagar nada. Aproveita antes que a promoção acabe.
        </p>

        <div className="promo-popup-countdown" aria-live="polite">
          <div className="promo-popup-countdown-item"><span>{tempo.dias}</span><small>dias</small></div>
          <div className="promo-popup-countdown-item"><span>{String(tempo.horas).padStart(2, "0")}</span><small>horas</small></div>
          <div className="promo-popup-countdown-item"><span>{String(tempo.minutos).padStart(2, "0")}</span><small>min</small></div>
          <div className="promo-popup-countdown-item"><span>{String(tempo.segundos).padStart(2, "0")}</span><small>seg</small></div>
        </div>

        <a
          href="https://www.amazon.com.br/dp/B0H7VNSZB6"
          target="_blank"
          rel="noopener"
          className="promo-popup-cta-principal"
          onClick={fechar}
        >
          Quero Baixar Grátis
        </a>

        <p className="promo-popup-sub">Prefere o livro impresso? Capa comum e capa dura com desconto especial.</p>
        <button type="button" className="promo-popup-cta-secundario" data-adquirir onClick={fechar}>
          Ver Versões Impressas
        </button>
      </div>
    </div>
  );
}
