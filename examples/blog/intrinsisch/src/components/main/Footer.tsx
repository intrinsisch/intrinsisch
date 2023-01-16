import type { JSX } from "solid-js/jsx-runtime";

export const Footer = (): JSX.Element => {
  return (
    <footer class="container stack">
      <div class="row">
        <div class="stack spa-2">
          <h5 class="fw-bolder">Newsletter</h5>
          <p>Sign up to our weekly newsletter:</p>
          <form action="#">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="your@email.com"
                aria-label="Your email address"
                aria-describedby="button-addon"
                required
              />
              <button class="btn btn-dark" type="submit" id="button-addon">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div class="stack spa-2">
          <h5>Meta links</h5>
          <div class="list-group list-group-flush">
            <button
              type="button"
              class="list-group-item list-group-item-action"
              aria-current="true"
            >
              Log in
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
            >
              Feed
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
            >
              Link to external site{" "}
              <i class="fa-light fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="typ-center py-5">
        <span>&copy;</span>
        <span class="typ-italic typ-monospace">2023 Blog </span>
        <span>&#92;</span>
        <span class="typ-italic typ-monospace"> Themed with Intrinsisch</span>
      </div>
    </footer>
  );
};
