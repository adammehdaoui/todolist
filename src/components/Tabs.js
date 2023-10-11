import { useTodo } from '../config/ToDoContext';

function Tabs({activeTab, setActive}) {
    const { todos } = useTodo();

    function handleClickOnTab(id) {
        setActive(id);
        console.log(id)
    }

    return (
        <div className='flex justify-start space-x-3 text-sm font-medium text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
            {
                todos.map((todo) => todo.id === activeTab ? (
                    <div 
                        className='cursor-pointer inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500'
                        key={todo.id}
                        onClick={() => handleClickOnTab(todo.id)}
                    >
                        { todo.name }
                    </div>
                ) : (
                    <div 
                        className='cursor-pointer inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
                        key={todo.id}
                        onClick={() => handleClickOnTab(todo.id)}
                    >
                        { todo.name }
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs;