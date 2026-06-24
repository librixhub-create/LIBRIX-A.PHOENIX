import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://librix-a-phoenix.vercel.app";
  const rotas = [
    "",
    "sobre",
    "blog",
    "contato",
    "post-template",
    "post-gabrielle-coragem",
    "post-londres-palco",
    "post-capitulo-reescrito",
    "post-simbologia-rosa",
    "post-medo-vontade",
  ];

  return rotas.map((rota) => ({
    url: `${base}/${rota}`,
    lastModified: new Date(),
  }));
}
