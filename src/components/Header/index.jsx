import { Container, CheckBox, Label, Slider } from "./styles";
import { useContext } from "react";

import { ThemeContext } from "../../context/Theme/ThemeContext";

export default function Header() {
  const { currentTheme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Label>
        <CheckBox type="checkbox" onChange={onToggleTheme} />
        <Slider $currentTheme={currentTheme}></Slider>
      </Label>
    </Container>
  );
}
