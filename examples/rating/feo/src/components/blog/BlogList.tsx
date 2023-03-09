import { Rating } from "@components/rating/Rating";
import { For, JSXElement } from "solid-js";
import { blogEntries } from "./BlogData";
import { BlogEntry } from "./BlogEntry";

export const BlogList = (): JSXElement => {
  return (
    <div class="stack gap-3">
      <Rating variant="accent" />
      <h1 class="regular">Latest posts</h1>
      <For each={blogEntries}>{(entry) => <BlogEntry {...entry} />}</For>
    </div>
  );
};
