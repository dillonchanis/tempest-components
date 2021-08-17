import { html } from "lit-element";
import "../tempest-button.js";

export default {
  component: "tempest-button",
  title: "Button",
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      description: "Disable this control. It will not receive focus or events.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

interface ButtonProps {
  disabled?: boolean;
}

export const BaseButton = ({ disabled }: ButtonProps) =>
  html`<tempest-button ?disabled=${disabled}>Click Me!</tempest-button>`;
