import '../styles/Element.css'

function Element({ description, id }) {
    return (
        <div className="element" key={ id }>
            <input type="checkbox" className="check-input" />
            { description }
        </div>
    )
}

export default Element