import React from "react";
import Todoitem from "./todoitem";

export default function Todos(props) {
  return (
    <div className="container">
      <br />
      <h2 className="text-center w-100">All Todos</h2>

      {
        props.todos.length === 0 ?
          "All Work Completed :)" :

          props.todos.map((todo) => {
            return <Todoitem todo={todo} key={todo.tno} OnDelete={props.OnDelete} />
          })

      }

    </div>
  );
}
