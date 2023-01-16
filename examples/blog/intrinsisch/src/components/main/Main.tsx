import type { JSX } from "solid-js/jsx-runtime";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";

export const Main = (): JSX.Element => {
  return (
    <main class="container lg spa-py-5">
      <div class="sidebar-wrapper spa-6">
        <BlogList />
        <div class="sidebar" style="--sidebar-basis: 5rem;">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};
