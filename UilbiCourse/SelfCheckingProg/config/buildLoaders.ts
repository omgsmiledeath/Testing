import { IBuildOptions } from "./types/IBuildOptions";
import webpack from "webpack";

export function buildLoaders(options: IBuildOptions): webpack.ModuleOptions {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return {
    rules: [tsLoader],
  };
}
