import { Chat } from "@components/chat/Chat";
import { Rating } from "@components/rating/Rating";
import { Stat } from "@components/stat/Stat";
import type { JSXElement } from "solid-js";

export const Footer = (): JSXElement => {
  return (
    <footer class="container-fluid pt-4">
      <div class="row">
        <div class="col-sm">
          <Rating variant="dark" md="3" xl="4" />
          <Chat />
          <Stat xs="vertical" lg="horizontal" />
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
        <div class="col-sm">
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
      <div class="container text-center py-5">
        <span>&copy;</span>
        <span class="fst-italic font-monospace">2023 Blog </span>
        <span>&#92;</span>
        <span class="fst-italic font-monospace"> Themed with Bootstrap v5</span>
      </div>
    </footer>
  );
};
