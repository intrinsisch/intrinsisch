export const projects = [
  { path: "base/bootstrap", label: "Bootstrap: Basis", short: "base-bs" },
  { path: "base/feo", label: "Feo: Basis", short: "base-feo" },
  { path: "rating/bootstrap", label: "Bootstrap: Rating Komponente", short: "rating-bs" },
  { path: "rating/feo", label: "Feo: Rating Komponente", short: "rating-feo" },
  { path: "chat/bootstrap", label: "Bootstrap: Chat Komponente", short: "chat-bs" },
  { path: "chat/feo", label: "Feo: Chat Komponente", short: "chat-feo" },
  { path: "stat/bootstrap", label: "Bootstrap: Stat Komponente", short: "stat-bs" },
  { path: "stat/feo", label: "Feo: Stat Komponente", short: "stat-feo" },
];

export type Project = (typeof projects)[number];
