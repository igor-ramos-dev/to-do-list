import { Item, List, Checkbox } from "./styles";
import { Pencil, Trash2 } from "lucide-react";

export default function ToDoList() {
  const toDos = ["Estudar UX", "Reunir com equipe", "Planejar relatório"];

  return (
    <List>
      {toDos.map((toDo) => {
        return (
          <Item>
            <div className="item-container">
              <Checkbox />
              <span>{toDo}</span>
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
        );
      })}
    </List>
  );
}
