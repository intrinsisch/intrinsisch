import { Element, HTMLDocument } from "https://deno.land/x/deno_dom@v0.1.36-alpha/deno-dom-wasm.ts";
import { sum } from "./listUtils.ts";

export type CustomElement = {
    name: string;
    element: Element;
    classList: string[];
    children: CustomElement[];
}

export function getCleanElements(html: HTMLDocument): CustomElement {
    const body = html.body;
    return {
        name: "body",
        element: body,
        classList: getClassList(body),
        children: [...body.children].map(toCleanElement)
    }
}

function toCleanElement(el: Element): CustomElement {
    return {
        name: el.localName,
        element: el,
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
