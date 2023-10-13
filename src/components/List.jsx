import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element';
import { useTodo } from '../config/TodoContext';

function List({ activeTab, isFiltered }) {
  const { todos } = useTodo();

  const activeTodoList = todos.find((todo) => todo.id === activeTab).todo;

  return (
    <div className="m-4">
      { activeTodoList.map((toDoItem, index) => (
        isFiltered === true && toDoItem.checked === true
          ? null
          : (
            <Element
              description={toDoItem.text}
              checked={toDoItem.checked}
              index={index}
              todolistid={activeTab}
              todos={todos}
              key={`${toDoItem.text}-${toDoItem.checked}`}
            />
          )
      ))}
    </div>
  );
}

List.propTypes = {
  activeTab: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
};

export default List;
