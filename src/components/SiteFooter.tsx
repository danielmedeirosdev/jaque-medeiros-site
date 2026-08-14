import Link from "next/link";
import { person } from "@/content/person";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        {person.publicName}
        <br />
        {person.fullName}
      </p>
      <p>
        {person.city}, {person.state}
      </p>
      <p className="footer-links">
        <Link href="/contato">Contato</Link>
      </p>
    </footer>
  );
}
