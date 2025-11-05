import { useContext, useEffect, useRef, useState } from "react";

import { Input } from "../Input";
import { Item, List, Checkbox, Button } from "./styles";
import { Pencil, Trash2, X } from "lucide-react";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoList() {
  const { toDos, setToDos } = useContext(ToDoContext);
  const [renameToDo, setRenameToDo] = useState("");
  const [editingId, setEditingId] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (editingId !== null) inputRef.current?.focus();
  }, [editingId]);

  function handleEditToDo(toDo) {
    setEditingId(toDo.id);
    setRenameToDo(toDo.name);
  }

  function handleRenamedToDo(event) {
    setRenameToDo(event.target.value);
  }

  function handleSaveEdit() {
    if (editingId === null) return;

    setToDos((prev) =>
      prev.map((toDo) =>
        toDo.id === editingId ? { ...toDo, name: renameToDo } : toDo
      )
    );

    setEditingId(null);
    setRenameToDo("");
  }

  function handleCancelEdit() {
    setEditingId(null);
    setRenameToDo("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") handleSaveEdit();
    if (event.key === "Escape") handleCancelEdit();
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
                ref={inputRef}
                value={renameToDo}
                onChange={handleRenamedToDo}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span>{toDo.name}</span>
            )}
          </div>
          <div className="actions">
            <Button
              className="edit-button"
              onClick={() => handleEditToDo(toDo)}
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
