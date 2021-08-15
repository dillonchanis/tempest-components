import { html, property, LitElement, TemplateResult } from "lit-element";

type ButtonType = "default" | "primary" | "secondary";

export class TempestButton extends LitElement {
  @property({ type: String }) type: ButtonType = "default";
  @property({ type: Boolean, reflect: true }) disabled = false;

  render(): TemplateResult {
    return html`
      <button ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}
