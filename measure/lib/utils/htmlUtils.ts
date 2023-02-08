import { Element, HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";

export type CustomElement = {
    name: string;
    classList: string[];
    children: CustomElement[];
}

export function getCleanElements(html: HTMLDocument): CustomElement {
    const body = html.body;
    return {
        name: "body",
        classList: getClassList(body),
        children: [...body.children].map(toCleanElement)
    }
}

function toCleanElement(el: Element): CustomElement {
    return {
        name: el.localName,
        classList: getClassList(el),
        children: [...el.children].map(toCleanElement)
    }
}

export function getNumberOfElements(element: CustomElement): number {
    return 1 + element.children.map(getNumberOfElements).reduce(sum, 0)
}

function getClassList(el: Element): string[] {
    return [...el.classList];
}

function sum(acc: number, curr: number): number {
    return (acc + curr);
}
