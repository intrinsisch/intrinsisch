import type { JSX } from "solid-js";
import { Feedcard } from "./Feedcard";
import { feedlist } from "./Feedlist";

export const Feed = (): JSX.Element => {
  return (
    <div class="d-flex flex-column gap-3 mt-5">
      {feedlist.map((f, i) => (
        <Feedcard entry={f} index={i} />
      ))}
    </div>
  );
};
