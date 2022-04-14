#!/usr/bin/env node
"use strict";
import fs from "fs";
import os from "os";

function writePackageJSON(writePath, fileContent, projectName) {
  const userName = os.userInfo().username || "";
  const parsedJSON = JSON.parse(fileContent);
  parsedJSON.name = projectName;
  parsedJSON.author = userName;
  const updatedJSON = JSON.stringify(parsedJSON, null, 4);
  return fs.writeFileSync(writePath, updatedJSON, "utf8");
}

export function createDirectoryContent(
  templatePath,
  newPath,
  projectName,
  directory
) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach((file) => {
    console.log("file", file);
    const currentPath = `${templatePath}/${file}`;
    const fileType = fs.statSync(currentPath);
    if (fileType.isFile()) {
      const fileContent = fs.readFileSync(currentPath, "utf8");
      const writePath = `${directory}/${newPath}/${file}`;
      if (file === "package.json") {
        return writePackageJSON(writePath, fileContent, projectName);
      }
      if (file === "env" || file === "gitignore") {
        const dotPath = `${directory}/${newPath}/.${file}`;
        return fs.writeFileSync(dotPath, fileContent, "utf8");
      }
      return fs.writeFileSync(writePath, fileContent, "utf8");
    }
    if (fileType.isDirectory()) {
      fs.mkdirSync(`${directory}/${newPath}/${file}`);
      return createDirectoryContent(
        `${templatePath}/${file}`,
        `${newPath}/${file}`,
        projectName,
        directory
      );
    }
    return null;
  });
}
