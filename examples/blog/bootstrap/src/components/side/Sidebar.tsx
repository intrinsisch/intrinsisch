import type { JSX } from "solid-js";
import { Ad } from "./Ad";
import { Bio } from "./Bio";
import { TagList } from "./TagList";

export const Sidebar = (): JSX.Element => {
  return (
    <>
      <Bio />
      <TagList />
      <Ad />
    </>
  );
};
