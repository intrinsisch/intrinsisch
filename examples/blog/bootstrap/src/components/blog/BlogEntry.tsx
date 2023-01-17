import { For, JSX, Show } from "solid-js";

export type Blog = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const BlogEntry = (props: Blog): JSX.Element => {
  return (
    <article class="py-4">
      <Show when={props.tags.length > 0}>
        <div class="d-flex flex-wrap gap-1 mb-2">
          <For each={props.tags}>
            {(tag) => (
              <a href="#">
                <span class="badge rounded-pill text-bg-dark">{tag}</span>
              </a>
            )}
          </For>
        </div>
      </Show>
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <p class="lead">{props.summary}</p>
      <button class="btn btn-sm btn-light">
        Read more <i class="fa-light fa-arrow-right"></i>
      </button>
    </article>
  );
};
