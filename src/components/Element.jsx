import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTodo } from '../config/TodoContext';

function Element({
  description,
  checked,
  todolistid,
  index,
}) {
  const { toggleTodo } = useTodo();

  const handleClickOnInput = useCallback(() => {
    toggleTodo(index, todolistid);
  }, [index, todolistid, toggleTodo]);

  return (
    <div className="element flex justify-start space-x-4">
      <input type="checkbox" className="cursor-pointer" checked={checked} onChange={() => handleClickOnInput()} />
      <div>
        { description }
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
