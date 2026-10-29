import Image from "next/image";
import { brand } from "@/content/brand";
import { person } from "@/content/person";

type BrandLogoProps = {
  variant?: "ink" | "white" | "official";
  className?: string;
  priority?: boolean;
};

const sources = {
  ink: brand.logoInk,
  white: brand.logoWhite,
  official: brand.logoOfficial,
} as const;

export function BrandLogo({
  variant = "ink",
  className = "brand-logo",
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={className}>
      <Image
        src={sources[variant]}
        alt={`${person.publicName} — ${person.role}`}
        width={320}
        height={196}
        priority={priority}
        className="brand-logo-img"
      />
    </span>
  );
}
