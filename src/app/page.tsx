import { HeroEditorial } from "@/components/HeroEditorial";
import { IntroBlock } from "@/components/IntroBlock";
import { heroPhoto, introPhoto, photos } from "@/lib/photos";

export default function HomePage() {
  return (
    <>
      <HeroEditorial imageSrc={heroPhoto} imageAlt={photos.retratoGesto.alt} />
      <IntroBlock imageSrc={introPhoto} imageAlt={photos.auditorio.alt} />
    </>
  );
}
