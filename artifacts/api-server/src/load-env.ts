import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

const envPaths = [
  resolve(process.cwd(), ".env"),
  resolve(process.cwd(), "../../.env"),
].filter((path) => existsSync(path));

const shouldOverrideWithDotEnv = process.env["NODE_ENV"] !== "production";

for (const path of envPaths) {
  config({ path, override: shouldOverrideWithDotEnv });
}
