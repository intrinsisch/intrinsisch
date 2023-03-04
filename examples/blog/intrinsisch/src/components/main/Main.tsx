import type { JSXElement} from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";

export const Main = (): JSXElement => {
  return (
    <main class="container lg spa-py-5">
      <div class="sidebar-wrapper spa-6">
        <BlogList />
        <div class="sidebar" style="--sbr--basis: 25rem;">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};
