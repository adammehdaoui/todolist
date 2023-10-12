import React, { useCallback } from 'react'
import { useTodo } from '../config/TodoContext'
import PropTypes from 'prop-types'

function Tabs ({ activeTab, setActive }) {
  const { todos } = useTodo()

  const handleClickOnTab = useCallback((id) => {
    setActive(id)
  }, [setActive])

  return (
    <div className='overflow-x-auto'>
      <div className='flex justify-start border-b border-gray-200'>
          {
              todos.map((todo) => todo.id === activeTab
                ? (
                  <div
                      className='cursor-pointer font-medium inline-block p-4 text-blue-600 bg-gray-100 rounded-tl-4xl rounded-tr-4xl border border-solid'
                      key={todo.id}
                      onClick={() => handleClickOnTab(todo.id)}
                  >
                      { todo.name }
                  </div>
                  )
                : (
                  <div
                      className='cursor-pointer font-medium inline-block p-4 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl border border-solid'
                      key={todo.id}
                      onClick={() => handleClickOnTab(todo.id)}
                  >
                      { todo.name }
                  </div>
                  ))
          }
          <div className='cursor-pointer font-medium inline-block p-4 rounded-t-lg hover:bg-gray-100 rounded-tl-4xl rounded-tr-4xl border border-solid'>
              +
          </div>
      </div>
    </div>
  )
}

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired
}

export default Tabs
