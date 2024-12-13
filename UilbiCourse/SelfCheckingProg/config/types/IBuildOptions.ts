export type BuildMode = "production" | "development";
export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
}

export interface IBuildOptions {
  mode: BuildMode;
  isDev: boolean;
  paths: IBuildPaths;
  port:number
}
