import { Container } from "./styles";

import Header from "../../components/Header";
import ToDoForm from "../../components/ToDoForm";
import ToDoFilters from "../../components/ToDoFilters";
import ToDoList from "../../components/ToDoList";

import { ToDoProvider } from "../../context/ToDos/ToDoProvider";

export default function Home() {
  return (
    <Container>
      <ToDoProvider>
        <Header />
        <ToDoForm />
        <ToDoFilters />
        <ToDoList />
      </ToDoProvider>
    </Container>
  );
}
