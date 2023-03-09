import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Stat } from "@components/stat/Stat";

export const Main = (): JSXElement => {
  return (
    <main>
      <Stat variant="accent" />
      <div class="center center-w-container p-3">
        <Stat variant="accent" />
        <div class="sidebar-r gap-5" style="--sidebar-width: 400px;">
          <BlogList />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};
