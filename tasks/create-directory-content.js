#!/usr/bin/env node
"use strict";
import fs from "fs";
import os from "os";

async function writePackageJSON(path, fileContent, projectName) {
  const userName = os.userInfo().username || "";
  const parsedJSON = JSON.parse(fileContent);
  parsedJSON.name = projectName;
  parsedJSON.author = userName;
  const updatedJSON = JSON.stringify(parsedJSON, null, 4);
  return fs.writeFileSync(path, updatedJSON, "utf8");
}

async function createFile(srcPath, destPath, fileName, projectName) {
  const fileContent = fs.readFileSync(srcPath, "utf8");
  if (fileName === "package.json") {
    writePackageJSON(destPath, fileContent, projectName);
  } else if (fileName === "env" || fileName === "gitignore") {
    const dotPath = `${destPath.replace(fileName, `.${fileName}`)}`;
    fs.writeFileSync(dotPath, fileContent, "utf8");
  } else {
    fs.writeFileSync(destPath, fileContent, "utf8");
  }
}

export async function createDirectoryContent(
  templatePath,
  newPath,
  projectName,
  directory
) {
  try {
    const filesToCreate = fs.readdirSync(templatePath);

    for (const file of filesToCreate) {
      const currentPath = `${templatePath}/${file}`;
      const fileType = fs.statSync(currentPath);

      if (fileType.isFile()) {
        await createFile(
          currentPath,
          `${directory}/${newPath}/${file}`,
          file,
          projectName
        );
      }

      if (fileType.isDirectory()) {
        fs.mkdirSync(`${directory}/${newPath}/${file}`);
        await createDirectoryContent(
          currentPath,
          `${newPath}/${file}`,
          projectName,
          directory
        );
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}
