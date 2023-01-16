import { createSignal, JSX } from "solid-js";

export const Navbar = (): JSX.Element => {
  const [collapsed, setCollapsed] = createSignal(true);

  return (
    <nav class="container cluster">
      <a class="navbar-brand fw-bold font-monospace text-uppercase" href="#">
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
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class={`collapse navbar-collapse ${collapsed() || "show"}`}>
        <ul class="cluster unlist">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
