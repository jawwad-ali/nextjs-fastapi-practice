// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";
// import { retreive_todos } from "../server/action";

// // interface TodoProps {
// //   id: number;
// //   title: string;
// //   completed?: string;
// // }

// // const fetchTodos = async () => {
// //   try {
// //     const todosData = await retreive_todos(); // Assuming retrieveTodos returns an array of todos
// //     return todosData;
// //   } catch (error) {
// //     console.error("Error fetching todos:", error);
// //   }
// // };

// const Todo = () => {
//   const [todos, setTodos] = useState<TodoProps[]>([]);


//   // const fetchData = async () => {
//   //   try {
//   //     const todosData = await retreive_todos(); // Assuming fetchTodos returns an array of todos
//   //     setTodos(todosData);
//   //   } catch (error) {
//   //     console.error("Error fetching todos:", error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchData();
//   // }, []);

//   return (
//     <ol className="flex flex-col space-y-5 mt-5">
//       {todos?.map((todo: TodoProps) => (
//         <>
//           <li className="" key={todo.id}>
//             {" "}
//             {todo.id} | {todo.title}
//           </li>
//         </>
//       ))}
//     </ol>
//   );
// };

// export default Todo;
