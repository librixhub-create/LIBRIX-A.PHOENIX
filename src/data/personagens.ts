export type Personagem = {
  slug: string;
  nome: string;
  papel: string;
  mundo: string;
  descricao: string;
  foto: string;
  fotoAlt?: string;
  destaque?: boolean;
};

export const personagens: Personagem[] = [
  {
    slug: "gabrielle",
    nome: "Gabrielle Dubois",
    papel: "A Alma que Lembra",
    mundo: "Londres · Paris",
    descricao:
      "A jovem protagonista da saga. Marcada por memórias que não são suas e por um poder que ainda não compreende, Gabrielle é o centro de uma disputa ancestral entre a luz e a sombra.",
    foto: "/assets/personagens/gabrielle-dubois.jpeg",
    destaque: true,
  },
  {
    slug: "ethan",
    nome: "Ethan Smith",
    papel: "O Que Carrega o Silêncio",
    mundo: "Londres · Paris",
    descricao:
      "Filho de uma família de elite londrina, Ethan guarda segredos que protegem mais do que a si próprio. O seu silêncio é uma escolha — e uma armadura.",
    foto: "/assets/personagens/ethan-smith.jpeg",
    destaque: true,
  },
  {
    slug: "arael",
    nome: "Arael",
    papel: "O Guardador do Véu",
    mundo: "Além da Fenda",
    descricao:
      "Figura ancestral aprisionada além da Fenda. Arael é o guardião de segredos que remontam a séculos. O seu regresso muda tudo o que Gabrielle julgava saber.",
    foto: "/assets/personagens/arael.jpeg",
    destaque: true,
  },
  {
    slug: "angeli",
    nome: "Angeli Dubois",
    papel: "A Mãe que Sabe Mais do que Diz",
    mundo: "Londres · Paris",
    descricao:
      "A mãe de Gabrielle nunca foi apenas uma mãe. Por trás do amor e do silêncio, Angeli carrega um peso que há muito escolheu não partilhar com ninguém.",
    foto: "/assets/personagens/angeli-dubois.jpeg",
  },
  {
    slug: "asha",
    nome: "Asha",
    papel: "A que Vigia o Silêncio",
    mundo: "Londres · Vilarejo do Véu",
    descricao:
      "Presente em Londres e no Vilarejo do Véu, Asha observa onde outros agem. O seu papel na história é mais profundo do que aparenta à superfície.",
    foto: "/assets/personagens/asha.jpeg",
  },
  {
    slug: "amirah",
    nome: "Amirah",
    papel: "A Sacerdotisa que Não Descansou",
    mundo: "Pérsia Antiga",
    descricao:
      "Da Pérsia Antiga, além da Fenda. Amirah lançou o selo que alterou o destino de todos. A sua presença na história transcende o tempo e os mundos.",
    foto: "/assets/personagens/amirah.jpeg",
  },
  {
    slug: "loui",
    nome: "Loui",
    papel: "A Melodia que Ficou",
    mundo: "Paris · Flashback",
    descricao:
      "Paris. Música. Memória. Loui é a figura que ficou no passado de Gabrielle — e que não a deixou partir. Algumas presenças marcam para sempre.",
    foto: "/assets/personagens/loui.jpeg",
  },
  {
    slug: "bernard-dubois",
    nome: "Bernard Dubois",
    papel: "O Pai de Gabrielle",
    mundo: "Paris",
    descricao:
      "Um homem que aprendeu, cedo demais, que existe uma gramática de silêncios — coisas importantes que simplesmente não se dizem. Carrega um segredo de Paris que o define mais do que gostaria de admitir.",
    foto: "/assets/personagens/bernard-dubois.jpeg",
  },
  {
    slug: "susan-smith",
    nome: "Susan Smith",
    papel: "A Mais Consciente",
    mundo: "Londres",
    descricao:
      "A mais consciente — e a mais perigosa — da Sociedade. Elegante, calculada, sempre um passo à frente, usa Bernard, o próprio filho Ethan e a Sociedade inteira como peças de um tabuleiro, sem nunca revelar o jogo completo.",
    foto: "/assets/personagens/susan-smith.jpeg",
  },
  {
    slug: "edward-smith",
    nome: "Edward Smith",
    papel: "Voz por Trás da Sociedade",
    mundo: "Londres",
    descricao:
      "A mente que costura os caminhos da Sociedade nos bastidores. Inteligente, frio e observador, acredita que controlo é proteção — e que, para ele, nada acontece por sorte.",
    foto: "/assets/personagens/edward-smith.jpeg",
  },
  {
    slug: "mr-calvin",
    nome: "Mr. Calvin",
    papel: "Arquiteto de Silêncios",
    mundo: "Sociedade Secreta",
    descricao:
      "Arquivista discreto da Sociedade. Regista cada palavra dita nas reuniões secretas — mas quando finalmente tenta revelar algo crucial sobre um pergaminho perdido, algo o impede de terminar a frase.",
    foto: "/assets/personagens/mr-calvin.jpeg",
  },
  {
    slug: "farid-al-hassan",
    nome: "Farid Al-Hassan",
    papel: "Voz entre Sombras",
    mundo: "Sociedade Secreta",
    descricao:
      "O informante da Sociedade em terrenos vetados — sabe sobre o Véu e sobre os inimigos, palavras que nunca aparecem nos registos. Joga um jogo onde poucos enxergam, e o que mais odeia é precisar mostrar as cartas.",
    foto: "/assets/personagens/farid-al-hassan.jpeg",
    fotoAlt: "/assets/personagens/farid-al-hassan-sombras.jpeg",
  },
  {
    slug: "esme",
    nome: "Esmé",
    papel: "Figura de Cuidado e Proteção",
    mundo: "Vilarejo do Véu",
    descricao:
      "Figura de cuidado e proteção dentro do vilarejo. É quem segura Surya quando o poder a esgota, e quem acompanha Gabrielle nos primeiros passos de um treinamento que a jovem ainda não entende por completo.",
    foto: "/assets/personagens/esme.jpeg",
  },
  {
    slug: "surya",
    nome: "Surya",
    papel: "Visões entre Brumas",
    mundo: "Vilarejo do Véu",
    descricao:
      "Feita das brumas que cercam o que os olhos humanos não alcançam. Vive entre símbolos, sonhos e presságios — a sua intuição é, muitas vezes, o único farol na escuridão que se aproxima.",
    foto: "/assets/personagens/surya.jpeg",
  },
  {
    slug: "kabir",
    nome: "Kabir",
    papel: "Guardião de Surya",
    mundo: "Londres · Vilarejo do Véu",
    descricao:
      "Guardião nascido de Surya, dedicado como servo leal na casa dos Smith. Fala pouco, mas cada palavra carrega o peso de anos de vigilância silenciosa sobre os símbolos e ensinamentos do Véu.",
    foto: "/assets/personagens/kabir.jpeg",
  },
  {
    slug: "arun",
    nome: "Arun",
    papel: "Guardião Solar",
    mundo: "Reino Solar",
    descricao:
      "O primogénito. O escolhido. O ausente — por quase todo o livro, está longe, a preparar-se para algo que só ele sabe o tamanho. Guardião Solar, com uma luz dourada que parece nascer da própria pele.",
    foto: "/assets/personagens/arun.jpeg",
  },
  {
    slug: "yasmina-dravene",
    nome: "Yasmina Dravene",
    papel: "A Voz",
    mundo: "Vilarejo do Véu",
    descricao:
      "Líder dos Guardiões e coração pulsante do vilarejo cigano — não em sentido figurado, mas literal: é o ponto ao redor do qual tudo se organiza. Sabe que o dia da sua partida chegará, e que a Voz muda para sempre quem a carrega depois dela.",
    foto: "/assets/personagens/yasmina-dravene.jpeg",
  },
];
