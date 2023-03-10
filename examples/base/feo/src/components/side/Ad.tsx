import type { JSXElement} from "solid-js";
import AdImage from "./ad.avif";

export const Ad = (): JSXElement => {
  return (
    <div class="stack gap-000">
      <h5>Ad</h5>
      <a href="#">
        <img src={AdImage} alt="Warning: This is an ad!" width="280" height="234" />
      </a>
    </div>
  );
};
