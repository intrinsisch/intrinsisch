import type { JSXElement} from "solid-js";

export const Footer = (props: { darkBg: boolean }): JSXElement => {
  return (
    <div>
      <small>
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Privatsphäre
        </a>{" "}
        &#8231;{" "}
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Nutzungsbedingungen
        </a>{" "}
        &#8231;{" "}
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Werbung
        </a>{" "}
        &#8231;{" "}
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Datenschutzinfo
        </a>{" "}
        &#8231;{" "}
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Cookies
        </a>{" "}
        &#8231;{" "}
        <a href="" class={props.darkBg ? "link-light" : ""}>
          Social&nbsp;Media © 2023
        </a>
      </small>
    </div>
  );
};
