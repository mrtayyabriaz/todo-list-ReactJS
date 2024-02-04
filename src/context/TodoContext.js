import { createContext, useContext } from "react";

export const TodoContext = createContext(
  {
    todos: [
      {
        tno: 1,
        title: "Learn React",
        desc: "Learn React with desc",
        // completed: false,
      }
    ],
    OnDelete: () => {},
    addTodo: () => {},
    OnEdit:() => {},
  },
);

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvidor = TodoContext.Provider;

export default useTodo;