import { AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import { HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { CombinatorSelector, getCleanSelectors } from "./utils/cssUtils.ts";
import { CustomElement, getCleanElements, getNumberOfElements } from "./utils/htmlUtils.ts";
import { sum } from "./utils/listUtils.ts";
/**
 * Calculates "Average Selector Scope" factor as proposed in
 * CSS Code Quality: A Metric for Abstractness
 * Keller and Nussbaumer, 2010
 */
export function averageSelectorScope(html: HTMLDocument, css: AST): number {
  const selectors = getCleanSelectors(css);
  const elements = getCleanElements(html);

  const numberOfSelectors = selectors.length;
  const numberOfElements = getNumberOfElements(elements);
  const sumOfElementsInScope = selectors.map(s => s.combinatorRepresentation).map(s => numberOfElementsInScope(s, elements)).reduce(sum, 0);

  return sumOfElementsInScope / (numberOfSelectors * numberOfElements);
}

function numberOfElementsInScope(selector: CombinatorSelector, element: CustomElement, onlyDirectChildren = false): number {
  if (selector.next === undefined) {
    if (selector.stringRepresentation.startsWith("#")) {
      // if selector is an id, only one element counts as scope
      return 1;
    }
    if (onlyDirectChildren) {
      // only the next children are counted as scope
      return element.children.length;
    }
    // otherwise everything remaining is the scope
    return getNumberOfElements(element);
  }
  const { next } = selector;

  for (const cl of element.classList) {
    if (selector.stringRepresentation.includes(cl)) {
      return element.children.map(c => numberOfElementsInScope(next.selector, c, next.directChild)).reduce(sum, 0);
    }
  }
  if (selector.stringRepresentation.includes(element.name)) {
    return element.children.map(c => numberOfElementsInScope(next.selector, c, next.directChild)).reduce(sum, 0);
  }
  return element.children.map(c => numberOfElementsInScope(selector, c)).reduce(sum, 0);
}
