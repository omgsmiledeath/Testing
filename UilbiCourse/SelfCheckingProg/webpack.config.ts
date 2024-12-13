import { BuildWebpackConfig } from "./config/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/types/IBuildOptions";
const path = require("path");

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: IBuildEnv) =>
  BuildWebpackConfig({
    mode: env.mode,
    isDev: env.mode === "development",
    paths,
  });
