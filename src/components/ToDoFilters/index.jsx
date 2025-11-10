import {
  Container,
  SearchIcon,
  InputWrapper,
  Button,
  SelectWrapper,
} from "./styles";

import { Input } from "../Input";

export default function ToDoFilters({ onChangeFilter }) {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <Input className="search-toDo" type="text" placeholder="Buscar..." />
      </InputWrapper>

      <Button onClick={() => onChangeFilter("todas")}>Todas</Button>
      <Button onClick={() => onChangeFilter("pendentes")}>Pendentes</Button>
      <Button onClick={() => onChangeFilter("concluídas")}>Concluídas</Button>
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
