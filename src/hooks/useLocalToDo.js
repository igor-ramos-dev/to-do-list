import { useEffect, useState } from "react";

export default function useLocalToDo(key, initialValue = []) {
  const [toDo, setToDo] = useState(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      // se houver algo salvo, retorna...
      return JSON.parse(storedData);
    }

    return initialValue;
  });

  useEffect(() => {
    // toda vez que o state for alterado, salva no localStorage
    localStorage.setItem(key, JSON.stringify(toDo));
  }, [key, toDo]);

  return [toDo, setToDo];
}
