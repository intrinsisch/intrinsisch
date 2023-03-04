import type { JSXElement} from "solid-js";
import AdImage from "./ad.png";

export const Ad = (): JSXElement => {
  return (
    <div class="stack spa-1">
      <h5>Ad</h5>
      <a href="#">
        <img class="img-fluid" src={AdImage} alt="Warning: This is an ad!" />
      </a>
    </div>
  );
};
