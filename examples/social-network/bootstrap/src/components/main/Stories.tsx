import type { JSX } from "solid-js";

export const Stories = (): JSX.Element => {
  return (
    <div class="row gap-0">
      <div class="col-auto text-center">
        <img
          width="48"
          height="48"
          src="https://source.unsplash.com/48x48/?portrait"
          class="rounded-circle border border-primary"
          alt="Kenya"
        />
        <h2 class="fs-6">
          <small>Kenya</small>
        </h2>
      </div>
      <div class="col-auto text-center">
        <img
          width="48"
          height="48"
          src="https://source.unsplash.com/48x48/?portrait&2"
          class="rounded-circle border border-warning"
          alt="Delaney"
        />
        <h2 class="fs-6">
          <small>Delaney</small>
        </h2>
      </div>
      <div class="col-auto text-center">
        <img
          width="48"
          height="48"
          src="https://source.unsplash.com/48x48/?portrait&3"
          class="rounded-circle border border-info"
          alt="Jan"
        />
        <h2 class="fs-6">
          <small>Jan</small>
        </h2>
      </div>
      <div class="col-auto text-center">
        <img
          width="48"
          height="48"
          src="https://source.unsplash.com/48x48/?portrait&4"
          class="rounded-circle border border-danger"
          alt="Kian"
        />
        <h2 class="fs-6">
          <small>Kian</small>
        </h2>
      </div>
    </div>
  );
};
