import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import plus from '../assets/plus.png';
import minus from '../assets/minus.png';
import edit from '../assets/edit.png';
import checked from '../assets/checked.png';
import tocheck from '../assets/tocheck.png';
import { useTodo } from '../config/TodoContext';

function Actions({ activeTab, isFiltered, setFilter }) {
  const { delTodo } = useTodo();

  const handleClick = useCallback(() => {
    setFilter(!isFiltered);
  }, [isFiltered, setFilter]);

  const handleDel = useCallback(() => {
    delTodo(activeTab);
  }, [activeTab, delTodo]);

  const root = `/createItem/${activeTab}`;

  return (
    <div className="flex justify-between space-x-3 m-3">
      <div className="flex justify-start space-x-3">
        <Link to={root}>
          <img src={plus} className="w-5 h-5 cursor-pointer" alt="Ajouter" />
        </Link>
        <img src={edit} className="w-5 h-5 cursor-pointer" alt="Modifier" />
        <button type="button" onClick={handleDel}>
          <img src={minus} className="w-5 h-5 cursor-pointer" alt="Supprimer" />
        </button>
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
  activeTab: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Actions;
