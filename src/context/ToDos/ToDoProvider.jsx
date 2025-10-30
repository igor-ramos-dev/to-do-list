import { ToDoContext } from "./ToDoContext";

import useLocalToDo from "../../hooks/useLocalToDo";

export function ToDoProvider(props) {
  const [toDos, setToDos] = useLocalToDo("toDos", []);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {props.children}
    </ToDoContext.Provider>
  );
}
