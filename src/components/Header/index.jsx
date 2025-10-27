import { Container, CheckBox, Label, Slider } from "./styles";

export default function Header({ selectedTheme, onToggleTheme }) {
  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Label>
        <CheckBox type="checkbox" onClick={() => onToggleTheme()} />
        <Slider $selectedTheme={selectedTheme}></Slider>
      </Label>
    </Container>
  );
}
