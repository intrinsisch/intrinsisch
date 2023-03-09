import type { JSXElement } from "solid-js";

type Variant = "warning" | "dark";
type Size = "2" | "3" | "4";

type Props = {
  variant?: Variant;
  xs?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
  xxl?: Size;
}

export const Rating = (props: Props): JSXElement => {
  const classList = ["rating", "text-center"];
  if (props.variant) {
    classList.push(`rating-${props.variant}`);
  }
  if (props.xs) {
    classList.push(`rating-${props.xs}`);
    classList.push(`p-${props.xs}`);
  } else {
    classList.push("p-2");
  }
  if (props.sm) {
    classList.push(`rating-sm-${props.sm}`);
    classList.push(`p-sm-${props.sm}`);
  }
  if (props.md) {
    classList.push(`rating-md-${props.md}`);
    classList.push(`p-md-${props.md}`);
  }
  if (props.lg) {
    classList.push(`rating-lg-${props.lg}`);
    classList.push(`p-lg-${props.lg}`);
  }
  if (props.xl) {
    classList.push(`rating-xl-${props.xl}`);
    classList.push(`p-xl-${props.xl}`);
  }
  if (props.xxl) {
    classList.push(`rating-xxl-${props.xxl}`);
    classList.push(`p-xxl-${props.xxl}`);
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
