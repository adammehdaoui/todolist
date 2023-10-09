import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import edit from '../assets/edit.png'
import checked from '../assets/checked.png'
import '../styles/Actions.css'

function Actions() {
    return (
        <div>
            <img src={ plus } alt='Ajouter'/>
            <img src={ minus } alt='Supprimer'/>
            <img src={ edit } alt='Modifier'/>
            <img src={ checked } className='filter-button' alt='Filtrer' />
        </div>
    )
}

export default Actions