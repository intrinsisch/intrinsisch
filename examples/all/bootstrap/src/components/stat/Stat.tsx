import type { JSXElement } from "solid-js";

type Orientation = "vertical" | "horizontal";
type Props = {
  xs?: Orientation;
  sm?: Orientation;
  md?: Orientation;
  lg?: Orientation;
  xl?: Orientation;
  xxl?: Orientation;
}

export const Stat = (props: Props): JSXElement => {

  const classList = ["stat"];
  if (props.xs) {
    classList.push(`stat-${props.xs}`);
  }
  if (props.sm) {
    classList.push(`stat-sm-${props.sm}`);
  }
  if (props.md) {
    classList.push(`stat-md-${props.md}`);
  }
  if (props.lg) {
    classList.push(`stat-lg-${props.lg}`);
  }
  if (props.xl) {
    classList.push(`stat-xl-${props.xl}`);
  }
  if (props.xxl) {
    classList.push(`stat-xxl-${props.xxl}`);
  }

  return (
    <div class="component p-3">
      <div class={classList.join(" ")}>
        <div class="stat-body">
          <p class="m-0">Downloads</p>
          <p class="m-0 fs-3 fw-bold">31K</p>
          <p class="m-0 text-secondary"><small>Jan 1st - Feb 1st</small></p>
        </div>
        <div class="stat-body">
          <p class="m-0">New Users</p>
          <p class="m-0 fs-3 fw-bold">4,200</p>
          <p class="m-0 text-secondary"><small>↗︎ 400 (22%)</small></p>
        </div>
        <div class="stat-body">
          <p class="m-0">New Registers</p>
          <p class="m-0 fs-3 fw-bold">1,200</p>
          <p class="m-0 text-secondary"><small>↘︎ 90 (14%)</small></p>
        </div>
      </div>
    </div>
  );
};
