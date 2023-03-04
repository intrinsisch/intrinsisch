import { For, JSXElement } from "solid-js";
import { Feedcard } from "./Feedcard";
import { feedlist } from "./Feedlist";

export const Feed = (): JSXElement => {
  return (
    <div class="d-flex flex-column gap-3 mt-5">
      <For each={feedlist}>
        {(f, i) => (
          <Feedcard entry={f} index={i()} />
        )}
      </For>
    </div>
  );
};
