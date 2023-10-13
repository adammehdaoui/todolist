import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import alltodolist from '../data/alltodolist';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(alltodolist);

  const toggleTodo = useCallback((index, todolistid) => {
    const updatedTodos = [...todos];
    const todoToUpdate = updatedTodos.find((todo) => todo.id === todolistid).todo[index];

    todoToUpdate.checked = !todoToUpdate.checked;

    setTodos(updatedTodos);
  }, [todos]);

  const contextValue = useMemo(() => ({ todos, toggleTodo }), [todos, toggleTodo]);

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTodo = () => useContext(TodoContext);
