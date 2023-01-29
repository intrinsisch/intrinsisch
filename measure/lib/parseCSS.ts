import { Project } from "./config.ts";
import * as css from "https://deno.land/x/css@0.3.0/mod.ts";

export type CSSParsed =
  { p: Project, ast?: css.AST }


export async function parseCSS(p: Project): Promise<CSSParsed> {
  const projectPath = ["./tmp", p.short, "assets"].join("/");
  for await (const entry of Deno.readDir(projectPath)) {
    if (entry.isFile && entry.name.endsWith(".css")) {
      const path = [projectPath, entry.name].join("/");
      const file = await Deno.readFile(path);
      const decoder = new TextDecoder("utf-8");
      return { ast: css.parse(decoder.decode(file)), p };
    }
  }
  console.error("No CSS found.", projectPath, p);
  return { p };
}
