import { For, JSX } from "solid-js";
import portrait03 from "./images/portrait-03.jpg";
import portrait04 from "./images/portrait-04.jpg";
import portrait05 from "./images/portrait-05.jpg";
import portrait06 from "./images/portrait-06.jpg";

type Story = {
  name: string;
  portrait: string;
  borderColor: string;
}

const stories: Story[] = [
  { name: "Kenya", portrait: portrait03, borderColor: "primary" },
  { name: "Delaney", portrait: portrait04, borderColor: "warning" },
  { name: "Jan", portrait: portrait05, borderColor: "info" },
  { name: "Kian", portrait: portrait06, borderColor: "danger" },
];

export const Stories = (): JSX.Element => {
  return (
    <div class="row gap-0">
      <For each={stories}>{(story) => (
        <div class="col-auto text-center">
          <img
            width="48"
            height="48"
            src={story.portrait}
            class={`rounded-circle border border-${story.borderColor}`}
            alt={story.name}
          />
          <h2 class="fs-6">
            <small>{story.name}</small>
          </h2>
        </div>
      )}</For>
    </div>
  );
};
