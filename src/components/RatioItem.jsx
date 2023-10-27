import React from 'react';
import PropTypes from 'prop-types';

function RatioItem({ checkedLength, listLength }) {
  return (
    <div className="ml-3">
      <span className="bg-blue-500 text-white p-1 rounded-l-lg">
        { checkedLength }
      </span>
      <span className="bg-gray-400 text-white p-1 rounded-r-lg">
        { listLength }
      </span>
    </div>
  );
}

RatioItem.propTypes = {
  checkedLength: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
};

export default RatioItem;
