import { For, JSX } from "solid-js";

export type Blog = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const BlogEntry = (props: Blog): JSX.Element => {
  return (
    <article class="py-4 stack spa-4">
      <div class="d-flex flex-wrap gap-1 mb-2">
        <For each={props.tags}>
          {(tag) => (
            <a href="#">
              <span class="badge rounded-pill text-bg-dark">{tag}</span>
            </a>
          )}
        </For>
      </div>
      <h2>
        <a href="#">{props.title}</a>
      </h2>
      <p class="lead">{props.summary}</p>
      <div>
        <button>
          Read more <i class="fa-light fa-arrow-right"></i>
        </button>
      </div>
    </article>
  );
};
