import { For, JSXElement } from "solid-js";
import { Feedcard } from "./Feedcard";
import { feedlist } from "./Feedlist";

export const Feed = (): JSXElement => {
  return (
    <div class="row pt-3 g-5">
      <For each={feedlist}>
        {(f, i) => (
          <div class="col-md-6">
            <Feedcard entry={f} index={i()} />
          </div>
        )}
      </For>
    </div>
  );
};
