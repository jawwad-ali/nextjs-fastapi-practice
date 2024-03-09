import { Suspense } from "react";
import AddTodo from "./components/AddTodo";
// import Todo from "./components/Todo";

export default function Home() {
  return (
    <main className="m-2">
      <AddTodo />
      {/* <Todo /> */}
    </main>
  );
}
