import GlobalStyles from "./styles/globals";
import { ThemeProvider } from "styled-components";

import themes from "./styles/themes";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
