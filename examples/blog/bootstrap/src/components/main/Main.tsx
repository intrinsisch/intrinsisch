import type { JSX } from "solid-js/jsx-runtime";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";

export const Main = (): JSX.Element => {
  return (
    <main class="bg-white py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-sm-8">
            <BlogList />
          </div>
          <div class="col-sm-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
