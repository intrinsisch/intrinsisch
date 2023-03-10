import type { JSXElement} from "solid-js";
import authorsPortrait from "./floppy-ears.avif";

export const Bio = (): JSXElement => {
  return (
    <div>
      <h5>About the author</h5>
      <div class="card">
        <img
          src={authorsPortrait}
          class="card-img-top img-fluid"
          alt="Author's Portrait"
          width="2230"
          height="1446"
        />
        <div class="card-body">
          <p class="card-text">
            <strong>Floppy</strong> is an Advocate for UX and founder of this
            blog. <br />
            <a href="#">More about Floppy</a>
          </p>
        </div>
      </div>
    </div>
  );
};
