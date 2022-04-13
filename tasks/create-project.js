#!/usr/bin/env node
"use strict";
import inquirer from "inquirer";
import fs from "fs";
import { postInstall } from "./post-install.js";
import { createDirectoryContent } from "./create-directory-content.js";

export const QUESTION = [
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

export function createProject(directory, __dirname) {
  return inquirer
    .prompt(QUESTION)
    .then((answer) => {
      const projectName = answer["project-name"];
      const templatePath = `${__dirname}/template`;
      console;
      fs.mkdirSync(`${directory}/${projectName}`);
      createDirectoryContent(templatePath, projectName, projectName, directory);
      return projectName;
    })
    .then((name) => postInstall(name))
    .catch((err) => console.error("An error occured! Here is why:", err));
}
