import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
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
    <div className="flex justify-start space-x-4 w-full border p-2 relative group">
      <input type="checkbox" className="cursor-pointer" checked={checked} onChange={handleClickOnInput} />
      <div className="flex justify-start space-x-5">
        <p>
          {description}
        </p>
        <button type="button" onClick={handleClickOnDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" className="invisible group-hover:visible">
            <path d="M13.25 1c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 15H2.75A1.75 1.75 0 0 1 1 13.25V2.75C1 1.784 1.784 1 2.75 1ZM2.75 2.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25Zm8.5 6.25h-6.5a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5Z" />
          </svg>
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
