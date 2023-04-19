#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import { spawnSync } from "child_process";
import which from "which";
import { createDirectoryContent } from "./create-directory-content.js";
import { postInstall } from "./post-install.js";
import { preInstall } from "./pre-install.js";

const QUESTION = [
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) {
        return true;
      }
      return "Sorry, your project name must only include letters, numbers, dashes or underscores.";
    },
  },
];

export async function createProject(directory, __dirname) {
  try {
    const answer = await inquirer.prompt(QUESTION);
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
    preInstall(projectName, command);
    const { error } = spawnSync(command, ["install"], {
      cwd: projectPath,
      stdio: "inherit",
    });
    if (error) {
      console.error(
        chalk.red.bold(
          `An error occurred while running '${command} install':`,
          error
        )
      );
    } else {
      const _command = hasYarn ? "yarn" : "npm run";
      postInstall(projectName, _command);
    }
  } catch (err) {
    console.error(chalk.red.bold("An error occurred! Here is why:", err));
  }
}
