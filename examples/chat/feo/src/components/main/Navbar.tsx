import type { JSXElement } from "solid-js";

export const Navbar = (): JSXElement => {

  return (
    <header class="flex-row py-1 px-3">
      <a href="#" class="no-decoration bold h1">
        Feo&#92;Blog
      </a>
      <button
        class="visually-hidden"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div>
        <ul role="list" class="cluster gap-2">
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
