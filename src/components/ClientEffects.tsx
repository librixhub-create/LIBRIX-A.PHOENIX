"use client";

// Port quase verbatim de main.js (DOM vanilla) — usado em vez de estado React
// porque preserva exatamente o comportamento original do site estático,
// e cada navegação entre páginas aqui é um load completo (ver <a> simples
// em Nav/Footer), pelo que este efeito corre de novo em cada página tal
// como o script corria em cada load do site original.
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const prefereMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // ---------- Navegação: fundo ao scroll ----------
    const nav = document.querySelector(".nav") as HTMLElement | null;
    if (nav) {
      const aoScrollar = () => {
        if (window.scrollY > 60) nav.classList.add("nav-scroll");
        else nav.classList.remove("nav-scroll");
      };
      aoScrollar();
      window.addEventListener("scroll", aoScrollar, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", aoScrollar));
    }

    // ---------- Menu mobile (hamburger) ----------
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if (toggle && links) {
      const onToggle = () => {
        toggle.classList.toggle("aberto");
        links.classList.toggle("aberto");
        const aberto = links.classList.contains("aberto");
        toggle.setAttribute("aria-expanded", aberto ? "true" : "false");
      };
      const onLinkClick = () => {
        toggle.classList.remove("aberto");
        links.classList.remove("aberto");
        toggle.setAttribute("aria-expanded", "false");
      };
      toggle.addEventListener("click", onToggle);
      const linkEls = Array.from(links.querySelectorAll("a"));
      linkEls.forEach((link) => link.addEventListener("click", onLinkClick));
      cleanups.push(() => {
        toggle.removeEventListener("click", onToggle);
        linkEls.forEach((link) => link.removeEventListener("click", onLinkClick));
      });
    }

    // ---------- Scroll suave para âncoras internas ----------
    const anchorEls = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    const anchorHandlers = anchorEls.map((link) => {
      const handler = (evento: Event) => {
        const alvoId = link.getAttribute("href");
        if (!alvoId || alvoId.length < 2) return;
        const alvo = document.querySelector(alvoId);
        if (alvo) {
          evento.preventDefault();
          const topoNav = nav ? nav.offsetHeight : 0;
          const posicao = alvo.getBoundingClientRect().top + window.pageYOffset - topoNav + 1;
          window.scrollTo({ top: posicao, behavior: "smooth" });
        }
      };
      link.addEventListener("click", handler);
      return { link, handler };
    });
    cleanups.push(() => anchorHandlers.forEach(({ link, handler }) => link.removeEventListener("click", handler)));

    // ---------- Animação de entrada ao rolar a página ----------
    const elementosAnimados = document.querySelectorAll(".surge-scroll");
    let observador: IntersectionObserver | undefined;
    if (elementosAnimados.length && "IntersectionObserver" in window) {
      observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
              entrada.target.classList.add("visivel");
              observador!.unobserve(entrada.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      elementosAnimados.forEach((el) => observador!.observe(el));
      cleanups.push(() => observador!.disconnect());
    } else {
      elementosAnimados.forEach((el) => el.classList.add("visivel"));
    }

    // ---------- Parallax duplo: texto (rápido) + livro (lento) ----------
    const heroConteudo = document.querySelector(".hero-conteudo") as HTMLElement | null;
    const heroVisual   = document.querySelector(".hero-visual")   as HTMLElement | null;
    if ((heroConteudo || heroVisual) && !prefereMenosMovimento) {
      const aoScrollarParallax = () => {
        const scrollY = window.scrollY;
        const alturaJanela = window.innerHeight;
        if (scrollY < alturaJanela) {
          if (heroConteudo) {
            heroConteudo.style.transform = `translateY(${scrollY * 0.22}px)`;
            heroConteudo.style.opacity   = String(Math.max(0, 1 - scrollY / (alturaJanela * 0.7)));
          }
          if (heroVisual) {
            // O livro move-se mais devagar → cria sensação de profundidade
            heroVisual.style.transform = `translateY(${scrollY * 0.1}px)`;
            heroVisual.style.opacity   = String(Math.max(0, 1 - scrollY / (alturaJanela * 0.85)));
          }
        }
      };
      aoScrollarParallax();
      window.addEventListener("scroll", aoScrollarParallax, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", aoScrollarParallax));
    }

    // ---------- Tilt 3D nos cards ao mover o rato ----------
    if (!prefereMenosMovimento && window.matchMedia("(pointer: fine)").matches) {
      const cardsParaTilt = Array.from(
        document.querySelectorAll(".card-post, .card-personagem")
      ) as HTMLElement[];

      const tiltHandlers = cardsParaTilt.map((card) => {
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width  - 0.5;
          const y = (e.clientY - rect.top)  / rect.height - 0.5;
          card.style.transition = "box-shadow 0.15s ease";
          card.style.transform  = `perspective(700px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) translateZ(14px)`;
          card.style.boxShadow  = `${x * -24}px ${y * -24}px 48px rgba(13,13,26,0.22), 0 28px 60px rgba(26,26,46,0.2)`;
        };
        const onLeave = () => {
          card.style.transition = "transform 0.65s cubic-bezier(0.16,1,0.3,1), box-shadow 0.65s ease, border-color 0.35s ease";
          card.style.transform  = "";
          card.style.boxShadow  = "";
        };
        card.addEventListener("mousemove", onMove as EventListener);
        card.addEventListener("mouseleave", onLeave);
        return { card, onMove: onMove as EventListener, onLeave };
      });

      cleanups.push(() =>
        tiltHandlers.forEach(({ card, onMove, onLeave }) => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        })
      );
    }

    // ---------- Cursor personalizado (apenas em dispositivos com rato) ----------
    if (window.matchMedia("(pointer: fine)").matches) {
      const cursor = document.createElement("div");
      cursor.className = "cursor-personalizado";
      cursor.setAttribute("aria-hidden", "true");
      document.body.appendChild(cursor);

      let cursorAtivo = false;
      const onMouseMove = (evento: MouseEvent) => {
        cursor.style.left = evento.clientX + "px";
        cursor.style.top = evento.clientY + "px";
        if (!cursorAtivo) {
          cursor.classList.add("cursor-ativo");
          cursorAtivo = true;
        }
      };
      const onMouseLeave = () => {
        cursor.classList.remove("cursor-ativo");
        cursorAtivo = false;
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);

      const elementosInterativos = Array.from(
        document.querySelectorAll("a, button, .card-post, .botao, .book-3d, input, textarea")
      );
      const onEnter = () => cursor.classList.add("cursor-hover");
      const onLeave = () => cursor.classList.remove("cursor-hover");
      elementosInterativos.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      cleanups.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        elementosInterativos.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
        cursor.remove();
      });
    }

    // ---------- Citação do hero — efeito de máquina de escrever ----------
    const fraseHero = document.querySelector(".hero-frase") as HTMLElement | null;
    let escritaTimeoutId: ReturnType<typeof setTimeout> | undefined;
    if (fraseHero) {
      const textoCompleto = fraseHero.getAttribute("data-texto") || fraseHero.textContent?.trim() || "";

      if (prefereMenosMovimento) {
        fraseHero.textContent = textoCompleto;
      } else {
        fraseHero.textContent = "";
        const cursorEscrita = document.createElement("span");
        cursorEscrita.className = "cursor-escrita";
        fraseHero.appendChild(cursorEscrita);

        let indice = 0;
        const escrever = () => {
          if (indice <= textoCompleto.length) {
            fraseHero.textContent = textoCompleto.slice(0, indice);
            fraseHero.appendChild(cursorEscrita);
            indice++;
            const atraso = 26 + Math.random() * 38;
            escritaTimeoutId = setTimeout(escrever, atraso);
          } else {
            fraseHero.classList.add("escrita-concluida");
          }
        };
        escritaTimeoutId = setTimeout(escrever, 1900);
      }
    }
    cleanups.push(() => { if (escritaTimeoutId) clearTimeout(escritaTimeoutId); });

    // ---------- Contador animado das estatísticas da saga ----------
    const animarContador = (elemento: Element, alvo: number, duracao = 1900) => {
      let inicio: number | null = null;
      const passo = (instante: number) => {
        if (inicio === null) inicio = instante;
        const progresso = Math.min((instante - inicio) / duracao, 1);
        elemento.textContent = String(Math.floor(progresso * alvo));
        if (progresso < 1) requestAnimationFrame(passo);
        else elemento.textContent = String(alvo);
      };
      requestAnimationFrame(passo);
    };

    const numerosEstatisticas = document.querySelectorAll("[data-counter]");
    let observadorStats: IntersectionObserver | undefined;
    if (numerosEstatisticas.length) {
      if (prefereMenosMovimento) {
        numerosEstatisticas.forEach((el) => { el.textContent = el.getAttribute("data-counter"); });
      } else if ("IntersectionObserver" in window) {
        observadorStats = new IntersectionObserver(
          (entradas) => {
            entradas.forEach((entrada) => {
              if (entrada.isIntersecting) {
                numerosEstatisticas.forEach((el) =>
                  animarContador(el, parseInt(el.getAttribute("data-counter") || "0", 10))
                );
                observadorStats!.disconnect();
              }
            });
          },
          { threshold: 0.5 }
        );
        const secaoStats = document.querySelector(".secao-stats");
        if (secaoStats) observadorStats.observe(secaoStats);
        cleanups.push(() => observadorStats!.disconnect());
      } else {
        numerosEstatisticas.forEach((el) => { el.textContent = el.getAttribute("data-counter"); });
      }
    }

    // ---------- Envio de formulários Netlify via fetch (sem recarregar a página) ----------
    const enviarFormularioNetlify = (
      formulario: HTMLFormElement,
      elementoConfirmacao: Element | null,
      mensagemPadrao: string
    ) => {
      const handler = (evento: Event) => {
        evento.preventDefault();
        const dados = new FormData(formulario);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(dados as any).toString(),
        })
          .then(() => {
            formulario.reset();
            if (elementoConfirmacao) {
              elementoConfirmacao.textContent = mensagemPadrao;
              elementoConfirmacao.classList.add("mostrar");
            }
          })
          .catch(() => {
            if (elementoConfirmacao) {
              elementoConfirmacao.textContent = "Não foi possível enviar agora. Tenta novamente dentro de instantes.";
              elementoConfirmacao.classList.add("mostrar");
            }
          });
      };
      formulario.addEventListener("submit", handler);
      cleanups.push(() => formulario.removeEventListener("submit", handler));
    };

    const formNewsletter = document.querySelector('form[name="newsletter"]') as HTMLFormElement | null;
    const confirmacaoNewsletter = document.querySelector(".confirmacao-envio");
    if (formNewsletter) {
      enviarFormularioNetlify(formNewsletter, confirmacaoNewsletter, "Obrigada por entrares no universo. Verifica o teu email em breve.");
    }

    const formContacto = document.querySelector('form[name="contacto"]') as HTMLFormElement | null;
    const confirmacaoContacto = document.querySelector(".confirmacao-form");
    if (formContacto) {
      enviarFormularioNetlify(formContacto, confirmacaoContacto, "Mensagem enviada com sucesso. Obrigada por escreveres — responderei em breve.");
    }

    const formQuizLead = document.querySelector('form[name="quiz-leitor"]') as HTMLFormElement | null;
    const confirmacaoQuizLead = document.querySelector(".quiz-lead-confirmacao");
    if (formQuizLead) {
      enviarFormularioNetlify(formQuizLead, confirmacaoQuizLead, "Obrigada! Verifica o teu email para receberes o teu resultado completo.");
    }

    // ---------- Player personalizado da prévia em áudio (audiobook) ----------
    const audioPlayer = document.querySelector("[data-audio-player]");
    if (audioPlayer) {
      const audioEl = audioPlayer.querySelector("[data-audio-elemento]") as HTMLAudioElement;
      const botaoAudio = audioPlayer.querySelector("[data-audio-toggle]") as HTMLButtonElement;
      const barraAudio = audioPlayer.querySelector("[data-audio-barra]") as HTMLElement;
      const progressoAudio = audioPlayer.querySelector("[data-audio-progresso]") as HTMLElement;
      const tempoAtual = audioPlayer.querySelector("[data-audio-atual]") as HTMLElement;
      const tempoTotal = audioPlayer.querySelector("[data-audio-total]") as HTMLElement;

      const formatarTempo = (segundos: number) => {
        if (!isFinite(segundos) || segundos < 0) return "0:00";
        const min = Math.floor(segundos / 60);
        const seg = Math.floor(segundos % 60);
        return min + ":" + (seg < 10 ? "0" : "") + seg;
      };

      const atualizarEstadoBotao = (aTocar: boolean) => {
        audioPlayer.classList.toggle("a-tocar", aTocar);
        botaoAudio.setAttribute("aria-pressed", aTocar ? "true" : "false");
        botaoAudio.setAttribute("aria-label", aTocar ? "Pausar prévia em áudio" : "Reproduzir prévia em áudio");
      };

      const onLoadedMetadata = () => { tempoTotal.textContent = formatarTempo(audioEl.duration); };
      const onTimeUpdate = () => {
        tempoAtual.textContent = formatarTempo(audioEl.currentTime);
        if (audioEl.duration) {
          const percentagem = (audioEl.currentTime / audioEl.duration) * 100;
          progressoAudio.style.width = percentagem + "%";
          barraAudio.setAttribute("aria-valuenow", String(Math.round(percentagem)));
        }
      };
      const onEnded = () => {
        atualizarEstadoBotao(false);
        progressoAudio.style.width = "0%";
        barraAudio.setAttribute("aria-valuenow", "0");
        audioEl.currentTime = 0;
      };
      const onBotaoClick = () => {
        if (audioEl.paused) {
          audioEl.play();
          atualizarEstadoBotao(true);
        } else {
          audioEl.pause();
          atualizarEstadoBotao(false);
        }
      };
      const procurarPosicao = (clientX: number) => {
        if (!audioEl.duration) return;
        const retangulo = barraAudio.getBoundingClientRect();
        const fracao = Math.min(1, Math.max(0, (clientX - retangulo.left) / retangulo.width));
        audioEl.currentTime = fracao * audioEl.duration;
      };
      const onBarraClick = (evento: MouseEvent) => procurarPosicao(evento.clientX);
      const onBarraKeydown = (evento: KeyboardEvent) => {
        if (!audioEl.duration) return;
        if (evento.key === "ArrowRight") audioEl.currentTime = Math.min(audioEl.duration, audioEl.currentTime + 5);
        if (evento.key === "ArrowLeft") audioEl.currentTime = Math.max(0, audioEl.currentTime - 5);
      };

      audioEl.addEventListener("loadedmetadata", onLoadedMetadata);
      audioEl.addEventListener("timeupdate", onTimeUpdate);
      audioEl.addEventListener("ended", onEnded);
      botaoAudio.addEventListener("click", onBotaoClick);
      barraAudio.addEventListener("click", onBarraClick as any);
      barraAudio.addEventListener("keydown", onBarraKeydown as any);

      cleanups.push(() => {
        audioEl.removeEventListener("loadedmetadata", onLoadedMetadata);
        audioEl.removeEventListener("timeupdate", onTimeUpdate);
        audioEl.removeEventListener("ended", onEnded);
        botaoAudio.removeEventListener("click", onBotaoClick);
        barraAudio.removeEventListener("click", onBarraClick as any);
        barraAudio.removeEventListener("keydown", onBarraKeydown as any);
      });
    }

    // ---------- Quiz interativo: "Que Fragmento de Entre Mundos Vive em Ti?" ----------
    const quiz = document.querySelector("[data-quiz]");
    if (quiz) {
      const perguntasQuiz = Array.from(quiz.querySelectorAll("[data-quiz-pergunta]"));
      const resultadosQuiz = Array.from(quiz.querySelectorAll("[data-quiz-resultado]"));
      const progressoQuizBarra = quiz.querySelector("[data-quiz-progresso]") as HTMLElement;
      const progressoQuizAtual = quiz.querySelector("[data-quiz-atual]") as HTMLElement;
      const inputPerfilQuiz = quiz.querySelector("[data-quiz-perfil-input]") as HTMLInputElement | null;
      const botaoReiniciarQuiz = quiz.querySelector("[data-quiz-reiniciar]");

      let indiceQuizAtual = 0;
      let pontuacoesQuiz: Record<string, number> = {};

      const mostrarPerguntaQuiz = (indice: number) => {
        perguntasQuiz.forEach((pergunta, i) => {
          pergunta.classList.toggle("quiz-pergunta-ativa", i === indice);
        });
        progressoQuizBarra.style.width = (indice / perguntasQuiz.length) * 100 + "%";
        progressoQuizAtual.textContent = String(indice + 1);
      };

      const mostrarResultadoQuiz = () => {
        const perfilVencedor = Object.keys(pontuacoesQuiz).reduce((a, b) =>
          pontuacoesQuiz[a] >= pontuacoesQuiz[b] ? a : b
        );

        resultadosQuiz.forEach((resultado) => {
          resultado.classList.toggle("quiz-resultado-ativo", resultado.getAttribute("data-quiz-resultado") === perfilVencedor);
        });

        if (inputPerfilQuiz) inputPerfilQuiz.value = perfilVencedor;
        progressoQuizBarra.style.width = "100%";
        quiz.classList.add("quiz-concluido");
      };

      const reiniciarQuiz = () => {
        indiceQuizAtual = 0;
        pontuacoesQuiz = {};
        quiz.classList.remove("quiz-concluido");
        mostrarPerguntaQuiz(0);
      };

      const opcaoHandlers: Array<{ el: Element; handler: () => void }> = [];
      perguntasQuiz.forEach((pergunta) => {
        pergunta.querySelectorAll("[data-perfil]").forEach((opcao) => {
          const handler = () => {
            const perfil = opcao.getAttribute("data-perfil")!;
            pontuacoesQuiz[perfil] = (pontuacoesQuiz[perfil] || 0) + 1;
            indiceQuizAtual++;
            if (indiceQuizAtual < perguntasQuiz.length) mostrarPerguntaQuiz(indiceQuizAtual);
            else mostrarResultadoQuiz();
          };
          opcao.addEventListener("click", handler);
          opcaoHandlers.push({ el: opcao, handler });
        });
      });

      if (botaoReiniciarQuiz) botaoReiniciarQuiz.addEventListener("click", reiniciarQuiz);

      mostrarPerguntaQuiz(0);

      cleanups.push(() => {
        opcaoHandlers.forEach(({ el, handler }) => el.removeEventListener("click", handler));
        if (botaoReiniciarQuiz) botaoReiniciarQuiz.removeEventListener("click", reiniciarQuiz);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
