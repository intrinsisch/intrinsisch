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

type BaseValues = {
  bootstrap?: Partial<FinalValues>,
  feo?: Partial<FinalValues>
}

export function prettyPrint(finalValues: FinalValues[]) {
  console.log();
  console.log();
  log("Wartbarkeit");
  console.log();

  let counter = 0;
  const base: BaseValues = {};

  finalValues.forEach(({ label, u, s }) => {
    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }
    console.log(`${label} & ${u} & ${s} \\\\`);
    counter++;
  });

  console.log();
  console.log();
  log("Wartbarkeit 2");
  console.log();

  counter = 0;
  finalValues.forEach(({ label, a }) => {
    if (label === "Responsive: Basisprojekt") {
      base.bootstrap = { ...base.bootstrap, a }
    }
    if (label === "Intrinsic: Basisprojekt") {
      base.feo = { ...base.feo, a }
    }

    if (label.endsWith("Basisprojekt")) {
      return;
    }

    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }

    const isFeo = label.startsWith("Intr");
    const absolute: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(a) - Number(base.feo?.a)).toFixed(2)
        : (Number(a) - Number(base.bootstrap?.a)).toFixed(2);

    console.log(`${label} & ${a} & ${absolute} \\\\`);
    counter++;
  });


  console.log();
  console.log();
  log("Komplexität");
  console.log();

  counter = 0;
  finalValues.forEach(({ label, rl, norb, nerb, nadrb, ncrb }) => {
    if (label === "Responsive: Basisprojekt") {
      base.bootstrap = { ...base.bootstrap, rl, norb, nerb, nadrb, ncrb }
    }
    if (label === "Intrinsic: Basisprojekt") {
      base.feo = { ...base.feo, rl, norb, nerb, nadrb, ncrb }
    }

    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }
    console.log(`${label} & ${rl} & ${norb} & ${nerb} & ${nadrb} & ${ncrb} \\\\`);
    counter++;

  });

  console.log();
  console.log();
  log("Komplexität 2");
  console.log();

  counter = 0;
  finalValues.forEach(({ label, rl, norb, nerb, nadrb, ncrb }) => {
    if (label.endsWith("Basisprojekt")) {
      return;
    }
    if (counter % 2 === 0) {
      console.log("\\hline\\hline");
    }

    const isFeo = label.startsWith("Intr");
    const absoluteRL: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(rl) - Number(base.feo?.rl)).toFixed(0)
        : (Number(rl) - Number(base.bootstrap?.rl)).toFixed(0);

    const absoluteNORB: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(norb) - Number(base.feo?.norb)).toFixed(0)
        : (Number(norb) - Number(base.bootstrap?.norb)).toFixed(0);

    const absoluteNERB: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(nerb) - Number(base.feo?.nerb)).toFixed(0)
        : (Number(nerb) - Number(base.bootstrap?.nerb)).toFixed(0);

    const absoluteNADRB: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(nadrb) - Number(base.feo?.nadrb)).toFixed(2)
        : (Number(nadrb) - Number(base.bootstrap?.nadrb)).toFixed(2);

    const absoluteNCRB: string = label.endsWith("Basisprojekt")
      ? ""
      : isFeo
        ? (Number(ncrb) - Number(base.feo?.ncrb)).toFixed(0)
        : (Number(ncrb) - Number(base.bootstrap?.ncrb)).toFixed(0);

    console.log(`${label} & ${absoluteRL} & ${absoluteNORB} & ${absoluteNERB} & ${absoluteNADRB} & ${absoluteNCRB} \\\\`);

    counter++;
  });

  console.log();
  console.log();
}
