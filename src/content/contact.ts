export type Channel = {
  id: string;
  label: string;
  value: string;
  href: string | null;
  status: "live" | "soon";
};

export const channels: Channel[] = [
  {
    id: "instagram",
    label: "Instagram",
    value: "@jaquemedeirospt",
    href: "https://www.instagram.com/jaquemedeirospt/",
    status: "live",
  },
  {
    id: "email",
    label: "E-mail",
    value: "jacquecamposfotografia@gmail.com",
    href: "mailto:jacquecamposfotografia@gmail.com",
    status: "live",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+55 19 98257-1019",
    href: "https://zapdajaque.netlify.app/",
    status: "live",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: "Em breve",
    href: null,
    status: "soon",
  },
  {
    id: "youtube",
    label: "YouTube",
    value: "Em breve",
    href: null,
    status: "soon",
  },
];

export const contactNote =
  "Fale com a equipe de Jaque Medeiros pelo Instagram, e-mail ou WhatsApp. Os demais canais serão publicados assim que forem confirmados.";

export const contribute = {
  title: "Siga junto nessa caminhada",
  text: "A campanha eleitoral terminou, mas a construção política continua. Acompanhe as redes de Jaque Medeiros e participe das próximas mobilizações.",
  buttonLabel: "Acompanhar no Instagram",
  href: "https://www.instagram.com/jaquemedeirospt/" as string | null,
};
