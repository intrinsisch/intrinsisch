import { log } from "../utils.ts";

export type FinalValues = {
  label: string;
  u: string;
  s: string;
  a: string;
  rl: string;
  norb: string;
  nerb: string;
  nadrb: string;
  ncrb: string;
}

export function prettyPrint(finalValues: FinalValues[]) {
  console.log();
  console.log();
  log("Wartbarkeit");
  console.log();

  let counter = 0;
  finalValues.forEach(({ label, u, s, a }) => {
    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }
    console.log(`${label} & ${u} & ${s} & ${a} \\\\`);
    counter++;
  });


  console.log();
  console.log();
  log("Komplexität");
  console.log();

  counter = 0;
  finalValues.forEach(({ label, rl, norb, nerb, nadrb, ncrb }) => {
    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }
    console.log(`${label} & ${rl} & ${norb} & ${nerb} & ${nadrb} & ${ncrb} \\\\`);
    counter++;
  });

  console.log();
  console.log();
}
