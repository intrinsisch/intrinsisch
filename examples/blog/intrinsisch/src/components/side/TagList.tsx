import type { JSXElement} from "solid-js";

export const TagList = (): JSXElement => {
  return (
    <div class="stack spa-1">
      <h5>Categories</h5>
      <div class="cluster spa-2">
        <a href="#">
          <span class="tag">Accessibility</span>
        </a>
        <a href="#">
          <span class="tag">UX</span>
        </a>
        <a href="#">
          <span class="tag">CSS</span>
        </a>
        <a href="#">
          <span class="tag">Performance</span>
        </a>
        <a href="#">
          <span class="tag">Design</span>
        </a>
        <a href="#">
          <span class="tag">Wallpapers</span>
        </a>
      </div>
    </div>
  );
};
