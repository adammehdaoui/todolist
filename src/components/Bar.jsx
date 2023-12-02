import React from "react";
import PropTypes from "prop-types";

function Bar({ checkedLength, listLength }) {
  const percentage = Math.round((checkedLength / listLength) * 100);

  const barLoaded = { width: `${percentage}%` };

  return (
    <div className="w-full bg-gray-200">
      <div
        className="bg-blue-500 h-2 transition-width duration-500 ease-in-out"
        style={barLoaded}
      />
    </div>
  );
}

Bar.propTypes = {
  checkedLength: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
};

export default Bar;
