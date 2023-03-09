import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Stat } from "@components/stat/Stat";

export const Main = (): JSXElement => {
  return (
    <main class="bg-white py-5">
      <Stat xs="vertical" sm="horizontal" />
      <div class="container">
        <Stat xs="vertical" sm="horizontal" />
        <div class="row gx-5">
          <div class="col-md-8">
            <Stat xs="vertical" sm="horizontal" />
            <BlogList />
          </div>
          <div class="col-md-4">
            <Stat xs="vertical" />
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
