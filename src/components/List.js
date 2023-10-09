import Element from './Element.js'
import '../styles/List.css'

function List() {
    return (
        <div className="list">
            <Element description='JavaScript DOM' />
            <Element description='Rust 101' />
            <Element description='HTML/CSS usage' />
        </div>
    )
}

export default List