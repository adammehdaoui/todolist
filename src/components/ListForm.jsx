import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTodo } from '../config/TodoContext';

function ListForm() {
  const [description, setDescription] = useState('');
  const { addTodo } = useTodo();
  const navigate = useNavigate();

  const handleInput = useCallback((e) => {
    setDescription(e.target.value);
  }, [setDescription]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    addTodo(e.target.description.value);
    navigate('/');
  }, [addTodo, navigate]);

  return (
    <form onSubmit={handleSubmit} className="ml-2 p-30">
      <div className="mt-2">
        <p>
          Description
        </p>
        <textarea
          type="text"
          value={description}
          id="description"
          name="description"
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
