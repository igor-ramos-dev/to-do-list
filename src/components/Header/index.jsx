import { useState } from "react";
import { Container, CheckBox, Label, Slider } from "./styles";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  function handleToggleCheck() {
    setIsChecked((prevState) => {
      return prevState == false ? true : false;
    });
  }

  return (
    <Container>
      <h1>Minhas Tarefas</h1>
      <Label>
        <CheckBox onChange={() => handleToggleCheck()} type="checkbox" />
        <Slider $isChecked={isChecked} className="round"></Slider>
      </Label>
    </Container>
  );
}
