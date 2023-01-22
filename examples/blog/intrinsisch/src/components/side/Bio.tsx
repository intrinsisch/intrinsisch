import type { JSX } from "solid-js";
import authorsPortrait from "./floppy-ears.jpg";

export const Bio = (): JSX.Element => {
  return (
    <div class="stack spa-1">
      <h5>About the author</h5>
      <div class="card">
        {/* <img
          src={authorsPortrait}
          class="card-img-top"
          alt="Author's Portrait"
        /> */}
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
