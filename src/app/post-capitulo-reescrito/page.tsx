import type { Metadata } from "next";
import PostArticle from "@/components/PostArticle";

const descricao =
  "A história certa só aparece, por vezes, depois de termos coragem de apagar a errada: os bastidores do dia em que A. Phoenix reescreveu o capítulo mais importante de Entre Mundos.";

export const metadata: Metadata = {
  title: "Entre rascunhos e revelações — Blog",
  description: descricao,
  openGraph: { title: "Entre rascunhos e revelações — Blog de A. Phoenix", description: descricao, type: "article" },
  twitter: { card: "summary_large_image", title: "Entre rascunhos e revelações — Blog de A. Phoenix", description: descricao },
};

export default function PostCapituloReescritoPage() {
  return (
    <PostArticle
      categoria="Bastidores"
      titulo="Entre rascunhos e revelações — reescrever um capítulo inteiro"
      meta="Por A. Phoenix · 22 Fev 2026 · 7 min de leitura"
    >
      <p>Todos os livros têm um capítulo que quase os destrói. No caso de <em>Entre Mundos</em>, foi o capítulo da grande revelação — aquele em que tudo o que Gabrielle pensava saber sobre si própria começa a desfazer-se. E durante meses, esse capítulo esteve simplesmente... errado.</p>

      <p>Na primeira versão, tudo acontecia demasiado rápido. Em poucas páginas, Gabrielle descobria a verdade, reagia, e a história seguia em frente — como se eu tivesse pressa de chegar ao momento seguinte. Tecnicamente, estava tudo lá: a informação certa, na ordem certa. Mas faltava-lhe peso. Faltava-lhe o silêncio antes da queda.</p>

      <p>Durante semanas, convenci-me de que o problema era pequeno — uma frase aqui, um diálogo ali. Reescrevi parágrafos, ajustei transições, troquei palavras. Nada resolvia. A sensação de que algo estava errado continuava ali, como uma nota dissonante que se ouve mesmo sem saber identificar qual é.</p>

      <p>Foi só numa releitura, semanas depois, que finalmente percebi: o problema não estava nas frases. Estava na estrutura inteira. Eu tinha escrito a revelação como um acontecimento — quando, na verdade, precisava de ser escrita como uma <em>erosão</em>. Gabrielle não podia simplesmente &quot;descobrir&quot; a verdade numa cena. Precisava de a sentir a aproximar-se, capítulo a capítulo, num desconforto crescente que só faria sentido em retrospetiva.</p>

      <p>Apaguei o capítulo inteiro. Mais de seis mil palavras, semanas de trabalho, simplesmente... fora. Confesso que hesitei durante dias antes de o fazer — havia ali frases de que gostava, cenas que me custava perder. Mas continuar a remendar algo cuja estrutura estava errada seria apenas adiar o problema.</p>

      <blockquote>&quot;Por vezes, escrever bem é menos sobre acrescentar — e mais sobre ter coragem de apagar.&quot;</blockquote>

      <p>A nova versão nasceu mais lenta, mais silenciosa. Pequenos sinais espalhados pelos capítulos anteriores, momentos que pareciam insignificantes na primeira leitura mas que, lidos de novo, já apontavam para ali. Quando Gabrielle finalmente chega à verdade, o leitor já a sentiu chegar — e é exactamente essa sensação de inevitabilidade que eu não conseguia alcançar na primeira versão.</p>

      <p>Se há algo que este capítulo me ensinou é que reescrever não é falhar. É continuar a ouvir a história até ela nos dizer, finalmente, como quer ser contada.</p>
    </PostArticle>
  );
}
