import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import CreateList from "./listActions/CreateList";
import CreateItem from "./listActions/CreateItem";
import UpdateList from "./listActions/UpdateList";
import { TodoProvider } from "../config/TodoContext";

function App() {
  const [activeTab, setActive] = useState(1);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage activeTab={activeTab} setActive={setActive} />,
    },
    {
      path: "/createList",
      element: <CreateList setActive={setActive} />,
    },
    {
      path: "/updateList/:id",
      element: <UpdateList />,
    },
    {
      path: "/createItem/:id",
      element: <CreateItem />,
    },
    {
      path: "*",
      element: <HomePage activeTab={activeTab} setActive={setActive} />,
    },
  ]);

  return (
    <div>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </div>
  );
}

export default App;
