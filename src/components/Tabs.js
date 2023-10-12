import React from 'react'
import plus from '../assets/plus.png'
import { useTodo } from '../config/TodoContext'
import PropTypes from 'prop-types'

function Tabs ({ activeTab, setActive }) {
  const { todos } = useTodo()

  function handleClickOnTab (id) {
    setActive(id)
    console.log(id)
  }

  return (
      <div className='flex justify-start space-x-3 text-sm font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
          {
              todos.map((todo) => todo.id === activeTab
                ? (
                  <div
                      className='cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                      key={todo.id}
                      onClick={() => handleClickOnTab(todo.id)}
                  >
                      { todo.name }
                  </div>
                  )
                : (
                  <div
                      className='cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                      key={todo.id}
                      onClick={() => handleClickOnTab(todo.id)}
                  >
                      { todo.name }
                  </div>
                  ))
          }
          <div className='cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'>
              <img src={ plus } className='w-5 h-5 cursor-pointer' alt='Ajouter'/>
          </div>
      </div>
  )
}

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
}

export default Tabs
