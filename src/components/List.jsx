import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element';
import { useTodo } from '../config/TodoContext';

function List({ activeTab, isFiltered }) {
  const { todos } = useTodo();

  const activeList = todos.find((todo) => todo.id === activeTab);

  if (activeList === undefined) return null;

  const activeToDoList = activeList.todo;

  return (
    <div className="w-full">
      { activeToDoList.map((toDoItem, index) => (
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
