import { IBuildOptions } from "./types/IBuildOptions";
import webpack from "webpack";
import { buildExtensions } from "./buildExtensions";
import { buildLoaders } from "./buildLoaders";

export function BuildWebpackConfig(
  options: IBuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    devtool: "inline-source-map",
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    resolve: buildExtensions(),
    module: buildLoaders(options),
  };
}
