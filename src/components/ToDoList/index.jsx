import { Item, List, Checkbox } from "./styles";
import { Trash2, Pencil } from "lucide-react";

export default function ToDoList() {
  return (
    <List>
      <Item>
        <div className="item-container">
          <Checkbox />
          Estudar UX
        </div>
        <div className="actions">
          <Pencil />
          <Trash2 />
        </div>
      </Item>

      <Item>
        <div className="item-container">
          <Checkbox />
          Reunir equipes
        </div>
        <div className="actions">
          <Pencil />
          <Trash2 />
        </div>
      </Item>

      <Item>
        <div className="item-container">
          <Checkbox />
          Planejar relatório
        </div>
        <div className="actions">
          <Pencil />
          <Trash2 />
        </div>
      </Item>
    </List>
  );
}
