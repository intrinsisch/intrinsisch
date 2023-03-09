import type { JSXElement} from "solid-js";

export const TagList = (): JSXElement => {
  return (
    <div class="stack gap-000">
      <h5>Categories</h5>
      <div class="cluster gap-000">
        <a href="#" class="no-decoration tag">
          <span>Accessibility</span>
        </a>
        <a href="#" class="no-decoration tag">
          <span>UX</span>
        </a>
        <a href="#" class="no-decoration tag">
          <span>CSS</span>
        </a>
        <a href="#" class="no-decoration tag">
          <span>Performance</span>
        </a>
        <a href="#" class="no-decoration tag">
          <span>Design</span>
        </a>
        <a href="#" class="no-decoration tag">
          <span>Wallpapers</span>
        </a>
      </div>
    </div>
  );
};
