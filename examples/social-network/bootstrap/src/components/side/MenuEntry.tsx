import type { JSXElement} from "solid-js";

export const MenuEntry = (props: {
  icon: string;
  label: string;
}): JSXElement => {
  return (
    <h4 class="mt-4">
      <a href="#" class="fw-bold text-light text-decoration-none">
        <i class={`fa-solid ${props.icon}`}></i>
        <span class="d-none d-sm-inline"> {props.label}</span>
      </a>
    </h4>
  );
};
