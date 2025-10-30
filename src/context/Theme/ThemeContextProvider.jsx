import { useState, useMemo } from "react";
import { ThemeProvider as StyledCompThemeProvider } from "styled-components";

import themes from "../../styles/themes";

import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  const contextValue = useMemo(
    () => ({
      currentTheme: theme,
      onToggleTheme: handleToggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledCompThemeProvider theme={currentTheme}>
        {children}
      </StyledCompThemeProvider>
    </ThemeContext.Provider>
  );
}
