import which from "which";

export async function getCommand() {
  try {
    const hasYarn = await which("yarn", { nothrow: true });
    if (hasYarn) return "yarn";
    if (process.platform === "win32") return "npm.cmd";
    return "npm";
  } catch (err) {
    throw new Error(err);
  }
}

export function isValidNodeVersion() {
  const version = process.versions.node;
  if (!version) {
    return false;
  }
  const nodeNumber = Number(version.split(".").splice(0, 2).join("."));
  if (nodeNumber < 16.14) {
    return false;
  }
  return true;
}
