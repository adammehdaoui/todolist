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

  const addTodo = useCallback((description) => {
    const allIds = todos.map((todo) => todo.id);
    const maxId = Math.max(...allIds);

    const newTodo = {
      id: maxId + 1,
      name: description,
      todo: [],
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);

    console.log(todos);
  }, [todos]);

  const contextValue = useMemo(
    () => ({ todos, toggleTodo, addTodo }),
    [todos, toggleTodo, addTodo],
  );

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
