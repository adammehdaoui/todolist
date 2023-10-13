import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import edit from '../assets/edit.png';
import checked from '../assets/checked.png';
import tocheck from '../assets/tocheck.png';

function Actions({ isFiltered, setFilter }) {
  const handleClick = useCallback(() => {
    setFilter(!isFiltered);
  }, [isFiltered, setFilter]);

  return (
    <div className="flex justify-between space-x-3 m-3">
      <div className="flex justify-start space-x-3">
        <img src={plus} className="w-5 h-5 cursor-pointer" alt="Ajouter" />
        <img src={edit} className="w-5 h-5 cursor-pointer" alt="Modifier" />
        <img src={minus} className="w-5 h-5 cursor-pointer" alt="Supprimer" />
      </div>
      <button type="button" className="w-5 h-5 cursor-pointer ml-auto" onClick={handleClick}>
        {isFiltered
          ? (
            <img src={tocheck} alt="Filtrer" />
          )
          : (
            <img src={checked} alt="Filtrer" />
          )}
      </button>
    </div>
  );
}

Actions.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Actions;
