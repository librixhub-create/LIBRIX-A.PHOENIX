"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { regrasChat, respostaPadrao, sugestoesIniciais, WHATSAPP_LINK } from "@/data/chatRespostas";

type Mensagem = { id: number; autor: "bot" | "usuario"; texto: string };

const MAPA_ACENTOS: Record<string, string> = {
  "á": "a", "à": "a", "â": "a", "ã": "a", "ä": "a",
  "é": "e", "è": "e", "ê": "e", "ë": "e",
  "í": "i", "ì": "i", "î": "i", "ï": "i",
  "ó": "o", "ò": "o", "ô": "o", "õ": "o", "ö": "o",
  "ú": "u", "ù": "u", "û": "u", "ü": "u",
  "ç": "c", "ñ": "n",
};

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .split("")
    .map((caractere) => MAPA_ACENTOS[caractere] ?? caractere)
    .join("");
}

function encontrarResposta(pergunta: string): string {
  const normalizada = normalizar(pergunta);
  let melhor: { pontos: number; resposta: string | (() => string) } | null = null;

  for (const regra of regrasChat) {
    let pontos = 0;
    for (const palavra of regra.palavrasChave) {
      if (normalizada.includes(normalizar(palavra))) pontos++;
    }
    if (pontos > 0 && (!melhor || pontos > melhor.pontos)) {
      melhor = { pontos, resposta: regra.resposta };
    }
  }

  if (!melhor) return respostaPadrao;
  return typeof melhor.resposta === "function" ? melhor.resposta() : melhor.resposta;
}

function renderizarTexto(texto: string): ReactNode[] {
  const partes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let ultimo = 0;
  let match: RegExpExecArray | null;
  let chave = 0;

  while ((match = regex.exec(texto)) !== null) {
    if (match.index > ultimo) partes.push(texto.slice(ultimo, match.index));
    if (match[1] && match[2]) {
      const externo = match[2].startsWith("http");
      partes.push(
        <a
          key={chave++}
          href={match[2]}
          target={externo ? "_blank" : undefined}
          rel={externo ? "noopener" : undefined}
          className="chat-phoenix-link"
        >
          {match[1]}
        </a>
      );
    } else if (match[3]) {
      partes.push(<strong key={chave++}>{match[3]}</strong>);
    }
    ultimo = regex.lastIndex;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return partes;
}

let proximoId = 1;
function criarMensagem(autor: "bot" | "usuario", texto: string): Mensagem {
  return { id: proximoId++, autor, texto };
}

const SAUDACAO_INICIAL =
  "Olá! 🌹 Sou a Phoenix, assistente virtual deste site. Posso ajudar com informações sobre o livro, formas de compra, personagens e muito mais. O que gostarias de saber?";

export default function ChatPhoenix() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [entrada, setEntrada] = useState("");
  const [digitando, setDigitando] = useState(false);
  const [mostrarSugestoes, setMostrarSugestoes] = useState(true);
  const [temNotificacao, setTemNotificacao] = useState(false);
  const corpoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem("chatPhoenixAberto")) {
      const timeoutId = setTimeout(() => setTemNotificacao(true), 4000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (corpoRef.current) {
      corpoRef.current.scrollTop = corpoRef.current.scrollHeight;
    }
  }, [mensagens, digitando]);

  const abrirChat = () => {
    setAberto(true);
    setTemNotificacao(false);
    sessionStorage.setItem("chatPhoenixAberto", "1");
    setMensagens((atual) => (atual.length === 0 ? [criarMensagem("bot", SAUDACAO_INICIAL)] : atual));
  };

  const enviarPergunta = (pergunta: string) => {
    const textoLimpo = pergunta.trim();
    if (!textoLimpo) return;

    setMensagens((atual) => [...atual, criarMensagem("usuario", textoLimpo)]);
    setEntrada("");
    setMostrarSugestoes(false);
    setDigitando(true);

    const atraso = 550 + Math.random() * 500;
    setTimeout(() => {
      const resposta = encontrarResposta(textoLimpo);
      setMensagens((atual) => [...atual, criarMensagem("bot", resposta)]);
      setDigitando(false);
    }, atraso);
  };

  const aoSubmeter = (e: React.FormEvent) => {
    e.preventDefault();
    enviarPergunta(entrada);
  };

  return (
    <div className="chat-phoenix">
      {aberto && (
        <div className="chat-phoenix-painel" role="dialog" aria-label="Chat com Phoenix, assistente virtual">
          <div className="chat-phoenix-cabecalho">
            <div className="chat-phoenix-avatar">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo/logo-120.png" alt="" />
              <span className="chat-phoenix-status" aria-hidden="true" />
            </div>
            <div className="chat-phoenix-titulo">
              <span className="chat-phoenix-nome">Phoenix</span>
              <span className="chat-phoenix-sub">Assistente virtual · online</span>
            </div>
            <button type="button" className="chat-phoenix-fechar" onClick={() => setAberto(false)} aria-label="Fechar chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="chat-phoenix-corpo" ref={corpoRef}>
            {mensagens.map((m) => (
              <div key={m.id} className={`chat-phoenix-msg chat-phoenix-msg--${m.autor}`}>
                {renderizarTexto(m.texto)}
              </div>
            ))}

            {digitando && (
              <div className="chat-phoenix-digitando">
                <span /><span /><span />
              </div>
            )}

            {mostrarSugestoes && !digitando && (
              <div className="chat-phoenix-sugestoes">
                {sugestoesIniciais.map((sugestao) => (
                  <button key={sugestao} type="button" className="chat-phoenix-chip" onClick={() => enviarPergunta(sugestao)}>
                    {sugestao}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form className="chat-phoenix-rodape" onSubmit={aoSubmeter}>
            <input
              type="text"
              value={entrada}
              onChange={(e) => setEntrada(e.target.value)}
              placeholder="Escreve a tua pergunta..."
              aria-label="Escreve a tua pergunta"
            />
            <button type="submit" aria-label="Enviar" disabled={!entrada.trim()}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22 11 13 2 9 22 2Z" />
              </svg>
            </button>
          </form>

          <p className="chat-phoenix-rodape-nota">
            Respostas automáticas · precisas de mais?{" "}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener">Fala no WhatsApp</a>
          </p>
        </div>
      )}

      <button
        type="button"
        className={`chat-phoenix-botao${temNotificacao ? " chat-phoenix-botao--notificacao" : ""}`}
        onClick={() => (aberto ? setAberto(false) : abrirChat())}
        aria-label={aberto ? "Fechar chat" : "Abrir chat com Phoenix"}
      >
        {aberto ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src="/assets/logo/logo-120.png" alt="" className="chat-phoenix-botao-logo" />
        )}
      </button>
    </div>
  );
}
