import { AST, Rule } from "https://deno.land/x/css@0.3.0/mod.ts";
import { reverseStr } from "./stringUtil.ts";

type CustomSelectorWrapper = {
  stringRepresentation: string;
  listRepresentation: string[];
  combinatorRepresentation: CombinatorSelector;
}

export function getCleanSelectors(css: AST): CustomSelectorWrapper[] {
  const selectors = css.stylesheet.rules
    .flatMap(flatRules)
    .flatMap(rule => (accountForIsSelector(rule.selectors)));

  return selectors.map(prepareSelector);
}

/**
 * To handle media queries and nested rules.
 * Also filters out all non-rule entries, as e.g. 'charset'.
 */

function flatRules(rule: Rule): Rule[] {
  if ("rules" in rule) {
    return (rule.rules as Rule[]).flatMap(flatRules);
  }
  if (rule.type !== "rule") {
    return [];
  }
  return [rule];
}
/**
 * fix
 * from: `[ "button:is([aria-current]", ":hover", ":active", ":focus)" ]`
 * to: `[ "button:is([aria-current])", "button:is(:hover)", "button:is(:active)", "button:is(:focus)" ]`
 */
function accountForIsSelector(selectors: string[]): string[] {
  const completeSelector = selectors.join(", ");
  if (completeSelector.includes(":is")) {
    if (completeSelector.split(":is").length > 2) {
      throw new Error("More than 1 `:is` selector found. Solution is not implemented for this case.");
    }
    const groupRE = new RegExp(/^(.+?)?:is\((.+?)\)(.+?)?$/);
    const execArray = groupRE.exec(completeSelector);
    if (execArray === null) {
      throw new Error("Unexpected Error, `" + completeSelector + "`");
    }
    const [_, before, inside, after] = execArray;
    return inside.split(", ").map(
      innerSelector => `${before === undefined ? '' : before}:is(${innerSelector})${after === undefined ? '' : after}`
    );
  }
  return selectors;
}

function prepareSelector(selector: string): CustomSelectorWrapper {
  return { stringRepresentation: selector, listRepresentation: splitSelector(selector), combinatorRepresentation: createCombinatorRepresentation(selector) }
}

/**
 * from: `".container>.direct-child .furter-child"`
 * to: `[".container", ".direct-child", ".furter-child"]`
 */
function splitSelector(selector: string): string[] {
  return selector.split(" ").flatMap(s => s.split(">")).filter(s => s.length > 0);
}

type CombinatorSelector = {
  stringRepresentation: string;
  next?: {
    directChild: boolean;
    selector: CombinatorSelector;
  }
}

/**
 * from: `".container>.direct-child .furter-child"`
 * to:
 * ```
 * {
 * stringRepresentation: ".container",
 * next: {
 *   directChild: true,
 *   selector: {
 *     stringRepresentation: ".direct-child",
 *     next: {
 *       directChild: false,
 *       selector: {
 *         stringRepresentation: ".furter-child"
 *       },
 *     }
 *   },
 * }
}
 * ```
 */
function createCombinatorRepresentation(selector: string): CombinatorSelector {
  const reversedSelector = reverseStr(selector);

  let stringBuffer = "";
  let combSel: CombinatorSelector = {
    stringRepresentation: "",
  };

  for (const char of reversedSelector) {
    if (char === " ") {
      const currSel = reverseStr(stringBuffer);
      stringBuffer = "";
      combSel = addChild(combSel, currSel, false);
    } else if (char === ">") {
      const currSel = reverseStr(stringBuffer);
      stringBuffer = "";
      combSel = addChild(combSel, currSel, true);
    } else {
      stringBuffer += char;
    }
  }
  const currSel = reverseStr(stringBuffer);
  combSel.stringRepresentation = currSel
  return combSel;
}

function addChild(curr: CombinatorSelector, selector: string, directChild: boolean): CombinatorSelector {
  curr.stringRepresentation = selector;
  return {
    stringRepresentation: "",
    next: {
      directChild,
      selector: curr
    }
  }
}
