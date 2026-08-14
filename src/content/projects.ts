export type Project = {
  id: string;
  name: string;
  period: string;
  description: string;
  role: string;
  href: string | null;
};

export const projects: Project[] = [];
