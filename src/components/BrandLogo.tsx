import { person } from "@/content/person";

type BrandLogoProps = {
  variant?: "ink" | "white" | "official";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "ink",
  className = "brand-logo",
}: BrandLogoProps) {
  return (
    <span
      className={`${className} brand-wordmark${variant === "white" ? " is-white" : ""}`}
      aria-label={`${person.publicName} — ${person.role}`}
    >
      <span className="brand-wordmark-primary">JAQUE</span>
      <span className="brand-wordmark-secondary">MEDEIROS</span>
    </span>
  );
}
