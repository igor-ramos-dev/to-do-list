import { Item, List, Checkbox } from "./styles";

import { Pencil, Trash2 } from "lucide-react";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

import { useContext } from "react";

export default function ToDoList() {
  const { toDos } = useContext(ToDoContext);

  return (
    <List>
      {toDos.map((toDo) => (
        <Item key={toDo.id}>
          <div className="item-container">
            <Checkbox />
            <span>{toDo.toDo}</span>
          </div>
          <div className="actions">
            <a href="">
              <Pencil />
            </a>
            <a href="">
              <Trash2 />
            </a>
          </div>
        </Item>
      ))}
    </List>
  );
}
