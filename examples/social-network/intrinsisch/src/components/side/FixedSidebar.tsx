import type { JSXElement} from "solid-js";
import { Footer } from "./Footer";
import { MenuEntry } from "./MenuEntry";

export const FixedSidebar = (): JSXElement => {
  return (
    <div
      class="position-sticky top-0 bottom-0 p-4 d-flex flex-column"
      style="min-height: 100vh;"
    >
      <div class="flex-grow-1">
        <h2 class="fw-bold font-monospace text-uppercase mb-sm-5">
          <i class="fa-solid fa-dolphin d-sm-none"></i>
          <span class="d-none d-sm-inline">
            Bootstrap&#92;
            <br />
            Social-Network
          </span>
        </h2>
        <MenuEntry icon="fa-magnifying-glass" label="Search" />
        <MenuEntry icon="fa-paper-plane" label="Messages" />
        <MenuEntry icon="fa-earth-americas" label="Explore" />
        <MenuEntry icon="fa-gear" label="Settings" />
      </div>
      <div class="d-none d-sm-block" style="max-width: 15rem;">
        <Footer darkBg={true} />
      </div>
    </div>
  );
};
