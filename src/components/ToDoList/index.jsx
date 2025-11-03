import { useContext, useState } from "react";

import { Input } from "../Input";
import { Item, List, Checkbox, Button } from "./styles";
import { Pencil, Trash2, X } from "lucide-react";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoList() {
  const { toDos, setToDos } = useContext(ToDoContext);
  const [renamedToDo, setRenamedToDo] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleToEditToDo(toDo) {
    setEditingId(toDo.id);
  }

  function handleRenameToDo(event) {
    setRenamedToDo(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setToDos((prev) =>
        prev.map((toDo) =>
          toDo.id === editingId ? { ...toDo, name: renamedToDo } : toDo
        )
      );

      setEditingId(null);
      setRenamedToDo("");
    } else {
      return;
    }
  }

  function handleDeleteToDo(id) {
    setToDos((prevState) => prevState.filter((toDo) => toDo.id !== id));
  }

  return (
    <List>
      {toDos.map((toDo) => (
        <Item key={toDo.id}>
          <div className="item-container">
            <Checkbox />

            {editingId === toDo.id ? (
              <Input
                type="text"
                placeholder="Renomear tarefa..."
                value={renamedToDo}
                onChange={(event) => handleRenameToDo(event)}
                onKeyDown={(event) => handleKeyDown(event)}
              />
            ) : (
              <span>{toDo.name}</span>
            )}
          </div>
          <div className="actions">
            <Button
              className="edit-button"
              onClick={() => handleToEditToDo(toDo)}
              $isEditing={toDo.isEditing}
            >
              {editingId === toDo.id ? <X /> : <Pencil />}
            </Button>
            <Button
              className="delete-button"
              onClick={() => handleDeleteToDo(toDo.id)}
            >
              <Trash2 />
            </Button>
          </div>
        </Item>
      ))}
    </List>
  );
}
