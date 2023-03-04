import { For, JSXElement } from "solid-js";
import type { Comment } from "./Feedlist";

type Props = {
  comment: Comment;
}

export const Commentcard = (props: Props): JSXElement => {
  return <div class="card border-light mb-3">
    <div class="card-header">{props.comment.author}</div>
    <div class="card-body">
      <p class="card-text">{props.comment.content}</p>
      <For each={props.comment.replies}>{(reply) => <Commentcard comment={reply} />}</For>
    </div>
  </div>

}
