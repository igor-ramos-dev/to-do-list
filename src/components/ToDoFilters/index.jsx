import {
  Container,
  SearchIcon,
  InputWrapper,
  Button,
  SelectWrapper,
} from "./styles";

export default function ToDoFilters() {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <input type="text" placeholder="Buscar..." />
      </InputWrapper>

      <Button>Todas</Button>
      <Button>Pendentes</Button>
      <Button>Concluídas</Button>
      <SelectWrapper>
        <span>Ordenar por:</span>
        <select>
          <option value="data">Data</option>
          <option value="nome">Nome</option>
        </select>
      </SelectWrapper>
    </Container>
  );
}
