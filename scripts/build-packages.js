#!/usr/bin/env node

import { execSync } from "child_process";
import { globbyStream } from "globby";

const buildPackage = (paths, options) => {
  const args = ["tsc", "--build", ...paths];
  try {
    if (options.watch) {
      args.push("-w");
    } else if (options.clean) {
      execSync(`yarn ${args.join(" ")} --clean`);
    }
    execSync(`yarn ${args.join(" ")}`);
  } catch (error) {
    if (error.stdout) {
      console.log(error.stdout.toString("utf8"));
    }
  }
};

export const buildPackages = async (options) => {
  const paths = [];
  for await (const config of globbyStream(`./packages/*/tsconfig.json`)) {
    paths.push(config);
  }
  paths.push(".storybook/tsconfig.json");
  buildPackage(paths, options);
};

buildPackages();
