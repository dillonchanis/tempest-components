#!/usr/bin/env node

import { buildPackages } from "./build-packages.js";

async function buildPackagesClean() {
  await buildPackages({ clean: true });
}

buildPackagesClean();
