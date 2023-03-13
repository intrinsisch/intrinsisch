import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Chat } from "@components/chat/Chat";

export const Main = (): JSXElement => {
  return (
    <main>
      <Chat />
      <div class="center center-w-container p-3">
        <Chat />
        <div class="sidebar-r gap-5" style="--sidebar-width: 400px;">
          <BlogList />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};
