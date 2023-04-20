import chalk from "chalk";

export function preInstall(projectName, command) {
  console.log(
    "\n",
    `${chalk.yellow.bold("✓")}`,
    `${chalk.yellow.bold(projectName)}'s files and folders have been created`,
    "\n",
    `${chalk.green.bold("✓")}`,
    `${chalk.green.bold(command)} detected`,
    "\n"
  );
}
