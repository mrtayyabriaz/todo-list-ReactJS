import React from "react";
import Todoitem from "./Ttodoitem";
import useTodo from "../context/TodoContext";

export default function Todos() {
  const {todos} = useTodo();

  return (
    <div className="container">
      <br />
      <h2 className="text-center w-100">Todo List</h2>

      {
        todos.length === 0 ?
          "All Work Completed :)" :

          todos.map((todo) => {
            return <Todoitem todo={todo} key={todo.tno} />
          })

      }

    </div>
  );
}
