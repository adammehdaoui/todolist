import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bar from './Bar';
import { useTodo } from '../config/TodoContext';
import RatioItem from './RatioItem';

function Tabs({ activeTab, setActive }) {
  const { todos } = useTodo();

  const toDoList = todos.find((todo) => todo.id === activeTab);
  const list = toDoList !== undefined ? toDoList.todo : [];
  const checkedLength = list.filter((todoItem) => todoItem.checked).length;
  const listLength = list.length;

  const handleClickOnTab = useCallback((id) => {
    setActive(id);
  }, [setActive]);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start border-b border-gray-200">
        <div className="flex justify-start">
          {todos.map((todo) => (
            <div key={todo.id}>
              <button
                type="button"
                className={`cursor-pointer inline-block p-3 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl h-16 border flex justify-start ${
                  todo.id === activeTab ? 'text-blue-500 bg-gray-100' : null
                }`}
                key={todo.id}
                onClick={() => handleClickOnTab(todo.id)}
              >
                <div className="flex justify-start mt-2 font-bold">
                  {todo.name}
                  {todo.id === activeTab && (
                    <RatioItem checkedLength={checkedLength} listLength={listLength} />
                  )}
                </div>
              </button>
              { todo.id === activeTab && (
                <Bar checkedLength={checkedLength} listLength={listLength} />
              )}
            </div>
          ))}
        </div>
        <div>
          <Link to="createList" className="cursor-pointer inline-block p-5 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl h-16 border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" className="mt-1">
              <path d="M2.75 1h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1Zm10.5 1.5H2.75a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4Z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default Tabs;
