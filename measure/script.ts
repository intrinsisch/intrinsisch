import { averageSelectorScope } from "./lib/averageSelectorScope.ts";
import { cleanup } from "./lib/cleanup.ts";
import {
  entropyMetric,
  numberOfAttributesDefinedPerRuleBlock,
  numberOfCohesiveRuleBlocks,
  numberOfExtendedRuleBlocks,
  numberOfRuleBlocks,
  ruleLenght,
} from "./lib/complexity.ts";
import { projects } from "./lib/config.ts";
import { AfterParsed, parseProject } from "./lib/parse.ts";
import { setup } from "./lib/setup.ts";
import { universality } from "./lib/universality.ts";

await cleanup();
await Promise.all(projects.map(setup));
const documents = await Promise.all(projects.map(parseProject));
documents.filter((d): d is AfterParsed => d !== undefined).forEach(
  (document) => {
    const u = universality(document.css);
    const s = averageSelectorScope(document.html, document.css);
    const rl = ruleLenght(document.css);
    const norb = numberOfRuleBlocks(document.css);
    const e = entropyMetric(document.css);
    const nerb = numberOfExtendedRuleBlocks(document.css);
    const nadrb = numberOfAttributesDefinedPerRuleBlock(document.css);
    const ncrb = numberOfCohesiveRuleBlocks(document.css);
    console.log({
      proj: document.p.label,
      u,
      s,
      a: Math.min(u, s),
      rl,
      norb,
      e,
      nerb,
      nadrb,
      ncrb,
    });
  },
);
