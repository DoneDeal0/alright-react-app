import chalk from "chalk";

export function introMessage() {
  console.log("", "\n", chalk.yellow.bold("ALRIGHT REACT APP"));
  console.log(
    "",
    "\n",
    "Alright, alright, alright! Let's create a new React app!",
    "\n"
  );
}

export function preInstallMessage(projectName, command) {
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

export function gitMessage() {
  console.log("\n", `${chalk.yellow.bold("✓")}`, `git Instantiated`);
}

const runLine = (name) =>
  `now run ${chalk.bgYellow.black.bold(`cd ${name}`)} to have fun!`;

export function postInstallMessage(projectName, command) {
  console.log(
    "",
    "\n",
    "Project",
    chalk.yellow.bold(projectName),
    "was successfully created!",
    "\n",
    "\n",
    runLine(projectName),
    "\n",
    "\n",
    chalk.yellow.bold("DEV"),
    `: ${command} dev`,
    "\n",
    chalk.yellow.bold("BUILD"),
    `: ${command} build`,
    "\n",
    chalk.yellow.bold("STORYBOOK"),
    `: ${command} storybook`,
    "\n",
    chalk.yellow.bold("TEST"),
    `: ${command} test`,
    "\n"
  );
}
