#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createProject } from "./tasks/create-project.js";
import { introMessage } from "./tasks/output.js";
import { isValidNodeVersion } from "./tasks/checks.js";

if (isValidNodeVersion()) {
  introMessage();
  createProject(process.cwd(), dirname(fileURLToPath(import.meta.url)));
} else {
  console.error(
    "\n",
    chalk.red.bold(
      `Alright React App requires Node 16.14.0 or higher. Your version is ${process.versions.node}.`
    ),
    "\n"
  );
}
