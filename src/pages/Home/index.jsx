import { Container } from "./styles";

import Header from "../../components/Header";
import ToDoForm from "../../components/ToDoForm";
import ToDoFilters from "../../components/ToDoFilters";
import ToDoList from "../../components/ToDoList";

export default function Home({ selectedTheme, onToggleTheme }) {
  return (
    <Container>
      <Header selectedTheme={selectedTheme} onToggleTheme={onToggleTheme} />
      <ToDoForm />
      <ToDoFilters />
      <ToDoList />
    </Container>
  );
}
