import { Container } from "./styles";

export default function ToDoFilters() {
  return (
    <Container>
      <input type="text" placeholder="Buscar..." />
      <a href="">Todas</a>
      <a href="">Pendentes</a>
      <a href="">Concluídas</a>
      <span>Ordenar por:</span>
      <select name="ordenar" id="ordenar">
        <option value="data">Data</option>
        <option value="nome">Nome</option>
      </select>
    </Container>
  );
}
