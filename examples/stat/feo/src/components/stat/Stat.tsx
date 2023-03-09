import type { JSXElement } from "solid-js";

export const Stat = (): JSXElement => {
  return (
    <div class="component p-3 stat-wrapper">
      <div class="stat">
        <div class="stat-body stack gap-000">
          <p>Downloads</p>
          <p class="text-3 bold">31K</p>
          <p class="text-dark"><small>Jan 1st - Feb 1st</small></p>
        </div>
        <div class="stat-body stack gap-000">
          <p>New Users</p>
          <p class="text-3 bold">4,200</p>
          <p class="text-dark"><small>↗︎ 400 (22%)</small></p>
        </div>
        <div class="stat-body stack gap-000">
          <p>New Registers</p>
          <p class="text-3 bold">1,200</p>
          <p class="text-dark"><small>↘︎ 90 (14%)</small></p>
        </div>
      </div>
    </div>
  );
};
