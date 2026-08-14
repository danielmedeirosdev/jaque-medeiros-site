import Image from "next/image";
import { photos } from "@/lib/photos";

export function PhotoPlate() {
  return (
    <section className="photo-plate" aria-label="Registro fotográfico">
      <div className="photo-plate-main">
        <Image
          src={photos.falaPublica.src}
          alt={photos.falaPublica.alt}
          fill
          sizes="(min-width: 900px) 62vw, 100vw"
        />
      </div>
      <p className="photo-plate-caption">{photos.falaPublica.caption}</p>
    </section>
  );
}
