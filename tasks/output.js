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
    `${chalk.yellow.bold("✓")}`,
    `${chalk.yellow.bold(command)} detected`
  );
}

export function gitMessage(hasGit) {
  if (hasGit) {
    console.log(
      `${chalk.yellow.bold(" ✓")}`,
      `${chalk.yellow.bold("git")} initialized`,
      "\n"
    );
  } else {
    console.log(
      `${chalk.red.bold(" ×")}`,
      `${chalk.red.bold("git")} couldn't be initialized`,
      "\n"
    );
  }
}

const runLine = (name) =>
  `now run ${chalk.bgYellow.black.bold(`cd ${name}`)} to get started!`;

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


export function errorMessage(error) {
  console.error(chalk.red.bold("The following error occurred:", error));
}

export function nodeErrorMessage() {
  console.error(
    "\n",
    chalk.red.bold(
      `Meltwater app boilerplate requires Node 18.0.0 or higher. Your version is ${process.versions.node}.`
    ),
    "\n"
  );
}