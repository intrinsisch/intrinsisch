import type { JSX } from "solid-js";

export const Navbar = (): JSX.Element => {

  return (
    <nav class="container cluster spa-0 navbar">
      <a class="navbar-brand no-anchor spa-py-3" href="#">
        Intrinsisch&#92;Blog
      </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class={`navbar-collapse`}>
        <ul class="cluster unlist">
          <li>
            <a
              class="navbar-link no-anchor active"
              aria-current="page"
              href="#"
            >Home
            </a>
          </li>
          <li>
            <a class="navbar-link no-anchor" href="#">
              About me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
