"use client";

import { useEffect, useState } from "react";
import { personagens, type Personagem } from "@/data/personagens";

const TOTAL_RONDAS = 8;
const OPCOES_POR_RONDA = 4;

function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

type Ronda = { certo: Personagem; opcoes: Personagem[] };

function gerarRondas(): Ronda[] {
  const alvos = embaralhar(personagens).slice(0, TOTAL_RONDAS);
  return alvos.map((certo) => {
    const distratores = embaralhar(personagens.filter((p) => p.slug !== certo.slug)).slice(0, OPCOES_POR_RONDA - 1);
    return { certo, opcoes: embaralhar([certo, ...distratores]) };
  });
}

function classificacao(pontuacao: number, total: number) {
  const percentagem = pontuacao / total;
  if (percentagem === 1) {
    return {
      titulo: "Vidente do Véu",
      texto: "Conheces Entre Mundos como se tivesses vivido cada capítulo. Nenhum rosto desta saga te escapa.",
    };
  }
  if (percentagem >= 0.75) {
    return {
      titulo: "Guardiã(ão) Atenta",
      texto: "Reconheces quase todos os que habitam esta saga — só faltam alguns segredos por desvendar.",
    };
  }
  if (percentagem >= 0.5) {
    return {
      titulo: "Caminhante Curiosa(o)",
      texto: "Já sentes o chamado da história, mas há personagens que ainda guardam surpresas para ti.",
    };
  }
  return {
    titulo: "Ainda Perdida(o) entre Mundos",
    texto: "A fenda apenas começou a abrir-se. Lê Entre Mundos: O Chamado e volta para reconhecer todos os rostos.",
  };
}

export default function JogoPersonagens() {
  const [rondas, setRondas] = useState<Ronda[] | null>(null);
  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [sequencia, setSequencia] = useState(0);
  const [melhorSequencia, setMelhorSequencia] = useState(0);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [terminado, setTerminado] = useState(false);

  useEffect(() => {
    setRondas(gerarRondas());
  }, []);

  if (!rondas) {
    return (
      <div className="jogo-personagens-caixa jogo-personagens-carregando">
        <p className="jogo-personagens-pista-label">A preparar o jogo...</p>
      </div>
    );
  }

  const rondaAtual = rondas[indice];

  const escolher = (slug: string) => {
    if (selecionado) return;
    setSelecionado(slug);
    const acertou = slug === rondaAtual.certo.slug;

    if (acertou) {
      setPontuacao((p) => p + 1);
      setSequencia((s) => {
        const nova = s + 1;
        setMelhorSequencia((m) => Math.max(m, nova));
        return nova;
      });
    } else {
      setSequencia(0);
    }

    setTimeout(() => {
      if (indice + 1 < rondas.length) {
        setIndice((i) => i + 1);
        setSelecionado(null);
      } else {
        setTerminado(true);
      }
    }, 1300);
  };

  const jogarDeNovo = () => {
    setRondas(gerarRondas());
    setIndice(0);
    setPontuacao(0);
    setSequencia(0);
    setMelhorSequencia(0);
    setSelecionado(null);
    setTerminado(false);
  };

  if (terminado) {
    const resultado = classificacao(pontuacao, rondas.length);
    return (
      <div className="jogo-personagens-caixa jogo-personagens-fim">
        <span className="jogo-personagens-etiqueta">Resultado Final</span>
        <p className="jogo-personagens-pontuacao">{pontuacao} / {rondas.length}</p>
        <h2 className="jogo-personagens-titulo-fim">{resultado.titulo}</h2>
        <p className="jogo-personagens-texto-fim">{resultado.texto}</p>
        {melhorSequencia >= 3 && (
          <p className="jogo-personagens-sequencia">🔥 Melhor sequência de acertos: {melhorSequencia}</p>
        )}
        <div className="jogo-personagens-botoes-fim">
          <button type="button" className="botao botao-solido" onClick={jogarDeNovo}>Jogar Novamente</button>
          <a href="/#o-livro" className="botao botao-contorno">Adquirir o Livro</a>
        </div>
      </div>
    );
  }

  return (
    <div className="jogo-personagens-caixa">
      <div className="jogo-personagens-topo">
        <span className="jogo-personagens-ronda">Ronda {indice + 1} de {rondas.length}</span>
        <span className="jogo-personagens-pontos">
          Pontos: {pontuacao}{sequencia >= 2 ? ` · sequência x${sequencia}` : ""}
        </span>
      </div>
      <div className="jogo-personagens-progresso">
        <div
          className="jogo-personagens-progresso-preenchida"
          style={{ width: `${(indice / rondas.length) * 100}%` }}
        />
      </div>

      <div className="jogo-personagens-pista">
        <p className="jogo-personagens-pista-label">Quem é...</p>
        <p className="jogo-personagens-pista-papel">— {rondaAtual.certo.papel} —</p>
        <p className="jogo-personagens-pista-mundo">{rondaAtual.certo.mundo}</p>
      </div>

      <div className="jogo-personagens-opcoes">
        {rondaAtual.opcoes.map((op) => {
          const ehCorreto = op.slug === rondaAtual.certo.slug;
          const foiEscolhido = selecionado === op.slug;
          let classeEstado = "";
          if (selecionado) {
            if (ehCorreto) classeEstado = " jogo-personagens-opcao--correta";
            else if (foiEscolhido) classeEstado = " jogo-personagens-opcao--errada";
            else classeEstado = " jogo-personagens-opcao--neutra";
          }
          return (
            <button
              key={op.slug}
              type="button"
              className={`jogo-personagens-opcao${classeEstado}`}
              onClick={() => escolher(op.slug)}
              disabled={!!selecionado}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={op.foto} alt={op.nome} className="jogo-personagens-opcao-foto" loading="lazy" />
              <span className="jogo-personagens-opcao-nome">{op.nome}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
