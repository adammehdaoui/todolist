import React, { useState } from 'react';
import List from '../../components/List';
import Actions from '../../components/Actions';
import Tabs from '../../components/Tabs';

function HomePage() {
  const [isFiltered, setFilter] = useState(false);
  const [activeTab, setActive] = useState(1);

  return (
    <div>
      <Tabs activeTab={activeTab} setActive={setActive} />
      <Actions activeTab={activeTab} isFiltered={isFiltered} setFilter={setFilter} />
      <List activeTab={activeTab} isFiltered={isFiltered} />
    </div>
  );
}

export default HomePage;
