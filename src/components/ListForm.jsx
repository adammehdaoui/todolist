import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ListForm() {
  const [description, setDescription] = useState('');

  function handleInput(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setDescription(event.target.description.value);
  }

  return (
    <form onSubmit={handleSubmit} className="ml-2 p-30">
      <div className="mt-2">
        <p>
          Description
        </p>
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleInput}
          className="mt-4 border border-gray-200 w-3/4"
        />
      </div>
      <br />
      <div className="flex justify-start space-x-4">
        <Link to="/">
          <button type="button" className="p-2 black bg-gray-100 rounded-lg">
            Cancel
          </button>
        </Link>
        <button type="submit" className="p-2 text-white bg-blue-600 rounded-lg">
          Create
        </button>
      </div>
    </form>
  );
}

export default ListForm;
