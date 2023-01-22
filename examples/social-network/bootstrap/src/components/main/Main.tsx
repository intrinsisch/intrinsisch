import type { JSX } from "solid-js";
import { Feed } from "./Feed";
import { Stories } from "./Stories";

export const Main = (): JSX.Element => {
  return (
    <main class="py-3 px-4">
      <Stories />
      <Feed />
    </main>
  );
};
