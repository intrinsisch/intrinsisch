import { Stat } from "@components/stat/Stat";
import type { JSXElement } from "solid-js";
import { Ad } from "./Ad";
import { Bio } from "./Bio";
import { TagList } from "./TagList";

export const Sidebar = (): JSXElement => {
  return (
    <div class="stack gap-0">
      <Stat />
      <Bio />
      <TagList />
      <Ad />
    </div>
  );
};
