import { Form } from "./styles";

export default function ToDoForm() {
  return (
    <Form>
      <input type="text" placeholder="Adicionar nova tarefa" />
      <button>Adicionar</button>
    </Form>
  );
}
