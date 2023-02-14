import { AST } from "https://deno.land/x/css@0.3.0/mod.ts";
import { cleanCssRules } from "./utils/cssUtils.ts";

/**
 * Calculates different factors as proposed in
 * Complexity Metrics for Cascading Style Sheets
 * Adewumi, Misry and Ikhu-Omoregbe, 2012
 */

/**
 * RL: Rule Length
 */
export function ruleLenght(css: AST): number {
  return cleanCssRules(css.stylesheet.rules)
    .reduce((acc, cur) => {
      let linesOfCode = 0;

      // add one for each selector
      linesOfCode += cur.selectors.length;

      // add one for each property
      linesOfCode += cur.declarations.length;

      // add one for the closing brace
      linesOfCode++;
      return acc + linesOfCode;
    }, 0);
}

/**
 * NORB: Number of Rule Blocks
 */
export function numberOfRuleBlocks(css: AST): number {
  return cleanCssRules(css.stylesheet.rules).length;
}

/**
 * E: Entropy Metric
 */
export function entropyMetric(css: AST): number {
  return -1;
}

/**
 * NERB: Number of extended Rule Blocks
 */
export function numberOfExtendedRuleBlocks(css: AST): number {
  return cleanCssRules(css.stylesheet.rules)
    .reduce((acc, cur) => {
      if (cur.selectors.length > 1) {
        return acc + 1;
      }
      return acc;
    }, 0);
}

/**
 * NADRB: Number of Attributes Defined per Rule Block
 */
export function numberOfAttributesDefinedPerRuleBlock(css: AST): number {
  const cleanedCssRules = cleanCssRules(css.stylesheet.rules);
  const totalNumberOfAttributes = cleanedCssRules
    .flatMap((rule) => rule.declarations)
    .length;
  const totalNumberOfBlocks = numberOfRuleBlocks(css);
  return totalNumberOfAttributes / totalNumberOfBlocks;
}

/**
 * NCRB: Number of Cohesive Rule Blocks
 */
export function numberOfCohesiveRuleBlocks(css: AST): number {
  return cleanCssRules(css.stylesheet.rules)
    .reduce((acc, cur) => {
      if (cur.selectors.length === 1) {
        return acc + 1;
      }
      return acc;
    }, 0);
}
