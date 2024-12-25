export type Mod = Record<string, boolean | string>;
export function classNames(
  main: string,
  mods: Mod,
  additional: [string]
): string {
  return [
    main,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}
