#!/usr/bin/env node
"use strict";
import { createProject } from "./tasks/create-project.js";
import { dirname } from "path";
import { introMessage } from "./tasks/output.js";
import { fileURLToPath } from "url";

introMessage();
createProject(process.cwd(), dirname(fileURLToPath(import.meta.url)));
