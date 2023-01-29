
import { projects } from "./lib/config.ts";
import { cleanup } from "./lib/cleanup.ts";
import { setup } from "./lib/setup.ts";
import { HTMLParsed, parseHTML } from "./lib/parseHTML.ts";
import { CSSParsed, parseCSS } from "./lib/parseCSS.ts";

await cleanup();
await Promise.all(projects.map(setup));
await Promise.all(projects.map(parseHTML))
  .then((d) => d.filter((it): it is Required<HTMLParsed> => it.doc !== undefined));
await Promise.all(projects.map(parseCSS))
  .then((d) => d.filter((it): it is Required<CSSParsed> => it.ast !== undefined));
