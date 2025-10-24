import { useState } from "react";
import { Container, CheckBox, Label, Slider } from "./styles";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheck() {
    setIsChecked((prevState) => (prevState == false ? true : false));
  }

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Label>
        <CheckBox type="checkbox" onChange={() => handleToggleCheck()} />
        <Slider $isChecked={isChecked}></Slider>
      </Label>
    </Container>
  );
}
