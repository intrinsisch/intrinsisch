import { AST, Rule } from "https://deno.land/x/css@0.3.0/mod.ts";

// Calculates "Universality" factor as proposed from
// CSS Code Quality: A Metric for Abstractness
// Keller and Nussbaumer, 2010
export function universality(css: AST): number {
  const selectors = css.stylesheet.rules
    .flatMap(flatRules)
    .flatMap(rule => (accountForIsSelector(rule.selectors)));
  const setOfSimpleAndLastSelectors = selectors.reduce((set, curr) => {
    const lastSelector = splitSelector(curr).slice(-1)[0];
    set.add(lastSelector);
    return set;
  }, new Set<string>());
  const numberOfSelectors = selectors.length;
  const uniqueSelector = setOfSimpleAndLastSelectors.size;
  return uniqueSelector / numberOfSelectors;
}

// To handle media queries and nested rules
// Also filters out all non-rule entries, as e.g. 'charset'
function flatRules(rule: Rule): Rule[] {
  if ("rules" in rule) {
    return (rule.rules as Rule[]).flatMap(flatRules);
  }
  if (rule.type !== "rule") {
    return [];
  }
  return [rule];
}

// fix from: `[ "button:is([aria-current]", ":hover", ":active", ":focus)" ]`
// to: `[ "button:is([aria-current])", "button:is(:hover)", "button:is(:active)", "button:is(:focus)" ]`
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

// split from: `".container>.direct-child .furter-child"`
// to: `[".container", ".direct-child", ".furter-child"]`
function splitSelector(selector: string): string[] {
  return selector.split(" ").flatMap(s => s.split(">")).filter(s => s.length > 0);
}
