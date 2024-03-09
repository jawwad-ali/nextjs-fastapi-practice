"use client";

import { FormEvent, useState } from "react";
import { addTodo } from "../server/action";

const AddTodo = () => {
  const [input, setInput] = useState("");

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        // const form = {input}
        
        e.preventDefault()
        
        addTodo(input)
        setInput("")
    }    

  return (
    <>
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
    </>
  );
};

export default AddTodo;
