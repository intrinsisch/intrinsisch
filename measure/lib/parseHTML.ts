import {
  DOMParser,
  HTMLDocument
} from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { Project } from "./config.ts";

export type HTMLParsed =
  { p: Project, doc?: HTMLDocument }

export async function parseHTML(p: Project): Promise<{ p: Project, doc?: HTMLDocument }> {
  const projectPath = ["./tmp", p.short].join("/");
  for await (const entry of Deno.readDir(projectPath)) {
    if (entry.isFile && entry.name.endsWith(".html")) {
      const path = [projectPath, entry.name].join("/");
      const file = await Deno.readFile(path);
      const decoder = new TextDecoder("utf-8");
      const parser = new DOMParser();
      const doc = parser.parseFromString(decoder.decode(file), "text/html");
      if (doc === null) {
        console.error("HTML couldn't get parsed.", p);
        return { p }
      }
      return { doc, p };
    }
  }
  console.error("No HTML found.", projectPath, p);
  return { p };
}
