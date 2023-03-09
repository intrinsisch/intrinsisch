import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Chat } from "@components/chat/Chat";

export const Main = (): JSXElement => {
  return (
    <main class="bg-white py-5">
      <Chat />
      <div class="container">
        <Chat />
        <div class="row gx-5">
          <div class="col-md-8">
            <Chat />
            <BlogList />
          </div>
          <div class="col-md-4">
            <Chat />
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
