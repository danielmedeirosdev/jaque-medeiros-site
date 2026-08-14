export function isPublicCopy(value: string | null | undefined): value is string {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  return !trimmed.startsWith("[") || !trimmed.endsWith("]");
}
