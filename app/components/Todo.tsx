"use client";

import { useEffect, useState } from "react";
import { retreive_todos } from "../server/action";

interface TodoProps {
  id: number;
  title: string;
}

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await retreive_todos(); // Assuming retrieveTodos returns an array of todos
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [todos]);

  return (
    <>
      <ol className="flex flex-col space-y-5 mt-5">
        {todos.map((todo: TodoProps) => (
          <>
          <li className="" key={todo.id}> {todo.id} | {todo.title}</li>
          </>
        ))}
      </ol>
    </>
  );
};

export default Todo;
