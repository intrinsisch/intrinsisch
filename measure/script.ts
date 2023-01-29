
import { projects } from "./lib/config.ts";
import { cleanup } from "./lib/cleanup.ts";
import { setup } from "./lib/setup.ts";

await cleanup();
projects.forEach(setup);
