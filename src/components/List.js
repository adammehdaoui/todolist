import Element from './Element.js';
import '../styles/List.css';
import { useTodo } from '../config/ToDoContext';

function List() {
    const { todos } = useTodo();

    return (
        <div className='list'>
            { 
                todos.map((toDoItem, index) => (
                    <Element 
                        description={toDoItem.text} 
                        checked={toDoItem.checked} 
                        index={index}
                        todos={todos}
                        key={`${index}-${toDoItem.text}-${toDoItem.checked}`}
                    />
                ))
            }
        </div>
    )
}

export default List;