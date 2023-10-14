import React, { useState } from 'react';
import List from './List';
import Actions from './Actions';
import Tabs from './Tabs';

function HomePage() {
  const [isFiltered, setFilter] = useState(false);
  const [activeTab, setActive] = useState(1);

  return (
    <div className="App">
      <Tabs activeTab={activeTab} setActive={setActive} />
      <Actions isFiltered={isFiltered} setFilter={setFilter} />
      <List activeTab={activeTab} isFiltered={isFiltered} />
    </div>
  );
}

export default HomePage;
