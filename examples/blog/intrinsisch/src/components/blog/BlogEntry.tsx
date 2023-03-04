import { For, JSXElementElement, Show } from "solid-js";

export type Blog = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const BlogEntry = (props: Blog): JSXElement => {
  return (
    <article class="stack spa-3">
      <Show when={props.tags.length > 0}>
        <div class="cluster spa-2">
          <For each={props.tags}>
            {(tag) => (
              <a href="#">
                <span class="tag">{tag}</span>
              </a>
            )}
          </For>
        </div>
      </Show>
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <p class="typ-lead">{props.summary}</p>
      <div>
        <button>
          Read more <i class="fa-light fa-arrow-right"></i>
        </button>
      </div>
    </article>
  );
};
