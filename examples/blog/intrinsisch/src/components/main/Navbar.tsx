import { createSignal, JSX } from "solid-js";

export const Navbar = (): JSX.Element => {
  const [collapsed, setCollapsed] = createSignal(true);

  return (
    <nav class="container cluster spa-0 navbar">
      <a class="navbar-brand no-anchor spa-py-3" href="#">
        Intrinsisch&#92;Blog
      </a>
      <button
        class="navbar-toggler"
        type="button"
        aria-expanded={collapsed() ? "false" : "true"}
        aria-label="Toggle navigation"
        onClick={() => {
          setCollapsed((c) => !c);
        }}
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class={`navbar-collapse ${collapsed() || "show"}`}>
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
