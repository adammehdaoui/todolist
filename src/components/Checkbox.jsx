import React from "react";
import PropTypes from "prop-types";

function Checkbox({ checked, handleClickOnInput }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClickOnInput();
    }
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      onClick={handleClickOnInput}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    >
      {checked ? (
        <div className="bg-blue-500 h-4 w-4 mt-1 border-solid border-2 border-gray-300 rounded" />
      ) : (
        <div className="h-4 w-4 mt-1 border-solid border-2 border-gray-300 rounded" />
      )}
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleClickOnInput: PropTypes.func.isRequired,
};

export default Checkbox;
