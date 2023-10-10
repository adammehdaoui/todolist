import List from './List.js'
import Actions from './Actions.js'
import { TodoProvider } from '../config/ToDoContext.js';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Actions />
        <List />
      </TodoProvider>
    </div>
  );
}

export default App
