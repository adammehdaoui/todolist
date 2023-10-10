import List from './List.js'
import Actions from './Actions.js'
import { TodoProvider } from '../config/ToDoContext.js';
import { useState } from 'react';

function App() {
  const [isFiltered, setFilter] = useState(false)

  return (
    <div className="App">
      <TodoProvider>
        <Actions isFiltered={isFiltered} setFilter={setFilter}/>
        <List isFiltered={isFiltered}/>
      </TodoProvider>
    </div>
  );
}

export default App
