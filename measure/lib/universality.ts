import { AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import { getCleanSelectors } from "./cssUtils.ts";

/**
 * Calculates "Universality" factor as proposed from
 * CSS Code Quality: A Metric for Abstractness
 * Keller and Nussbaumer, 2010
 */
export function universality(css: AST): number {
  const selectors = getCleanSelectors(css);
  const setOfSimpleAndLastSelectors = selectors.reduce((set, curr) => {
    const lastSelector = curr.listRepresentation.slice(-1)[0];
    set.add(lastSelector);
    return set;
  }, new Set<string>());
  const numberOfSelectors = selectors.length;
  const uniqueSelector = setOfSimpleAndLastSelectors.size;
  return uniqueSelector / numberOfSelectors;
}
