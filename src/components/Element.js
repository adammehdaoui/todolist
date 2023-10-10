import { useState } from 'react';
import '../styles/Element.css'

function Element({ description, checked, index, id }) {
    const [isInputChecked, changeChecked] = useState(checked);

    function handleClickOnInput(){
        changeChecked(!isInputChecked)
    }

    return (
        <div className="element" key={ id }>
            <input 
                type="checkbox" 
                className="check-input" 
                checked={ isInputChecked }
                onChange={ handleClickOnInput }
            />
            { description }
        </div>
    )
}

export default Element