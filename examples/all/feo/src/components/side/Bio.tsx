import type { JSXElement } from "solid-js";
import authorsPortrait from "./floppy-ears.jpg";

export const Bio = (): JSXElement => {
  return (
    <div class="stack gap-000">
      <h5>About the author</h5>
      <div class="sidebar-r card">
        <img
          src={authorsPortrait}
          alt="Author's Portrait"
          width="4460"
          height="2891"
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
