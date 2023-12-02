import React, { useState } from "react";
import PropTypes from "prop-types";
import List from "../../components/List";
import Actions from "../../components/Actions";
import Tabs from "../../components/Tabs";

function HomePage({ activeTab, setActive }) {
  const [isFiltered, setFilter] = useState(false);

  return (
    <div>
      <Tabs activeTab={activeTab} setActive={setActive} />
      <Actions
        activeTab={activeTab}
        setActive={setActive}
        isFiltered={isFiltered}
        setFilter={setFilter}
      />
      <List activeTab={activeTab} isFiltered={isFiltered} />
    </div>
  );
}

HomePage.propTypes = {
  activeTab: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default HomePage;
