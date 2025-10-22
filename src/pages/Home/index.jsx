import { Container } from "./styles";

import Header from "../../components/Header";
import ToDoForm from "../../components/ToDoForm";
import ToDoFilters from "../../components/ToDoFilters";
import ToDoList from "../../components/ToDoList";

export default function Home() {
  return (
    <Container>
      <Header />
      <ToDoForm />
      <ToDoFilters />
      <ToDoList />
    </Container>
  );
}
