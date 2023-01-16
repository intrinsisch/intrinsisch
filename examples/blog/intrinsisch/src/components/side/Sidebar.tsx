import type { JSX } from "solid-js/jsx-runtime";
import { Ad } from "./Ad";
import { Bio } from "./Bio";
import { TagList } from "./TagList";

export const Sidebar = (): JSX.Element => {
  return (
    <div class="stack">
      <Bio />
      <TagList />
      <Ad />
    </div>
  );
};