import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";

export const Main = (): JSXElement => {
  return (
    <main class="center center-w-container p-3">
      <div class="sidebar-r gap-5" style="--sidebar-width: 400px;">
        <BlogList />
        <Sidebar />
      </div>
    </main>
  );
};
