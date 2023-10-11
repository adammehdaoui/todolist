import Element from './Element.js';
import { useTodo } from '../config/ToDoContext';

function List({ activeTab, isFiltered }) {
    const { todos } = useTodo();

    const activeTodoList = todos
                            .find(todo => todo.id === activeTab)
                            .todo

    return (
        <div className='m-4'>
            { 
                activeTodoList.map((toDoItem, index) => (

                    isFiltered === true && toDoItem.checked === true ? (
                        null
                    ) : (
                        <Element 
                            description={toDoItem.text} 
                            checked={toDoItem.checked} 
                            index={index}
                            todolistid={activeTab}
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