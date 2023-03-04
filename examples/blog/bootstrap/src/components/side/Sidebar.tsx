import type { JSXElement} from "solid-js";
import { Ad } from "./Ad";
import { Bio } from "./Bio";
import { TagList } from "./TagList";

export const Sidebar = (): JSXElement => {
  return (
    <>
      <Bio />
      <TagList />
      <Ad />
    </>
  );
};
