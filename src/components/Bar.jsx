import React from 'react';
import PropTypes from 'prop-types';

function Bar({ checkedLength, listLength }) {
  const percentage = Math.round((checkedLength / listLength) * 100);

  const barLoaded = { width: `${percentage}%` };

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div className="bg-blue-600 h-1.5 rounded-full transition-width duration-500 ease-in-out" style={barLoaded} />
    </div>
  );
}

Bar.propTypes = {
  checkedLength: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
};

export default Bar;
