import { AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import { HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { getCleanSelectors } from "./utils/cssUtils.ts";
import { getCleanElements, getNumberOfElements } from "./utils/htmlUtils.ts";
/**
 * Calculates "Average Selector Scope" factor as proposed from
 * CSS Code Quality: A Metric for Abstractness
 * Keller and Nussbaumer, 2010
 */
export function averageSelectorScope(html: HTMLDocument, css: AST): number {
  const selectors = getCleanSelectors(css);
  const elements = getCleanElements(html);

  const numberOfSelectors = selectors.length;
  const numberOfElements = getNumberOfElements(elements);
  console.log(numberOfElements);


  return 0;
}
