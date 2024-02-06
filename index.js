#!/usr/bin/env node
"use strict";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createProject } from "./tasks/create-project.js";
import { nodeErrorMessage, introMessage } from "./tasks/output.js";
import { isValidNodeVersion } from "./tasks/checks.js";

if (isValidNodeVersion()) {
  introMessage();
  createProject(process.cwd(), dirname(fileURLToPath(import.meta.url)));
} else {
  nodeErrorMessage();
}
