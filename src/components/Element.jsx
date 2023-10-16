import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import minus from '../assets/minus.png';
import { useTodo } from '../config/TodoContext';

function Element({
  description,
  checked,
  todolistid,
  index,
}) {
  const { toggleTodo, delItem } = useTodo();

  const handleClickOnInput = useCallback(() => {
    toggleTodo(index, todolistid);
  }, [index, todolistid, toggleTodo]);

  const handleClickOnDelete = useCallback(() => {
    delItem(index, todolistid);
  }, [index, todolistid, delItem]);

  return (
    <div className="element flex justify-start space-x-4">
      <input type="checkbox" className="cursor-pointer" checked={checked} onChange={() => handleClickOnInput()} />
      <div className="flex justify-start space-x-5">
        <p>
          { description }
        </p>
        <button type="button" onClick={handleClickOnDelete}>
          <img src={minus} className="w-5 h-5 cursor-pointer" alt="delete" />
        </button>
      </div>
    </div>
  );
}

Element.propTypes = {
  description: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  todolistid: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Element;
