#!/usr/bin/env node
"use strict";
import { createProject } from "./tasks/create-project.js";
import { dirname } from "path";
import { displayIntroMessage } from "./tasks/intro-message.js";
import { fileURLToPath } from "url";

displayIntroMessage();
createProject(process.cwd(), dirname(fileURLToPath(import.meta.url)));
