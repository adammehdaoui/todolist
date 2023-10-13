import React, { useState } from 'react';
import List from './List';
import Actions from './Actions';
import Tabs from './Tabs';
import { TodoProvider } from '../config/TodoContext';

function App() {
  const [isFiltered, setFilter] = useState(false);
  const [activeTab, setActive] = useState(1);

  return (
    <div className="App">
      <TodoProvider>
        <Tabs activeTab={activeTab} setActive={setActive} />
        <Actions isFiltered={isFiltered} setFilter={setFilter} />
        <List activeTab={activeTab} isFiltered={isFiltered} />
      </TodoProvider>
    </div>
  );
}

export default App;
