import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import edit from '../assets/edit.png'
import checked from '../assets/checked.png'

function Actions({ isFiltered, setFilter }) {
    function handleClick() {
        setFilter(!isFiltered)
    }

    return (
        <div className='flex justify-start space-x-3 m-3'>
            <img src={ plus } className='w-5 h-5' alt='Ajouter'/>
            <img src={ minus } className='w-5 h-5' alt='Supprimer'/>
            <img src={ edit } className='w-5 h-5' alt='Modifier'/>
            <img 
                src={ checked } 
                className='w-5 h-5' 
                alt='Filtrer'
                onClick={handleClick}
            />
        </div>
    )
}

export default Actions