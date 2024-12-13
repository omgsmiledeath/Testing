export type BuildMode = "prod" | "dev";

export interface IBuildOptions {
  mode: BuildMode;
  isDev: boolean;
}
