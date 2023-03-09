import { Rating } from "@components/rating/Rating";
import type { JSXElement } from "solid-js";

export const Footer = (): JSXElement => {
  return (
    <footer class="py-1 px-3 stack stack-g-1">
      <div class="switcher gap-1">
        <div class="stack stack-g-000">
          <Rating />
          <h5>Newsletter</h5>
          <p>Sign up to our weekly newsletter:</p>
          <form action="#">
            <div class="sidebar-r" style="--sidebar-width: min-content;">
              <input
                type="text"
                placeholder="your@email.com"
                aria-label="Your email address"
                aria-describedby="button-addon"
                required
              />
              <button class="pointer" type="submit" id="button-addon">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div class="stack stack-g-000">
          <h5>Meta links</h5>
          <div class="stack stack-g-none">
            <button class="pointer"
              type="button"
              aria-current="true"
            >
              Log in
            </button>
            <button class="pointer" type="button">
              Feed
            </button>
            <button class="pointer" type="button">
              Link to external site{" "}
              <i class="fa-light fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="copyright text-center">
        <span>&copy;</span>
        <span>2023 Blog </span>
        <span>&#92;</span>
        <span> Themed with Feo</span>
      </div>
    </footer>
  );
};
