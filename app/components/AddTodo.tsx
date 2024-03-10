"use client";

import { FormEvent, useEffect, useState} from "react";
import { addTodo, retreive_todos, deleteTodo } from "../server/action";

interface TodoProps {
  id: string;
  title: string;
  completed?: string;
}

const AddTodo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const [loading , setLoading] = useState<boolean>(false)

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
      setTodos(todosData);

      console.log(todosData);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleDelete = async (id:string) => {
    try {
      // Call the deleteTodo function from your API
      await deleteTodo(id); 
      // Filter out the deleted todo from the state
      const updatedTodos = todos.filter(todo => todo.id !== id);
      // Update the state with the filtered todos
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  useEffect(() => {
    
    setLoading(true)
    fetchData();
    setLoading(false)


  }, [input ]);

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
      <ol className="flex flex-col gap-4 mt-5">
        {
          loading && <h2>Loading...</h2>
        }

        {todos?.map((todo: TodoProps) => (
          <>
            <li className="" key={todo.id}>
              {/* {todo.id} */}
              {todo.title}
            <button className="w-24 h-10 bg-red-500 text-white ml-5" onClick={() => handleDelete(todo.id)}>Delete Todo </button>
            </li>

          </>
        ))}
      </ol>
    </>
  );
};

export default AddTodo;
