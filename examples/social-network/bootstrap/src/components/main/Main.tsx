import type { JSX } from "solid-js";
import { Feed } from "./Feed";
import { Stories } from "./Stories";

export const Main = (): JSX.Element => {
  return (
    <main class="py-3 px-4 row">
      <div class="col-md-10 col-lg-6 col-xl-4">
        <Stories />
        <Feed />
      </div>
    </main>
  );
};
