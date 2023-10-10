import Element from './Element.js'
import '../styles/List.css'
import { alltodolist } from '../data/alltodolist.js'

function List() {
    const firstToDoList = alltodolist.find((todolist) => todolist.id === 1);

    return (
        <div className='list'>
            { 
                firstToDoList
                    .todo
                    .map((toDoItem, index) => (
                        <Element 
                            description={ toDoItem.text } 
                            checked={ toDoItem.checked } 
                            index={ index }
                            key={ `${index}-${toDoItem.text}` }
                        />
                    ))
            }
        </div>
    )
}

export default List