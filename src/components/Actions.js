import React from 'react'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import edit from '../assets/edit.png'
import checked from '../assets/checked.png'
import PropTypes from 'prop-types'

function Actions ({ isFiltered, setFilter }) {
  function handleClick () {
    setFilter(!isFiltered)
  }

  return (
    <div className='flex justify-between space-x-3 m-3'>
        <div className='flex justify-start space-x-3'>
            <img src={ plus } className='w-5 h-5 cursor-pointer' alt='Ajouter'/>
            <img src={ minus } className='w-5 h-5 cursor-pointer' alt='Supprimer'/>
            <img src={ edit } className='w-5 h-5 cursor-pointer' alt='Modifier'/>
        </div>
        <img src={ checked } className='w-5 h-5 cursor-pointer ml-auto' alt='Filtrer' onClick={handleClick} />
    </div>
  )
}

Actions.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default Actions
