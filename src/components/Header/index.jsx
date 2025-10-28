import { Container, CheckBox, Label, Slider } from "./styles";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

export default function Header() {
  const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Label>
        <CheckBox type="checkbox" onChange={onToggleTheme} />
        <Slider $selectedTheme={selectedTheme}></Slider>
      </Label>
    </Container>
  );
}
