import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTodo } from '../config/TodoContext';

function Tabs({ activeTab, setActive }) {
  const { todos } = useTodo();

  const handleClickOnTab = useCallback((id) => {
    setActive(id);
  }, [setActive]);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-start border-b border-gray-200">
        <div className="flex justify-start">
          {todos.map((todo) => (
            <div>
              <button
                type="button"
                className={`cursor-pointer font-bold inline-block p-4 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl border border-solid ${
                  todo.id === activeTab ? 'text-blue-600 bg-gray-100' : null
                }`}
                key={todo.id}
                onClick={() => handleClickOnTab(todo.id)}
              >
                {todo.name}
              </button>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link to="createList" className="cursor-pointer font-bold inline-block p-4 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl border border-solid">
            +
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
