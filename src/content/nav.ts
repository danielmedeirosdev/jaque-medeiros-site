export const navItems = [
  { href: "/", label: "Início" },
  { href: "/trajetoria", label: "Quem é" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/atuacao", label: "Propostas" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
] as const;

export const extraFooterItems = [{ href: "/galeria", label: "Galeria" }] as const;

export const contributeCta = {
  href: "/contribua",
  label: "Apoie",
  enabled: true,
} as const;
