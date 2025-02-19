import ora from "ora";
import { spawn } from "child_process";
import which from "which";
import { promisify } from "util";
import { gitMessage } from "./output.js";

export async function installDependencies(command, projectPath) {
  return new Promise((resolve, reject) => {
    const installationProcess = spawn(command, ["install --force"], {
      cwd: projectPath,
      stdio: "ignore",
    });
    const spinner = ora("Installing dependencies...").start();
    spinner.color = "yellow";
    installationProcess.on("error", (error) => {
      spinner.fail("Failed to install dependencies");
      reject(error);
    });

    installationProcess.on("exit", () => {
      spinner.succeed("All dependencies have been installed");
      resolve();
    });
  });
}

export async function initializeGit(projectPath) {
  try {
    const hasGit = await which("git", { nothrow: true });
    if (hasGit) {
      const gitConfig = spawn("git", [
        "config",
        "--global",
        "init.defaultBranch",
        "main",
      ]);
      await promisify(gitConfig.on.bind(gitConfig))("close");
      const gitInit = spawn("git", ["init"], {
        cwd: projectPath,
        stdio: "ignore",
      });
      await promisify(gitInit.on.bind(gitInit))("close");
      gitMessage(hasGit);
    } else {
      gitMessage(hasGit);
    }
  } catch (_) {
    gitMessage(false);
  }
}
