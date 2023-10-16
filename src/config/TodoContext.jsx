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
    const toDoToUpdate = updatedTodos.find((todo) => todo.id === todolistid).todo[index];

    toDoToUpdate.checked = !toDoToUpdate.checked;

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
  }, [todos]);

  const delTodo = useCallback((todolistid) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todolistid);
    setTodos(updatedTodos);
  }, [todos]);

  const addItem = useCallback((todolistid, description) => {
    const updatedTodos = [...todos];
    const listToUpdate = updatedTodos.find((todo) => todo.id === todolistid);

    const toDoItems = listToUpdate.todo;
    const item = {
      text: description,
      checked: false,
    };

    toDoItems.push(item);

    setTodos(updatedTodos);
  }, [todos]);

  const delItem = useCallback((index, todolistid) => {
    const updatedTodos = [...todos];
    const toDoToUpdate = updatedTodos.find((todo) => todo.id === todolistid).todo;

    toDoToUpdate.splice(index, index);

    setTodos(updatedTodos);
  }, [todos]);

  const contextValue = useMemo(
    () => ({
      todos, toggleTodo, addTodo, delTodo, addItem, delItem,
    }),
    [todos, toggleTodo, addTodo, delTodo, addItem, delItem],
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
