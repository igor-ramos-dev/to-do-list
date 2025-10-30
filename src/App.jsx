import GlobalStyles from "./styles/globals";

import ThemeContextProvider from "./context/Theme/ThemeContextProvider";

import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Home />
    </ThemeContextProvider>
  );
}
