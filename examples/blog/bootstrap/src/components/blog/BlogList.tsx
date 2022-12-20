import { For, JSX } from "solid-js";
import { blogEntries } from "./BlogData";
import { BlogEntry } from "./BlogEntry";
import { Pagination } from "./Pagination";

export const BlogList = (): JSX.Element => {
  return (
    <>
      <h1>Latest posts</h1>
      <For each={blogEntries}>{(entry) => <BlogEntry {...entry} />}</For>
      <Pagination />
    </>
  );
};
