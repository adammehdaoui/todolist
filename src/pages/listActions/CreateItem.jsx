import React from "react";
import CreateItemHeader from "../../components/CreateItemHeader";
import ItemForm from "../../components/ItemForm";

function CreateItem() {
  return (
    <div>
      <CreateItemHeader createType="todo" />
      <ItemForm />
    </div>
  );
}

export default CreateItem;
