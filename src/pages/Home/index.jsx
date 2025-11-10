import { Container } from "./styles";

import Header from "../../components/Header";
import ToDoForm from "../../components/ToDoForm";
import ToDoFilters from "../../components/ToDoFilters";
import ToDoList from "../../components/ToDoList";

import { ToDoProvider } from "../../context/ToDos/ToDoProvider";
import { useCallback, useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("todas"); // 'todas' | 'pendentes' | 'concluídas'

  console.log(activeFilter);

  const handleChangeFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  return (
    <Container>
      <ToDoProvider>
        <Header />
        <ToDoForm />
        <ToDoFilters onChangeFilter={handleChangeFilter} />
        <ToDoList />
      </ToDoProvider>
    </Container>
  );
}
