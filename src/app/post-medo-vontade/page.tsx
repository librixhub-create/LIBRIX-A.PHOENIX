import type { Metadata } from "next";
import PostArticle from "@/components/PostArticle";

const descricao =
  "Sobre os dias em que a página em branco parece um abismo — e sobre escolher escrever mesmo assim. Reflexões de A. Phoenix sobre medo e criação.";

export const metadata: Metadata = {
  title: "Escrever quando o medo é maior do que a vontade — Blog",
  description: descricao,
  openGraph: { title: "Escrever quando o medo é maior do que a vontade — Blog de A. Phoenix", description: descricao, type: "article" },
  twitter: { card: "summary_large_image", title: "Escrever quando o medo é maior do que a vontade — Blog de A. Phoenix", description: descricao },
};

export default function PostMedoVontadePage() {
  return (
    <PostArticle
      categoria="Reflexões"
      titulo="Escrever quando o medo é maior do que a vontade"
      meta="Por A. Phoenix · 19 Mar 2026 · 5 min de leitura"
    >
      <p>Quando as pessoas imaginam um escritor a trabalhar, costumam pensar em inspiração — numa ideia que chega de repente e exige ser escrita. E sim, esses momentos existem. Mas há muitos outros dias. Dias em que abro o computador, olho para o cursor a piscar numa página em branco, e sinto o medo a ocupar todo o espaço que devia ser da vontade.</p>

      <p>Durante a escrita de <em>Entre Mundos</em>, houve semanas inteiras assim. Dias em que me perguntava se a história interessaria a alguém, se Gabrielle era suficientemente real, se eu tinha o direito de escrever sobre mundos, magia e segredos quando havia tantos livros maravilhosos já escritos sobre exactamente isso. O medo tem uma voz muito convincente — e ela adora aparecer precisamente quando mais precisamos de confiança.</p>

      <p>Com o tempo, percebi algo importante: esse medo não era sinal de que eu devia parar. Era sinal de que me importava. Não temos medo de coisas que não nos importam. E quanto mais a história significava para mim, mais espaço o medo parecia reivindicar.</p>

      <p>O que mudou tudo não foi deixar de sentir medo — isso, sinceramente, nunca aconteceu. O que mudou foi separar duas coisas que, durante muito tempo, vivi como uma só: escrever e julgar o que escrevo. Comecei a permitir-me escrever frases más, parágrafos confusos, capítulos que sabia que iria reescrever depois. O importante era aparecer, todos os dias, mesmo que fosse apenas para uma frase.</p>

      <blockquote>&quot;O medo não pede permissão para aparecer. Mas também não tem o poder de decidir o que escrevemos a seguir.&quot;</blockquote>

      <p>Terminar este livro não fez o medo desaparecer. Continuo a sentir essa mesma voz sempre que começo algo novo. Mas aprendi a reconhecê-la, a deixá-la falar, e a continuar a escrever mesmo assim — porque a vontade, ainda que mais pequena nalguns dias, continua ali, à espera da sua vez.</p>

      <p>Se há algo dentro de ti que precisa de ser escrito, pintado, dito — e o medo está a ocupar todo o espaço hoje — espero que estas palavras te lembrem que ele não tem de ter a última palavra. Só a primeira.</p>
    </PostArticle>
  );
}
