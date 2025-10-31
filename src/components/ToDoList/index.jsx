import { useContext } from "react";

import { Item, List, Checkbox, Button } from "./styles";
import { Pencil, Trash2 } from "lucide-react";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

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
            <Button className="edit-button">
              <Pencil />
            </Button>
            <Button className="delete-button">
              <Trash2 />
            </Button>
          </div>
        </Item>
      ))}
    </List>
  );
}
