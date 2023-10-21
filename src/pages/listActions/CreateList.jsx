import React from 'react';
import PropTypes from 'prop-types';
import CreateListHeader from '../../components/CreateItemHeader';
import ListForm from '../../components/ListForm';

function CreateList({ setActive }) {
  return (
    <div>
      <CreateListHeader createType="list" />
      <ListForm setActive={setActive} />
    </div>
  );
}

CreateList.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default CreateList;
