import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './homePage/HomePage';
import CreateList from './listActions/CreateList';
import CreateItem from './listActions/CreateItem';
import { TodoProvider } from '../config/TodoContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/createList',
    element: <CreateList />,
  },
  {
    path: '/createItem/:id',
    element: <CreateItem />,
  },
]);

function App() {
  return (
    <div>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
}

export default App;
