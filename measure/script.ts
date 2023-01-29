
import { projects } from "./lib/config.ts";
import { cleanup } from "./lib/cleanup.ts";
import { setup } from "./lib/setup.ts";
import { parseHTML } from "./lib/parseHTML.ts";

await cleanup();
await Promise.all(projects.map(setup));
await Promise.all(projects.map(parseHTML)).then(console.log);
