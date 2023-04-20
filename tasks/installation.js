import ora from "ora";
import { spawn } from "child_process";

export async function installDependencies(command, projectPath) {
  return new Promise((resolve, reject) => {
    const installationProcess = spawn(command, ["install"], {
      cwd: projectPath,
      stdio: "pipe",
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
