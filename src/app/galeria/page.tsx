import { GalleryLightbox } from "@/components/GalleryLightbox";
import { pageMeta } from "@/components/InnerPage";
import { person } from "@/content/person";
import { galleryPhotos } from "@/lib/photos";

export const metadata = pageMeta(
  "Galeria",
  `Fotos da trajetória política e registros públicos de ${person.publicName}.`,
  "/galeria",
);

export default function GaleriaPage() {
  return (
    <article className="section">
      <p className="kicker">Imagens</p>
      <h1 className="chapter-title">Galeria</h1>
      <p className="lead" style={{ marginTop: "1.2rem", maxWidth: "36rem" }}>
        Retratos e registros da presença pública de {person.publicName}.
      </p>
      <GalleryLightbox photos={galleryPhotos} />
    </article>
  );
}
