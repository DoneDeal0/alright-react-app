import chalk from "chalk";

const runLine = (name) =>
  `now run ${chalk.bgYellow.black.bold(
    `cd ${name} && yarn install`
  )} to get some fun!`;

export function postInstall(projectName) {
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
    chalk.yellow.bold("START"),
    ": yarn dev",
    "\n",
    chalk.yellow.bold("BUILD"),
    ": yarn build",
    "\n",
    chalk.yellow.bold("STORYBOOK"),
    ": yarn storybook",
    "\n",
    chalk.yellow.bold("TEST"),
    ": yarn test",
    "\n",
    "\n",
    "Have a pleasant coding!",
    "\n"
  );
}
