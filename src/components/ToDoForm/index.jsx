import { useState } from "react";
import { Form, ButtonForm } from "./styles";

import useLocalToDo from "../../hooks/useLocalToDo";

export default function ToDoForm() {
  const [_, setToDosList] = useLocalToDo("toDos", []);
  const [toDo, setToDo] = useState("");

  function handleChangeToDo(event) {
    setToDo(event.target.value);
  }

  function handleSubmitToDo(event) {
    event.preventDefault();

    const newToDo = {
      id: crypto.randomUUID(),
      toDo,
    };

    setToDosList((prevState) => [...prevState, newToDo]);
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
