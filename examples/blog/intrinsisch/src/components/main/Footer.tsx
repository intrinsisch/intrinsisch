import type { JSX } from "solid-js/jsx-runtime";

export const Footer = (): JSX.Element => {
  return (
    <footer class="container stack spa-py-5">
      <div class="grid spa-6">
        <div class="stack spa-2">
          <h5 class="fw-bolder">Newsletter</h5>
          <p>Sign up to our weekly newsletter:</p>
          <form action="#">
            <div class="sidebar-wrapper spa-0">
              <input
                type="text"
                placeholder="your@email.com"
                aria-label="Your email address"
                aria-describedby="button-addon"
                required
              />
              <button class="sidebar" type="submit" id="button-addon">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div class="stack spa-2">
          <h5>Meta links</h5>
          <div class="stack spa-1">
            <button
              type="button"
              class="typ-left"
              aria-current="true"
            >
              Log in
            </button>
            <button
              type="button"
              class="typ-left"
            >
              Feed
            </button>
            <button
              type="button"
              class="typ-left"
            >
              Link to external site{" "}
              <i class="fa-light fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="center spa-py-5">
        <span>&copy;</span>
        <span class="typ-italic typ-monospace">2023 Blog </span>
        <span>&#92;</span>
        <span class="typ-italic typ-monospace"> Themed with Intrinsisch</span>
      </div>
    </footer>
  );
};
