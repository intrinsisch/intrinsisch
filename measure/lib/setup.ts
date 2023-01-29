import { ensureDir, move } from "https://deno.land/std@0.175.0/fs/mod.ts";
import { Project } from "./config.ts";
import { log } from "./utils.ts";

export async function setup(p: Project): Promise<undefined> {
  log(`Project: ${p.label}`);
  const relPath = ["../examples", p.path].join("/");

  log(`Install: ${p.label}`);
  await Deno.run({ cmd: ["yarn", "--cwd", relPath] }).status();

  log(`Build: ${p.label}`);
  await Deno.run({ cmd: ["yarn", "--cwd", relPath, "build"] }).status();

  log(`Move: ${p.label}`);
  await ensureDir("./tmp");
  return move([relPath, "dist"].join("/"), ["./tmp", p.short].join("/"));
}
