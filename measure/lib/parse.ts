import { parse as parseCSSFromString, AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import {
  DOMParser,
  HTMLDocument
} from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { Project } from "./config.ts";

export type AfterParsed = { html: HTMLDocument, css: AST, p: Project }

export async function parseProject(p: Project): Promise<AfterParsed | undefined> {
  const htmlPromise = parseHTML(p);
  const cssPromise = parseCSS(p);

  const [html, css] = await Promise.all([htmlPromise, cssPromise]);

  if (html === undefined) {
    return;
  }
  if (css === undefined) {
    return;
  }
  return { html, css, p }
}

async function parseHTML(p: Project): Promise<HTMLDocument | undefined> {
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
        return;
      }
      return doc;
    }
  }
  console.error("No HTML found.", projectPath, p);
}


async function parseCSS(p: Project): Promise<AST | undefined> {
  const projectPath = ["./tmp", p.short, "assets"].join("/");
  for await (const entry of Deno.readDir(projectPath)) {
    if (entry.isFile && entry.name.endsWith(".css")) {
      const path = [projectPath, entry.name].join("/");
      const file = await Deno.readFile(path);
      const decoder = new TextDecoder("utf-8");
      return parseCSSFromString(decoder.decode(file));
    }
  }
  console.error("No CSS found.", projectPath, p);
}
