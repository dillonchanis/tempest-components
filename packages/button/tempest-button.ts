import { TempestButton } from "./src/Button.js";

customElements.define("tempest-button", TempestButton);

declare global {
  interface HTMLElementTagNameMap {
    "tempest-button": TempestButton;
  }
}
