#!/usr/bin/env node
"use strict";
import fs from "fs";

export function createDirectoryContent(
  templatePath,
  newPath,
  projectName,
  directory
) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach((file) => {
    const currentPath = `${templatePath}/${file}`;
    const fileType = fs.statSync(currentPath);
    if (fileType.isFile()) {
      const fileContent = fs.readFileSync(currentPath, "utf8");
      const writePath = `${directory}/${newPath}/${file}`;
      if (file === "package.json") {
        const parsedJSON = JSON.parse(fileContent);
        parsedJSON.name = projectName;
        const updatedJSON = JSON.stringify(parsedJSON, null, 4);
        return fs.writeFileSync(writePath, updatedJSON, "utf8");
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
