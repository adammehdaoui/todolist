import React from 'react';
import CreateListHeader from '../../components/CreateItemHeader';
import ListForm from '../../components/ListForm';

function CreateList() {
  return (
    <div>
      <CreateListHeader createType="list" />
      <ListForm />
    </div>
  );
}

export default CreateList;
