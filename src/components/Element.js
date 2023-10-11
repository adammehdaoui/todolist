import { useTodo } from '../config/ToDoContext';

function Element({ description, checked, todolistid, index }) {
    const { toggleTodo } = useTodo();

    function handleClickOnInput () {
        toggleTodo(index, todolistid);
    };

    return (
        <div className="element flex justify-start space-x-4">
            <input 
                type="checkbox"
                className='cursor-pointer'
                checked={checked}
                onChange={() => handleClickOnInput()}
            />
            <div>
                { description }
            </div>
        </div>
    );
}

export default Element;