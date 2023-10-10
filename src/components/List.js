import Element from './Element.js';
import '../styles/List.css';
import { useTodo } from '../config/ToDoContext';

function List({ isFiltered }) {
    const { todos } = useTodo();

    return (
        <div className='list'>
            { 
                todos.map((toDoItem, index) => (

                    isFiltered === true && toDoItem.checked === true ? (
                        null
                    ) : (
                        <Element 
                            description={toDoItem.text} 
                            checked={toDoItem.checked} 
                            index={index}
                            todos={todos}
                            key={`${index}-${toDoItem.text}-${toDoItem.checked}`}
                        />
                    )
                ))
            }
        </div>
    )
}

export default List;