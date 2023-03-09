import type { JSXElement } from "solid-js";

export const Navbar = (): JSXElement => {

  return (
    <header class="sidebar-l px-3 py-00 gap-1" style="--sidebar-width: max-content;">
      <a href="#" class="no-decoration bold h1">
        Feo&#92;Blog
      </a>
      <div>
        <ul role="list" class="cluster gap-0 p-none">
          <li>
            <a class="no-decoration" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="no-decoration" href="#">
              About me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
