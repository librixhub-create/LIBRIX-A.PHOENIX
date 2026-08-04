"use client";

import { useEffect, useState } from "react";

const INICIO_PROMO = new Date("2026-07-14T00:00:00-03:00").getTime();
const FIM_PROMO = new Date("2026-07-18T23:59:59-03:00").getTime();

function calcularRestante(agora: number) {
  const diff = Math.max(0, FIM_PROMO - agora);
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    minutos: Math.floor((diff % 3600000) / 60000),
    segundos: Math.floor((diff % 60000) / 1000),
  };
}

export default function OfertaGratisSecao() {
  const [ativa, setAtiva] = useState(false);
  const [tempo, setTempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const tick = () => {
      const agora = Date.now();
      setAtiva(agora >= INICIO_PROMO && agora <= FIM_PROMO);
      setTempo(calcularRestante(agora));
    };
    tick();
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`secao-oferta-gratis${ativa ? "" : " secao-oferta-gratis--oculta"}`}>
      <div className="container">
        <div className="oferta-gratis-card surge-scroll">
          <span className="oferta-gratis-etiqueta">🎉 Oferta por Tempo Limitado</span>
          <h2 className="oferta-gratis-titulo">
            O e-book <em>Entre Mundos: O Chamado</em> está <strong>100% GRÁTIS</strong> na Amazon Kindle
          </h2>
          <p className="oferta-gratis-texto">
            De 14 a 18 de julho, baixa a tua cópia sem pagar nada. Aproveita antes que a promoção acabe.
          </p>

          <div className="oferta-gratis-countdown" aria-live="polite">
            <div className="oferta-gratis-countdown-item"><span>{tempo.dias}</span><small>dias</small></div>
            <div className="oferta-gratis-countdown-item"><span>{String(tempo.horas).padStart(2, "0")}</span><small>horas</small></div>
            <div className="oferta-gratis-countdown-item"><span>{String(tempo.minutos).padStart(2, "0")}</span><small>min</small></div>
            <div className="oferta-gratis-countdown-item"><span>{String(tempo.segundos).padStart(2, "0")}</span><small>seg</small></div>
          </div>

          <div className="oferta-gratis-botoes">
            <a
              href="https://www.amazon.com.br/dp/B0H7VNSZB6"
              target="_blank"
              rel="noopener"
              className="oferta-gratis-cta-principal"
            >
              Quero Baixar Grátis
            </a>
            <button type="button" className="oferta-gratis-cta-secundario" data-adquirir>
              Ver Versões Impressas
            </button>
          </div>
          <p className="oferta-gratis-rodape">Capa comum e capa dura com desconto especial.</p>
        </div>
      </div>
    </section>
  );
}
