#!/usr/bin/env node
"use strict";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { getCommand } from "./checks.js";
import { createDirectoryContent } from "./create-directory-content.js";
import { installDependencies, initializeGit } from "./installation.js";
import { errorMessage, preInstallMessage, postInstallMessage } from "./output.js";
import { question } from "./question.js";

export async function createProject(directory, __dirname) {
  try {
    const answer = await inquirer.prompt(question);
    const projectName = answer["project-name"];
    const templatePath = `${__dirname}/template`;
    const projectPath = path.join(directory, projectName);
    fs.mkdirSync(projectPath);
    await createDirectoryContent(
      templatePath,
      projectName,
      projectName,
      directory
    );
    process.chdir(projectPath);
    const command = await getCommand();
    preInstallMessage(projectName, command);
    await initializeGit(projectPath);
    await installDependencies(command, projectPath);
    postInstallMessage(projectName, "npm");
  } catch (err) {
    errorMessage(err)
  }
}
