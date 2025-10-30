import { useContext, useState } from "react";
import { Form, ButtonForm } from "./styles";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const { setToDos } = useContext(ToDoContext);

  function handleChangeToDo(event) {
    setToDo(event.target.value);
  }

  function handleSubmitToDo(event) {
    event.preventDefault();

    const newToDo = {
      id: crypto.randomUUID(),
      toDo,
    };

    setToDos((prevState) => [...prevState, newToDo]);
    setToDo("");
  }

  return (
    <Form onSubmit={handleSubmitToDo}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={toDo}
        onChange={handleChangeToDo}
      />
      <ButtonForm>Adicionar</ButtonForm>
    </Form>
  );
}
