import { createContext, useContext, useState } from "react";

import { alltodolist } from '../data/alltodolist'; 

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(alltodolist);

  const toggleTodo = (index, todolistid) => {
    const updatedTodos = [...todos];
    const isChecked = updatedTodos
                      .find(todo => todo.id === todolistid)
                      .todo[index]
                      .checked;
    
    updatedTodos
      .find(todo => todo.id === todolistid)
      .todo[index]
      .checked = !isChecked;

    setTodos(updatedTodos)
  };

  return (
    <TodoContext.Provider value={{ todos, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};