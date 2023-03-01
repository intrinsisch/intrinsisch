import type { JSX } from "solid-js";

export const Pagination = (): JSX.Element => {
  return (
    <nav class="pagination" aria-label="Page navigation example">
      <ul class="cluster unlist center" style="--spa--spacing:0;">
        <li>
          <a class="pagination-item no-anchor" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a class="pagination-item no-anchor active" href="#">
            1
          </a>
        </li>
        <li>
          <a class="pagination-item no-anchor" href="#">
            2
          </a>
        </li>
        <li>
          <a class="pagination-item no-anchor" href="#">
            3
          </a>
        </li>
        <li>
          <a class="pagination-item no-anchor" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
