import { For, JSXElement, Show } from "solid-js";

export type Blog = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const BlogEntry = (props: Blog): JSXElement => {
  return (
    <article class="stack gap-0">
      <Show when={props.tags.length > 0}>
        <div class="cluster gap-000">
          <For each={props.tags}>
            {(tag) => (
              <a href="#" class="no-decoration tag">
                <span>{tag}</span>
              </a>
            )}
          </For>
        </div>
      </Show>
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <p>{props.summary}</p>
      <div>
        <button role="button" class="pointer">
          Read more <i class="fa-light fa-arrow-right"></i>
        </button>
      </div>
    </article>
  );
};
