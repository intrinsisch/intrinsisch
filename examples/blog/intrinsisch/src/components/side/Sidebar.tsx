import type { JSXElement} from "solid-js";
import { Ad } from "./Ad";
import { Bio } from "./Bio";
import { TagList } from "./TagList";

export const Sidebar = (): JSXElement => {
  return (
    <div class="stack">
      <Bio />
      <TagList />
      <Ad />
    </div>
  );
};
