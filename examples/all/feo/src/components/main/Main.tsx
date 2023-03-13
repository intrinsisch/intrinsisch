import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Stat } from "@components/stat/Stat";
import { Rating } from "@components/rating/Rating";
import { Chat } from "@components/chat/Chat";

export const Main = (): JSXElement => {
  return (
    <main>
      <Rating variant="accent" />
      <Chat />
      <Stat />
      <div class="center center-w-container p-3">
        <Rating variant="accent" />
        <Chat />
        <Stat />
        <div class="sidebar-r gap-5" style="--sidebar-width: 400px;">
          <BlogList />
          <Sidebar />
        </div>
      </div>
    </main>
  );
};
