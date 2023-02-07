import { projects } from "./lib/config.ts";
import { cleanup } from "./lib/cleanup.ts";
import { setup } from "./lib/setup.ts";
import { AfterParsed, parseProject } from "./lib/parse.ts";
import { universality } from "./lib/universality.ts";

await cleanup();
await Promise.all(projects.map(setup));
const documents = await Promise.all(projects.map(parseProject));
documents.filter((d): d is AfterParsed => d !== undefined).forEach(document => {
  const u = universality(document.css);
  console.log({ u });

})
