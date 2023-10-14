import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './HomePage';
// import CreateList from './CreateList';
// import CreateItem from './CreateItem';
import { TodoProvider } from '../config/TodoContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
}

export default App;
