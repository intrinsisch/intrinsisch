import { For, JSXElement, Show } from "solid-js";
import { Commentcard } from "./Commentcard";
import type { FeedEntry } from "./Feedlist";

export const Feedcard = (props: {
  entry: FeedEntry;
  index: number;
}): JSXElement => {
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
      <Show when={props.entry.image} keyed>
        {(image) => <img src={image} class="card-img-top" alt="..." />}
      </Show>
      <div class="card-body">
        <p class="card-text">{props.entry.content}</p>
        <hr />
        <form>
          <div class="input-group mb-3">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" placeholder="Comment..." />
              <label for="floatingInput">Comment</label>
            </div>
            <button class="btn btn-outline-primary" type="button" id="button-addon2"><i class="fa-solid fa-paper-plane"></i></button>
          </div>
        </form>
        <For each={props.entry.comments}>
          {(comment) => (
            <Commentcard comment={comment} />
          )}
        </For>
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
