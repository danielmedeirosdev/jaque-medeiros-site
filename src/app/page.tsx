import { AboutPreview } from "@/components/AboutPreview";
import { HeroCampaign } from "@/components/HeroCampaign";
import { HomeCta } from "@/components/HomeCta";
import { PrioritiesSection } from "@/components/PrioritiesSection";
import { VoteThanksSection } from "@/components/VoteThanksSection";
import { heroPhoto, introPhoto, photos } from "@/lib/photos";

export default function HomePage() {
  return (
    <>
      <HeroCampaign imageSrc={heroPhoto} imageAlt={photos.retratoGesto.alt} />
      <VoteThanksSection />
      <AboutPreview imageSrc={introPhoto} imageAlt={photos.retratoBracos.alt} />
      <PrioritiesSection />
      <HomeCta />
    </>
  );
}
