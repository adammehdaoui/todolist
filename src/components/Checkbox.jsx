import React from "react";
import PropTypes from "prop-types";
import { clsx } from "clsx";

function Checkbox({ checked, handleClickOnInput }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClickOnInput();
    }
  };

  return (
    <span
      role="checkbox"
      aria-checked={checked}
      aria-label="checkbox"
      onClick={handleClickOnInput}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
    >
      <span
        className={clsx(
          "inline-block h-4 w-4 mt-1 border-solid border-2 border-gray-300 rounded",
          {
            "bg-blue-500 h-4 w-4 mt-1 border-solid border-2 border-gray-300 rounded":
              checked,
          },
        )}
      />
    </span>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleClickOnInput: PropTypes.func.isRequired,
};

export default Checkbox;
