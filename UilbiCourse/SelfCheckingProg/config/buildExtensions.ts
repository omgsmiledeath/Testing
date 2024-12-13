import webpack from "webpack";

export function buildExtensions(): webpack.ResolveOptions {
  return { extensions: [".tsx", ".ts", ".js"] };
}
