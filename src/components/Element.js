import '../styles/Element.css'

function Element({ description }) {
    return (
        <div className="element">
            <input type="checkbox" className="check-input" />
            { description }
        </div>
    )
}

export default Element