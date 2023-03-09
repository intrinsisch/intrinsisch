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
};

export const Chat = (props: Props): JSXElement => {
  return (
    <div class="chat component">
      <p class="chat-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Quia, mollitia ab eius quisquam reprehenderit vitae doloremque.
      </p>
      <p class="chat-end">
        Soluta sed aliquid qui esse molestias dignissimos animi alias deleniti, rem, <br />
        iusto, maxime eum! Repellendus, eveniet autem odio harum dolorum sint possimus.
      </p>
      <p class="chat-end">
        Maxime quis ipsa in! Quos culpa, et repudiandae, atque magni quibusdam harum architecto veritatis commodi beatae ullam sequi maxime corrupti totam earum?
      </p>
    </div>
  );
};
