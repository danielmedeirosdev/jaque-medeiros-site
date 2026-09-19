import { person } from "@/content/person";

type BallotMarkProps = {
  tone?: "light" | "dark" | "hero";
  compact?: boolean;
};

export function BallotMark({ tone = "dark", compact = false }: BallotMarkProps) {
  return (
    <p className={`ballot-mark ballot-${tone}${compact ? " is-compact" : ""}`}>
      <span className="ballot-label">Vote</span>
      <span className="ballot-number">{person.ballotNumber}</span>
    </p>
  );
}
