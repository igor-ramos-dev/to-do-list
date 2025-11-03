import {
  Container,
  SearchIcon,
  InputWrapper,
  Button,
  SelectWrapper,
} from "./styles";

import { Input } from "../Input";

export default function ToDoFilters() {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input className="search-toDo" type="text" placeholder="Buscar..." />
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
