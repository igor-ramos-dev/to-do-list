import { useContext, useEffect, useRef, useState } from "react";

import { Input } from "../Input";
import { Item, List, Checkbox, Button } from "./styles";
import { Pencil, Trash2, X } from "lucide-react";

import { ToDoContext } from "../../context/ToDos/ToDoContext";

export default function ToDoList() {
  const { toDos, setToDos } = useContext(ToDoContext);
  const [renameToDo, setRenameToDo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [completedToDos, setCompletedToDos] = useState([]);

  const inputRef = useRef(null);

  console.log(completedToDos);

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

  function handleToggleComplete(id) {
    const updatedToDos = toDos.map((toDo) => {
      return toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo;
    });

    setToDos(updatedToDos);

    const completed = updatedToDos.filter((toDo) => toDo.completed);
    setCompletedToDos(completed);
  }

  return (
    <List>
      {toDos.length === 0 ? (
        <Item>
          <p>Você ainda não possui uma tarefa.</p>
        </Item>
      ) : (
        toDos.map((toDo) => (
          <Item key={toDo.id}>
            <div className="item-container">
              {toDo.completed ? (
                <Checkbox
                  defaultChecked
                  onClick={() => handleToggleComplete(toDo.id)}
                />
              ) : (
                <Checkbox onClick={() => handleToggleComplete(toDo.id)} />
              )}

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
        ))
      )}
    </List>
  );
}
