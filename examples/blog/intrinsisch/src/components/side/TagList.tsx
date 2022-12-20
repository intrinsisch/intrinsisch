import type { JSX } from "solid-js/jsx-runtime";

export const TagList = (): JSX.Element => {
  return (
    <div class="pt-3">
      <h5>Categories</h5>
      <div
        class="d-flex flex-wrap gap-1"
        style="display: flex; flex-wrap: wrap;"
      >
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
