import Element from './Element.js';
import '../styles/List.css';
import { useTodo } from '../config/ToDoContext';

function List({ activeTab, isFiltered }) {
    const { todos } = useTodo();


    // console.log(activeTab)
    // console.log(todos)
    // console.log(todos.find(todo => todo.id === 1))

    const activeTodoList = todos
                            .find(todo => todo.id === 1)
                            .todo

    return (
        <div className='list'>
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