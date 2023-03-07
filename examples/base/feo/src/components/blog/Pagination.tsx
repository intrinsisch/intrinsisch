import type { JSXElement } from "solid-js";

export const Pagination = (): JSXElement => {
  return (
    <nav aria-label="Page navigation example">
      <ul>
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li>
          <a href="#">
            1
          </a>
        </li>
        <li>
          <a href="#">
            2
          </a>
        </li>
        <li>
          <a href="#">
            3
          </a>
        </li>
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
