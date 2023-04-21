#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import which from "which";
import { createDirectoryContent } from "./create-directory-content.js";
import { installDependencies, initializeGit } from "./installation.js";
import { preInstallMessage, postInstallMessage } from "./output.js";
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
    const hasYarn = await which("yarn", { nothrow: true });
    const command = hasYarn ? "yarn" : "npm";
    preInstallMessage(projectName, command);
    await initializeGit(projectPath);
    await installDependencies(command, projectPath);
    const _command = hasYarn ? "yarn" : "npm run";
    postInstallMessage(projectName, _command);
  } catch (err) {
    console.error(chalk.red.bold("The following error occurred:", err));
  }
}
