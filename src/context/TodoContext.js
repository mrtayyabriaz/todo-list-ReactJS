const { createContext } = require("react");

export const TodoContext = createContext(
  [
    {
      id: 1,
      Todo: "Learn React",
      completed: false
    },
  ]
  );

export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvidor = TodoContext.Provider;

export default useTodo;