import React, { useState } from 'react'
import List from './List.js'
import Actions from './Actions.js'
import Tabs from './Tabs.js'
import { TodoProvider } from '../config/TodoContext.js'

function App () {
  const [isFiltered, setFilter] = useState(false)
  const [activeTab, setActive] = useState(1)

  return (
    <div className="App">
      <TodoProvider>
        <Tabs activeTab={activeTab} setActive={setActive}/>
        <Actions isFiltered={isFiltered} setFilter={setFilter}/>
        <List activeTab={activeTab} isFiltered={isFiltered}/>
      </TodoProvider>
    </div>
  )
}

export default App
