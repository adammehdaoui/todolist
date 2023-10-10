import { useTodo } from '../config/ToDoContext';
import '../styles/Element.css'

function Element({ description, checked, index }) {
    const { toggleTodo } = useTodo();

    function handleClickOnInput () {
        toggleTodo(index);
    };

    return (
        <div className="element">
            <input 
                type="checkbox" 
                className="check-input" 
                checked={checked}
                onChange={handleClickOnInput}
            />
            { description }
        </div>
    );
}

export default Element;