import type { JSXElement} from "solid-js";

export const TagList = (): JSXElement => {
  return (
    <div class="pt-3">
      <h5>Categories</h5>
      <div class="d-flex flex-wrap gap-1">
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">Accessibility</span>
        </a>
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">UX</span>
        </a>
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">CSS</span>
        </a>
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">Performance</span>
        </a>
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">Design</span>
        </a>
        <a href="#">
          <span class="badge rounded-pill text-bg-dark">Wallpapers</span>
        </a>
      </div>
    </div>
  );
};
