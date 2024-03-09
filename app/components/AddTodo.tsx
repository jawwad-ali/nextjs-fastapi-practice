"use client";

import { FormEvent, useEffect, useState} from "react";
import { addTodo, retreive_todos } from "../server/action";

interface TodoProps {
  id: string;
  title: string;
  completed?: string;
}

const AddTodo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle Submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sending new todo request to the api from via server action
    addTodo(input);
    setInput("");
  };

  // Getting todos from Api
  const fetchData = async () => {
    try {
      const todosData = await retreive_todos(); // Assuming fetchTodos returns an array of todos
      // setLoading(true);
      setTodos(todosData);
      // setLoading(false);

      console.log(todosData);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <>
      <h1>Everything from AddTodo</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          placeholder="Enter Task"
          className="w-96 h-10 p-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="w-28 bg-red-500 text-white h-10 rounded-lg">
          Add Task
        </button>
      </form>

      {/* Listing the todos */}
      <ol className="flex flex-wrap gap-4 mt-5">
        {todos?.map((todo: TodoProps) => (
          <>
            <li className="" key={todo.id}>
              {" "}
              {todo.title}
            </li>
          </>
        ))}
      </ol>
    </>
  );
};

export default AddTodo;
