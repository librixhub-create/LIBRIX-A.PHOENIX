import type { Metadata } from "next";
import PostArticle from "@/components/PostArticle";

const descricao =
  "Porque a rosa se tornou o símbolo de Entre Mundos: O Chamado — sobre beleza, espinhos e tudo o que escolhemos proteger, por A. Phoenix.";

export const metadata: Metadata = {
  title: "A simbologia da rosa em Entre Mundos — Blog",
  description: descricao,
  openGraph: { title: "A simbologia da rosa em Entre Mundos — Blog de A. Phoenix", description: descricao, type: "article" },
  twitter: { card: "summary_large_image", title: "A simbologia da rosa em Entre Mundos — Blog de A. Phoenix", description: descricao },
};

export default function PostSimbologiaRosaPage() {
  return (
    <PostArticle
      categoria="Universo"
      titulo="A simbologia da rosa em Entre Mundos"
      meta="Por A. Phoenix · 06 Mar 2026 · 4 min de leitura"
    >
      <p>Toda a saga precisa de um símbolo que guarde a sua alma — algo pequeno, que se possa desenhar com um único traço, mas que carregue dentro de si todo o peso da história. Para <em>Entre Mundos</em>, esse símbolo é a rosa.</p>

      <p>Escolhi-a por uma razão simples: a rosa é, talvez, a flor mais contraditória que existe. É delicada e é perigosa. É oferecida como prova de amor e cresce protegida por espinhos capazes de ferir. Essa dualidade — beleza e ameaça, ternura e defesa — é exactamente o coração de <em>Entre Mundos</em>: um mundo onde a luz e a sombra não são opostos, mas duas metades da mesma coisa.</p>

      <p>Ao longo do livro, a rosa aparece mais do que uma vez — nem sempre como flor, por vezes apenas como um traço, uma marca, um pormenor que parece insignificante na primeira leitura. Não vou revelar onde, porque parte da magia está em encontrá-la sozinho. Mas posso dizer isto: cada vez que a rosa surge, é porque algo está a ser protegido. E nem sempre da forma que esperamos.</p>

      <blockquote>&quot;Uma rosa não esconde os espinhos para parecer mais bela. Mostra-os — porque sabe o que está a proteger.&quot;</blockquote>

      <p>Para mim, a rosa tornou-se também um símbolo pessoal — de força, de recomeço, da ideia de que aquilo que nos protege nem sempre é suave, e que está tudo bem que assim seja. Foi por isso que a deixei entrar não só nas páginas do livro, mas em toda a identidade deste universo: no ícone que vês neste site, na capa, nas pequenas marcas que acompanham cada secção.</p>

      <p>Da próxima vez que vires uma rosa — neste site, na capa do livro, ou simplesmente numa rua qualquer — talvez penses, por um momento, em tudo o que ela representa em <em>Entre Mundos</em>. E talvez, como Gabrielle, comeces a olhar com mais atenção para aquilo que parecia apenas decorativo.</p>
    </PostArticle>
  );
}
