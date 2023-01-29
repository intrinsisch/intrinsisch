import { projects } from "./lib/config.ts";
import { cleanup } from "./lib/cleanup.ts";
import { setup } from "./lib/setup.ts";
import { parseProject } from "./lib/parse.ts";

await cleanup();
await Promise.all(projects.map(setup));
await Promise.all(projects.map(parseProject));
