export const projects = [
  { path: "blog/bootstrap", label: "Blog: Bootstrap", short: "blog-bs" },
  { path: "blog/intrinsisch", label: "Blog: Intrinsisch", short: "blog-i" },
  { path: "social-network/bootstrap", label: "Social Network: Bootstrap", short: "sn-bs" },
];

export type Project = (typeof projects)[number];
