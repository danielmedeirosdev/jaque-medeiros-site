import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { contributeCta, extraFooterItems, navItems } from "@/content/nav";
import { person } from "@/content/person";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <BrandLogo variant="white" className="brand-logo brand-logo-footer" />
          <p className="footer-meta">
            {person.role}
            <br />
            Vote {person.ballotNumber}
            <br />
            {person.party.name} · {person.city}, {person.state}
          </p>
          <SocialLinks tone="light" />
        </div>
        <nav className="footer-nav" aria-label="Rodapé">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {extraFooterItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {contributeCta.enabled ? (
            <Link href={contributeCta.href}>{contributeCta.label}</Link>
          ) : null}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>
          {person.publicName}
          <span className="footer-sep">·</span>
          {person.ballotNumber}
          <span className="footer-sep">·</span>
          Site institucional
        </p>
        <p className="footer-domain">{site.domain.replace("https://", "")}</p>
      </div>
    </footer>
  );
}
