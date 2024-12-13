import { BuildWebpackConfig } from "./config/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/types/IBuildOptions";
const path = require("path");

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};


export default (env: IBuildEnv) =>{
  const mode = env.mode ?? "development";
  const isDev = mode === "development"; 
return BuildWebpackConfig({
  mode: mode,
  isDev: isDev,
  paths,
  port: env.port ?? 3000,
});
}
  
