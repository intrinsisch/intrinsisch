import type { JSX } from "solid-js";
import AdImage from "./ad.png";

export const Ad = (): JSX.Element => {
  return (
    <div class="pt-3">
      <h5>Ad</h5>
      <a href="#">
        <img class="img-fluid" src={AdImage} alt="Warning: This is an ad!" />
      </a>
    </div>
  );
};
