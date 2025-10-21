import GlobalStyles from "./styles/globals";
import { ThemeProvider } from "styled-components";

import themes from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <h1>Olá Mundo!</h1>
    </ThemeProvider>
  );
}

export default App;
