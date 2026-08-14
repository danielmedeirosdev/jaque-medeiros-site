import { GalleryLightbox } from "@/components/GalleryLightbox";
import { pageMeta } from "@/components/InnerPage";
import { galleryPhotos } from "@/lib/photos";

export const metadata = pageMeta("Galeria");

export default function GaleriaPage() {
  return (
    <article className="section">
      <p className="kicker">Arquivo fotográfico</p>
      <h1 className="chapter-title" style={{ marginTop: "0.7rem" }}>
        Galeria
      </h1>
      <GalleryLightbox photos={galleryPhotos} />
    </article>
  );
}
