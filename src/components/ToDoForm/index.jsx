import { useContext, useState } from "react";
import { Form, ButtonForm, SearchWrapper } from "./styles";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoForm() {
  const [toDo, setToDo] = useState("");
  const { toDos, setToDos } = useContext(ToDoContext);
  const [inputFormError, setInputFormError] = useState("");

  function handleAddToDo(event) {
    setToDo(event.target.value);

    if (event.target.value.length > 0) return setInputFormError("");
  }

  function handleSubmitToDo(event) {
    event.preventDefault();

    // Verifica se o campo de tarefa está vazio
    if (!toDo) return setInputFormError("Adicione uma tarefa!");

    // Verifica se a tarefa já existe
    // Retorna mensagem de erro caso exista
    const toDoAlreadyExists = toDos.find((toDoItem) => toDoItem.name === toDo);
    if (toDoAlreadyExists) return setInputFormError("Essa tarefa já existe!");

    // Cria a nova tarefa
    // E a insere na lista de tarefas
    const newToDo = {
      id: crypto.randomUUID(),
      name: toDo,
      completed: false,
    };
    setToDos((prevState) => [...prevState, newToDo]);

    // Esvazia o campo de adicionar tarefa
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
