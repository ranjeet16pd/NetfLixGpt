import React from 'react'
import { IMG_CDN } from '../constants'

const MoviesCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4  rounded-lg'>
      <img alt='movies card' src={IMG_CDN+posterpath}/>
    </div>
  )
}

export default MoviesCard
