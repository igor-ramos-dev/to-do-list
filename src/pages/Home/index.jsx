import { Container } from "./styles";

import Header from "../../components/Header";
import ToDoForm from "../../components/ToDoForm";
import ToDoFilters from "../../components/ToDoFilters";
import ToDoList from "../../components/ToDoList";

import { ToDoProvider } from "../../context/ToDos/ToDoProvider";
import { useCallback, useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("todas");
  const [searchToDo, setSearchToDo] = useState("");

  const handleChangeFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  function handleSearchToDo(e) {
    setSearchToDo(e.target.value);
  }

  return (
    <Container>
      <ToDoProvider>
        <Header />
        <ToDoForm />
        <ToDoFilters
          searchToDo={searchToDo}
          onSearchToDo={handleSearchToDo}
          onChangeFilter={handleChangeFilter}
        />
        <ToDoList activeFilter={activeFilter} searchToDo={searchToDo} />
      </ToDoProvider>
    </Container>
  );
}
