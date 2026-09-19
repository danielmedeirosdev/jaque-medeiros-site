import { channels } from "@/content/contact";
import { isSocialIconId, SocialIcon } from "@/components/SocialIcon";

type SocialLinksProps = {
  className?: string;
  tone?: "light" | "dark";
};

const liveChannels = channels.filter(
  (channel) => channel.status === "live" && channel.href,
);

export function SocialLinks({ className, tone = "dark" }: SocialLinksProps) {
  return (
    <ul className={`social-links social-${tone}${className ? ` ${className}` : ""}`}>
      {liveChannels.map((channel) => (
        <li key={channel.id}>
          <a
            href={channel.href!}
            aria-label={channel.label}
            title={channel.value}
            {...(channel.href!.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {isSocialIconId(channel.id) ? <SocialIcon id={channel.id} /> : null}
            <span className="sr-only">{channel.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
