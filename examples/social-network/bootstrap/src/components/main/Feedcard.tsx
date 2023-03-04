import type { JSX } from "solid-js";
import type { FeedEntry } from "./Feedlist";

export const Feedcard = (props: {
  entry: FeedEntry;
  index: number;
}): JSX.Element => {
  return (
    <div class="card">
      <div class="card-header d-flex align-items-center gap-3">
        <img
          width="48"
          height="48"
          src={props.entry.portrait}
          class="rounded-circle border border-primary"
          alt={props.entry.author}
        />
        <div>
          <strong>{props.entry.author}</strong>
          <p class="m-0">
            <small>{props.entry.date}</small>
          </p>
        </div>
      </div>
      {props.entry.image && (
        <img src={props.entry.image} class="card-img-top" alt="..." />
      )}
      <div class="card-body">
        <p class="card-text">{props.entry.content}</p>
      </div>
      <div class="card-footer d-flex gap-3">
        <span>
          <i class="fa-solid fa-thumbs-up"></i> <small> {15 - props.index * 2}</small>
        </span>
        <span>
          <i class="fa-solid fa-heart"></i> <small> {10 - props.index * 2 - 3}</small>
        </span>
        <span>
          <i class="fa-solid fa-comment-lines"></i> <small> {20 - props.index * 3 - 10}</small>
        </span>
      </div>
    </div>
  );
};
