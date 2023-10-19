import React from 'react';
import PropTypes from 'prop-types';
import { useTodo } from '../config/TodoContext';

function Bar({ id }) {
  const { todos } = useTodo();

  const toDoList = todos.find((todo) => todo.id === id).todo;
  const checkedLength = toDoList.filter((todoItem) => todoItem.checked).length;

  const percentage = Math.floor((checkedLength / toDoList.length) * 100);

  const barLoaded = { width: `${percentage}%` };

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 h-1.5 rounded-full transition-width duration-500 ease-in-out" style={barLoaded} />
    </div>
  );
}

Bar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Bar;
