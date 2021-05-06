import { allElements } from "../util/all-element";

export type StyleKey =
  | "github"
  | "dark"
  | "a11y-dark"
  | "a11y-light"
  | "default"
  | "agate"
  | "arta"
  | "atelier-cave-dark"
  | "atelier-estuary-light"
  | "atom-one-dark"
  | "color-brewer"
  | "dracula"
  | "docco"
  | "hopscotch"
  | "lightfair"
  | "night-owl"
  | "nord"
  | "ocean"
  | "rainbow";

const styles: StyleKey[] = allElements<StyleKey>()([
  "github",
  "dark",
  "a11y-dark",
  "a11y-light",
  "default",
  "agate",
  "arta",
  "atelier-cave-dark",
  "atelier-estuary-light",
  "atom-one-dark",
  "color-brewer",
  "dracula",
  "docco",
  "hopscotch",
  "lightfair",
  "night-owl",
  "nord",
  "ocean",
  "rainbow",
]);

export const isValidSyntaxKey = (data: unknown): data is StyleKey => {
  return styles.includes(data as StyleKey);
};
