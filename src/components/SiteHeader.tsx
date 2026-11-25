"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { contributeCta, navItems } from "@/content/nav";
import { person } from "@/content/person";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${person.publicName} — início`}
        >
          <BrandLogo variant="ink" priority className="brand-logo brand-logo-header" />
        </Link>

        <nav className="nav-desktop" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <SocialLinks tone="dark" className="nav-social" />
          {contributeCta.enabled ? (
            <Link href={contributeCta.href} className="btn btn-nav">
              {contributeCta.label}
            </Link>
          ) : null}
        </nav>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="menu-principal"
        className={open ? "nav-drawer is-open" : "nav-drawer"}
        aria-label="Principal"
        hidden={!open}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <SocialLinks tone="dark" className="drawer-social" />
        {contributeCta.enabled ? (
          <Link href={contributeCta.href} className="btn btn-primary drawer-cta">
            {contributeCta.label}
          </Link>
        ) : null}
      </nav>
    </header>
  );
}
