import chalk from "chalk";

const runLine = (name) =>
  `now run ${chalk.bgYellow.black.bold(`cd ${name}`)} to get some fun!`;

export function postInstall(projectName, command) {
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
    "\n",
    "\n",
    "Have a pleasant coding!",
    "\n"
  );
}
