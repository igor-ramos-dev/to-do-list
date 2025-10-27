import { useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globals";
import themes from "./styles/themes";

import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState == "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Home selectedTheme={theme} onToggleTheme={handleToggleTheme} />
    </ThemeProvider>
  );
}

export default App;
