import type { JSXElement} from "solid-js";
import authorsPortrait from "./floppy-ears.jpg";

export const Bio = (): JSXElement => {
  return (
    <div class="stack spa-1">
      <h5>About the author</h5>
      <div class="card">
        <img
          src={authorsPortrait}
          alt="Author's Portrait"
        />
        <p class="card-body">
          <strong>Floppy</strong> is an Advocate for UX and founder of this
          blog. <br />
          <a href="#">More about Floppy</a>
        </p>
      </div>
    </div>
  );
};
