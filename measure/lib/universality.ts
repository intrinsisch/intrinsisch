import { AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import { CustomSelectorWrapper, getCleanSelectors } from "./utils/cssUtils.ts";

/**
 * Calculates "Universality" factor as proposed in
 * CSS Code Quality: A Metric for Abstractness
 * Keller and Nussbaumer, 2010
 */
export function universality(css: AST): number {
  const selectors = getCleanSelectors(css);
  const setOfSimpleAndLastSelectors = selectors.reduce(reduceToSet, new Set<string>());
  const numberOfSelectors = selectors.length;
  const uniqueSelector = setOfSimpleAndLastSelectors.size;
  return uniqueSelector / numberOfSelectors;
}

function reduceToSet(set: Set<string>, curr: CustomSelectorWrapper): Set<string> {
  const lastSelector = getLastElement(curr.listRepresentation);
  return set.add(lastSelector);
}

function getLastElement<T>(list: T[]): T {
  return list.slice(-1)[0];
}
