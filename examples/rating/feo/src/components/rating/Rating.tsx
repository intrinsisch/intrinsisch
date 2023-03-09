import type { JSXElement } from "solid-js";

type Variant = "accent";

type Props = {
  variant?: Variant;
}

export const Rating = (props: Props): JSXElement => {
  const classList = ["rating", "text-center", "component"];
  if (props.variant) {
    classList.push(`rating-${props.variant}`);
  }

  return (
    <div class={classList.join(" ")} >
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
    </div>)
}
