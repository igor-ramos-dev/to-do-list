import { Container, SearchIcon, InputWrapper } from "./styles";

export default function ToDoFilters() {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <input type="text" placeholder="Buscar..." />
      </InputWrapper>

      <a href="">Todas</a>
      <a href="">Pendentes</a>
      <a href="">Concluídas</a>
      <div className="ordenar-box">
        <span>Ordenar por:</span>
        <select name="ordenar" id="ordenar">
          <option value="data">Data</option>
          <option value="nome">Nome</option>
        </select>
      </div>
    </Container>
  );
}
