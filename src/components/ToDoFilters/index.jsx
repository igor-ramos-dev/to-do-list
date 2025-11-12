import {
  Container,
  SearchIcon,
  InputWrapper,
  Button,
  SelectWrapper,
} from "./styles";

import { InputSearch } from "../InputSearch";

export default function ToDoFilters({
  onChangeFilter,
  onSearchToDo,
  searchToDo,
}) {
  return (
    <Container>
      <InputWrapper>
        <SearchIcon />
        <InputSearch
          value={searchToDo}
          onChange={onSearchToDo}
          className="search-toDo"
          type="text"
          placeholder="Buscar..."
        />
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
