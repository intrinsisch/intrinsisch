export const projects = [
  { path: "base/bootstrap", label: "Responsive: Basisprojekt", short: "base-bs" },
  { path: "base/feo", label: "Intrinsic: Basisprojekt", short: "base-feo" },
  { path: "rating/bootstrap", label: "Responsive: Rating Komponente", short: "rating-bs" },
  { path: "rating/feo", label: "Intrinsic: Rating Komponente", short: "rating-feo" },
  { path: "chat/bootstrap", label: "Responsive: Chat Komponente", short: "chat-bs" },
  { path: "chat/feo", label: "Intrinsic: Chat Komponente", short: "chat-feo" },
  { path: "stat/bootstrap", label: "Responsive: Stat Komponente", short: "stat-bs" },
  { path: "stat/feo", label: "Intrinsic: Stat Komponente", short: "stat-feo" },
  { path: "all/bootstrap", label: "Responsive: Alle Komponenten", short: "all-bs" },
  { path: "all/feo", label: "Intrinsic: Alle Komponenten", short: "all-feo" },
];

export type Project = (typeof projects)[number];
