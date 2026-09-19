import type { JSX } from "react";

type SocialIconId = "instagram" | "whatsapp" | "email" | "facebook" | "youtube";

type SocialIconProps = {
  id: SocialIconId;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2.5c-5.2 0-9.42 4.17-9.42 9.31 0 1.64.44 3.24 1.27 4.65L2.5 21.5l5.2-1.35a9.5 9.5 0 0 0 4.34 1.05h.01c5.2 0 9.42-4.17 9.42-9.31 0-2.49-1-4.83-2.81-6.59A9.5 9.5 0 0 0 12.04 2.5Zm0 17.05h-.01a7.88 7.88 0 0 1-4.02-1.1l-.29-.17-3.08.8.82-2.97-.19-.3a7.7 7.7 0 0 1-1.2-4.16c0-4.27 3.52-7.74 7.86-7.74 2.1 0 4.07.81 5.55 2.27a7.7 7.7 0 0 1 2.3 5.5c0 4.27-3.52 7.74-7.86 7.74Zm4.31-5.8c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.61.77-.75.93-.14.16-.28.18-.51.06-.24-.12-1-.36-1.9-1.16-.7-.62-1.18-1.38-1.31-1.61-.14-.24-.01-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.26-.72-1.73-.19-.46-.38-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.81-.84 1.98s.86 2.3.98 2.46c.12.16 1.69 2.56 4.1 3.59.57.24 1.02.39 1.37.5.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.2"
        y="5.2"
        width="17.6"
        height="13.6"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.2 7.1 12 12.4l7.8-5.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 21.5v-7.3h2.45l.37-2.85H14.2V9.53c0-.82.23-1.39 1.41-1.39h1.51V5.59c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.1H8.7v2.85h2.55v7.3h2.95Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.91C18.1 5.3 12 5.3 12 5.3s-6.1 0-7.7.39A2.7 2.7 0 0 0 2.4 7.6 28.4 28.4 0 0 0 2 12a28.4 28.4 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.91c1.6.39 7.7.39 7.7.39s6.1 0 7.7-.39a2.7 2.7 0 0 0 1.9-1.91A28.4 28.4 0 0 0 22 12a28.4 28.4 0 0 0-.4-4.4ZM10.2 15.2V8.8L15.5 12l-5.3 3.2Z"
      />
    </svg>
  );
}

const icons: Record<SocialIconId, () => JSX.Element> = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  email: EmailIcon,
  facebook: FacebookIcon,
  youtube: YouTubeIcon,
};

export function SocialIcon({ id }: SocialIconProps) {
  const Icon = icons[id];
  return <Icon />;
}

export function isSocialIconId(value: string): value is SocialIconId {
  return value in icons;
}
