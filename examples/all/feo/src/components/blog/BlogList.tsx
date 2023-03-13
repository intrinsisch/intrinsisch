import { Chat } from "@components/chat/Chat";
import { Rating } from "@components/rating/Rating";
import { Stat } from "@components/stat/Stat";
import { For, JSXElement } from "solid-js";
import { blogEntries } from "./BlogData";
import { BlogEntry } from "./BlogEntry";

export const BlogList = (): JSXElement => {
  return (
    <div class="stack gap-3">
      <Rating variant="accent" />
      <Chat />
      <Stat />
      <h1 class="regular">Latest posts</h1>
      <For each={blogEntries}>{(entry) => <BlogEntry {...entry} />}</For>
    </div>
  );
};
