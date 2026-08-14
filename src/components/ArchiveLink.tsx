import Link from "next/link";

export function ArchiveLink({
  href,
  kicker,
  title,
}: {
  href: string;
  kicker: string;
  title: string;
}) {
  return (
    <Link href={href} className="archive-link">
      <span className="kicker">{kicker}</span>
      <span className="archive-link-title">{title}</span>
    </Link>
  );
}
