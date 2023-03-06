import { averageSelectorScope } from "./lib/averageSelectorScope.ts";
import { cleanup } from "./lib/cleanup.ts";
import {
  numberOfAttributesDefinedPerRuleBlock,
  numberOfCohesiveRuleBlocks,
  numberOfExtendedRuleBlocks,
  numberOfRuleBlocks,
  ruleLenght
} from "./lib/complexity.ts";
import { projects } from "./lib/config.ts";
import { AfterParsed, parseProject } from "./lib/parse.ts";
import { setup } from "./lib/setup.ts";
import { universality } from "./lib/universality.ts";
import { FinalValues, prettyPrint } from "./lib/utils/latexUtils.ts";

await cleanup();
await Promise.all(projects.map(setup));
const documents = await Promise.all(projects.map(parseProject));
const finalValues: FinalValues[] = documents.filter((d): d is AfterParsed => d !== undefined).map(
  (document) => {
    const u = universality(document.css);
    const s = averageSelectorScope(document.html, document.css);
    const rl = ruleLenght(document.css);
    const norb = numberOfRuleBlocks(document.css);
    const nerb = numberOfExtendedRuleBlocks(document.css);
    const nadrb = numberOfAttributesDefinedPerRuleBlock(document.css);
    const ncrb = numberOfCohesiveRuleBlocks(document.css);
    return {
      label: document.p.label,
      u: u.toFixed(2),
      s: s.toFixed(2),
      a: Math.min(u, s).toFixed(2),
      rl: rl.toFixed(0),
      norb: norb.toFixed(0),
      nerb: nerb.toFixed(0),
      nadrb: nadrb.toFixed(2),
      ncrb: ncrb.toFixed(0),
    } satisfies FinalValues;
  },
);


prettyPrint(finalValues);
