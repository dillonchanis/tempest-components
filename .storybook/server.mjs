import { fromRollup } from "@web/dev-server-rollup";
import rollupJson from "@rollup/plugin-json";
import { storybookPlugin } from "@web/dev-server-storybook";

const json = fromRollup(rollupJson);

export default {
  nodeResolve: true,
  watch: true,
  open: true,
  mimeTypes: {
    "**/*.json": "js",
  },
  plugins: [json(), storybookPlugin({ type: "web-components" })],
};
