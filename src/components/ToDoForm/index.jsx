import { useContext, useState } from "react";
import { Form, ButtonForm, SearchWrapper } from "./styles";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const { _, setToDos } = useContext(ToDoContext);
  const [inputFormError, setInputFormError] = useState("");

  function handleAddToDo(event) {
    setToDo(event.target.value);

    if (event.target.value.length > 0) return setInputFormError("");
  }

  function handleSubmitToDo(event) {
    event.preventDefault();

    if (!toDo) return setInputFormError("Adicione uma tarefa!");

    const newToDo = {
      id: crypto.randomUUID(),
      name: toDo,
      completed: false,
    };

    setToDos((prevState) => [...prevState, newToDo]);
    setToDo("");
  }

  return (
    <Form onSubmit={handleSubmitToDo}>
      <SearchWrapper>
        <input
          id="new-toDo"
          type="text"
          placeholder="Adicionar nova tarefa"
          value={toDo}
          onChange={handleAddToDo}
        />
        {inputFormError && <label htmlFor="new-toDo">{inputFormError}</label>}
      </SearchWrapper>
      <ButtonForm>Adicionar</ButtonForm>
    </Form>
  );
}
