#!/usr/bin/env node
"use strict";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { displayIntroMessage } from "./tasks/intro-message.js";
import { createProject } from "./tasks/create-project.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CURRENT_DIRECTORY = process.cwd();

displayIntroMessage();
createProject(CURRENT_DIRECTORY, __dirname);
