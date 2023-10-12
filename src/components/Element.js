import React from 'react'
import { useTodo } from '../config/ToDoContext'
import PropTypes from 'prop-types'

function Element ({ description, checked, todolistid, index }) {
  const { toggleTodo } = useTodo()

  function handleClickOnInput () {
    toggleTodo(index, todolistid)
  };

  return (
      <div className="element flex justify-start space-x-4">
          <input type="checkbox" className='cursor-pointer' checked={checked} onChange={() => handleClickOnInput()} />
          <div>
              { description }
          </div>

          {/* <input type="checkbox" id="maCheckbox" class="hidden" />
          <label for="maCheckbox" class="cursor-pointer select-none">
              <span class="w-6 h-6 border border-gray-400 rounded-lg flex items-center justify-center mr-2">
                  <svg class="w-4 h-4 hidden text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 11l2-2 6 6L18 7l2 2-10 10z"/></svg>
              </span>
              Cocher la case
          </label> */}

      </div>
  )
}

Element.propTypes = {
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  todolistid: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

export default Element
