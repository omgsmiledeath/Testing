import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildConfig/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/buildConfig/types/config";
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev,
    port: PORT,
  });
  return config;
};
