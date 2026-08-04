"use client";

import { useEffect, useState } from "react";

const INICIO_PROMO = new Date("2026-07-14T00:00:00-03:00").getTime();
const FIM_PROMO = new Date("2026-07-18T23:59:59-03:00").getTime();
const CHAVE_SESSAO = "ofertaBannerFechado";

function calcularRestante(agora: number) {
  const diff = Math.max(0, FIM_PROMO - agora);
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    minutos: Math.floor((diff % 3600000) / 60000),
    segundos: Math.floor((diff % 60000) / 1000),
  };
}

export default function OfertaGratisBanner() {
  const [ativa, setAtiva] = useState(false);
  const [fechado, setFechado] = useState(false);
  const [tempo, setTempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    if (sessionStorage.getItem(CHAVE_SESSAO)) setFechado(true);

    const tick = () => {
      const agora = Date.now();
      setAtiva(agora >= INICIO_PROMO && agora <= FIM_PROMO);
      setTempo(calcularRestante(agora));
    };
    tick();
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const visivel = ativa && !fechado;
    document.body.classList.toggle("tem-oferta-banner", visivel);
    return () => document.body.classList.remove("tem-oferta-banner");
  }, [ativa, fechado]);

  if (!ativa || fechado) return null;

  const fechar = () => {
    setFechado(true);
    sessionStorage.setItem(CHAVE_SESSAO, "1");
  };

  return (
    <div className="oferta-banner" role="region" aria-label="Oferta por tempo limitado">
      <div className="oferta-banner-conteudo">
        <span className="oferta-banner-tag">🎉 Grátis</span>
        <span className="oferta-banner-texto">
          <em>Entre Mundos: O Chamado</em> está 100% grátis no Kindle — só até 18/07!
        </span>
        <span className="oferta-banner-countdown">
          {tempo.dias}d {String(tempo.horas).padStart(2, "0")}h {String(tempo.minutos).padStart(2, "0")}m {String(tempo.segundos).padStart(2, "0")}s
        </span>
        <a
          href="https://www.amazon.com.br/dp/B0H7VNSZB6"
          target="_blank"
          rel="noopener"
          className="oferta-banner-cta"
        >
          Baixar Grátis
        </a>
      </div>
      <button type="button" className="oferta-banner-x" onClick={fechar} aria-label="Fechar aviso">✕</button>
    </div>
  );
}
