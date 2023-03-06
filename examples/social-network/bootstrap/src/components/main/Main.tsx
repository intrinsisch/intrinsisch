import type { JSXElement } from "solid-js";
import { Feed } from "./Feed";
import { Stories } from "./Stories";

export const Main = (): JSXElement => {
  return (
    <main class="py-3 pe-4 container">
      <Stories />
      <Feed />
    </main>
  );
};
