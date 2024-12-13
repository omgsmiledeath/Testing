import { IBuildOptions } from "./types/IBuildOptions";
import webpack from "webpack";
import { buildExtensions } from "./buildExtensions";
import { buildLoaders } from "./buildLoaders";
import {} from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";

export function BuildWebpackConfig(
  options: IBuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    resolve: buildExtensions(),
    module: buildLoaders(options),
    plugins: buildPlugins(options)
  };
}
