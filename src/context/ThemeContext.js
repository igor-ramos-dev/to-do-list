import { createContext } from "react";

import themes from "../styles/themes";

export const ThemeContext = createContext({
  selectedTheme: "light",
  currentTheme: themes.light,
  onToggleTheme: () => {},
});
