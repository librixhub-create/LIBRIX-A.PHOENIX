export type RegraChat = {
  id: string;
  palavrasChave: string[];
  resposta: string | (() => string);
};

const INICIO_PROMO = new Date("2026-07-14T00:00:00-03:00").getTime();
const FIM_PROMO = new Date("2026-07-18T23:59:59-03:00").getTime();

function respostaPromo(): string {
  const agora = Date.now();
  if (agora < INICIO_PROMO) {
    return "Sim! De 14 a 18 de julho, o e-book vai estar 100% GRÁTIS na Amazon Kindle. Guarda a data! 🎉";
  }
  if (agora <= FIM_PROMO) {
    return 'Sim! Até 18 de julho às 23:59, o e-book está 100% GRÁTIS no Kindle. O botão "Quero Baixar Grátis" está espalhado pelo site — aproveita antes que acabe! 🎉';
  }
  return "A promoção do e-book grátis (14 a 18 de julho) já terminou, mas o livro continua disponível na Amazon em Kindle, Capa Comum e Capa Dura. Fica de olho nas redes da A. Phoenix — pode haver novas promoções em breve! 😉";
}

export const WHATSAPP_LINK =
  "https://wa.me/351930475550?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda.";

export const regrasChat: RegraChat[] = [
  {
    id: "saudacao",
    palavrasChave: ["oi", "ola", "olá", "hey", "bom dia", "boa tarde", "boa noite", "hello", "eae", "opa", "e ai", "e aí"],
    resposta:
      "Olá! 🌹 Sou a Phoenix, assistente virtual deste site. Posso ajudar com informações sobre o livro, formas de compra, personagens e muito mais. O que gostarias de saber?",
  },
  {
    id: "preco_compra",
    palavrasChave: ["preco", "preço", "quanto custa", "valor", "comprar", "onde comprar", "adquirir", "amazon", "link"],
    resposta:
      'Podes adquirir **Entre Mundos: O Chamado** diretamente na Amazon, em três formatos: Kindle, Capa Comum e Capa Dura — cada um com o seu preço próprio. Clica em "Adquirir Agora" em qualquer parte do site para veres os três links diretos. 📖',
  },
  {
    id: "formatos",
    palavrasChave: ["formato", "kindle", "ebook", "e-book", "capa dura", "capa comum", "fisico", "físico", "digital", "versao", "versão"],
    resposta:
      'O livro está disponível em 3 formatos: **Kindle** (digital), **Capa Comum** e **Capa Dura** — todos através da Amazon. Escolhe o que preferires no botão "Adquirir Agora"! ✨',
  },
  {
    id: "gratis_promo",
    palavrasChave: ["gratis", "grátis", "free", "promocao", "promoção", "desconto", "oferta"],
    resposta: respostaPromo,
  },
  {
    id: "sinopse",
    palavrasChave: ["sinopse", "resumo", "do que se trata", "sobre o que", "historia", "história", "enredo", "trama", "livro fala sobre"],
    resposta:
      "Quando uma fenda invisível se abre entre mundos, nada permanece intocado. Gabrielle, uma jovem marcada por segredos que desconhece, torna-se o centro de uma disputa ancestral entre a luz e a escuridão — numa saga passada entre Londres, Paris e mundos além da Fenda. A sinopse completa está na secção 'Sinopse' da página inicial. 🌙",
  },
  {
    id: "paginas",
    palavrasChave: ["paginas", "páginas", "quantas paginas", "tamanho do livro", "capitulos", "capítulos"],
    resposta: "Entre Mundos: O Chamado tem 388 páginas, divididas em 37 capítulos. É o Livro I de uma saga maior! 📚",
  },
  {
    id: "personagens",
    palavrasChave: ["personagem", "personagens", "gabrielle", "ethan", "arael", "quem sao", "quem são", "elenco"],
    resposta:
      "A saga tem um elenco rico — Gabrielle, Ethan, Arael, e muitos outros que guardam segredos próprios. Conhece todos eles na página [Personagens](/personagens), e depois testa os teus conhecimentos no jogo [Quem é Quem](/jogo-personagens)! 🎭",
  },
  {
    id: "autora",
    palavrasChave: ["autora", "quem escreveu", "quem e a phoenix", "quem é a phoenix", "biografia", "sobre a autora", "a phoenix"],
    resposta:
      "A. Phoenix é a autora de Entre Mundos: O Chamado, apaixonada por histórias desde a infância. Conhece a história dela na página [Sobre a Autora](/sobre). 🖋️",
  },
  {
    id: "saga_livro2",
    palavrasChave: ["livro 2", "livro ii", "proximo livro", "próximo livro", "continuacao", "continuação", "sequencia", "sequência", "saga"],
    resposta:
      "Entre Mundos: O Chamado é o Livro I de uma saga maior! Ainda não há data para o Livro II, mas acompanha o [Blog](/blog) e as redes da A. Phoenix para seres a primeira a saber quando sair. 🔮",
  },
  {
    id: "audiobook",
    palavrasChave: ["audiobook", "audio", "áudio", "narracao", "narração", "ouvir o livro", "narrado"],
    resposta:
      "Sim! Há uma prévia narrada da sinopse na secção 'Prévia em Áudio' da página inicial — dá para ouvir antes mesmo de comprar. 🎧",
  },
  {
    id: "spotify",
    palavrasChave: ["spotify", "musica", "música", "trilha sonora", "playlist"],
    resposta: "A. Phoenix também está no Spotify, com música que combina com a atmosfera da saga. Procura a secção 'No Spotify' na página inicial! 🎵",
  },
  {
    id: "quiz",
    palavrasChave: ["quiz", "teste de personalidade", "que personagem sou", "teste"],
    resposta:
      "Adoro esse! Faz o quiz \"Que Fragmento de Entre Mundos Vive em Ti?\" e descobre com qual personagem te identificas. Está na página inicial, na secção do Quiz. ✦",
  },
  {
    id: "jogo",
    palavrasChave: ["jogo", "jogar", "quem e quem", "quem é quem"],
    resposta:
      "Testa os teus conhecimentos no jogo [Quem é Quem em Entre Mundos](/jogo-personagens) — 8 rondas para veres quantos personagens reconheces! 🎮",
  },
  {
    id: "blog",
    palavrasChave: ["blog", "artigo", "artigos", "bastidores", "post"],
    resposta: "O blog tem bastidores da escrita, reflexões da autora e curiosidades sobre o universo da saga. [Ver o Blog](/blog) 📝",
  },
  {
    id: "entrega_envio",
    palavrasChave: ["entrega", "envio", "prazo", "demora", "chega", "frete"],
    resposta:
      "As entregas são feitas diretamente pela Amazon, seguindo os prazos e políticas da própria Amazon para a tua região. Pagamento e envio são 100% geridos por eles. 📦",
  },
  {
    id: "seguranca",
    palavrasChave: ["seguro", "confiavel", "confiável", "é seguro", "golpe", "scam"],
    resposta:
      "Sim, super seguro! Todas as compras são feitas diretamente na Amazon, através dos links oficiais no site — nunca pedimos pagamento por fora. 🔒",
  },
  {
    id: "humano_contato",
    palavrasChave: ["falar com alguem", "falar com alguém", "atendente", "humano", "pessoa real", "suporte", "duvida", "dúvida", "problema", "reclamacao", "reclamação"],
    resposta:
      "Claro! Se preferires falar diretamente com a equipa, escreve no [WhatsApp](" + WHATSAPP_LINK + ") 💬 — respondem rapidinho!",
  },
  {
    id: "agradecimento",
    palavrasChave: ["obrigado", "obrigada", "valeu", "thanks", "obg"],
    resposta: "De nada! 🌹 Se precisares de mais alguma coisa, estou por aqui.",
  },
  {
    id: "despedida",
    palavrasChave: ["tchau", "ate logo", "até logo", "bye", "adeus"],
    resposta: "Até já! Obrigada pela visita — espero que a saga de Entre Mundos te conquiste. ✨",
  },
];

export const respostaPadrao =
  "Hmm, não tenho a certeza se entendi 🤔. Podes tentar perguntar de outra forma, escolher uma das opções abaixo, ou falar diretamente com a equipa no [WhatsApp](" +
  WHATSAPP_LINK +
  ").";

export const sugestoesIniciais = [
  "Preço e como comprar",
  "Tem alguma promoção?",
  "Sinopse do livro",
  "Personagens",
  "Falar com uma pessoa",
];
