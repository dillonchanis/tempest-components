#!/usr/bin/env node

import { buildPackages } from "./build-packages.js";

async function watchPackages() {
  await buildPackages({ watch: true });
}

watchPackages();
