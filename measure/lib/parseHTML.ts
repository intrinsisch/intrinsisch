import {
  DOMParser,
  HTMLDocument
} from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { Project } from "./config.ts";

export async function parseHTML(p: Project): Promise<HTMLDocument | null> {
  for await (const entry of Deno.readDir(["./tmp", p.short].join("/"))) {
    if (entry.isFile && entry.name.endsWith(".html")) {
      const path = ["./tmp", p.short, entry.name].join("/");
      const file = await Deno.readFile(path);
      const decoder = new TextDecoder("utf-8");
      const parser = new DOMParser();
      return parser.parseFromString(decoder.decode(file), "text/html");
    }
  }
  return null;
}
