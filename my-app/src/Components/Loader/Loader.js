import React from 'react'
import circle from '../../Assets/circle.png'
import './Loader.css'

export const Loader = () => {
  return (
    <div className='loader-box'>
      <img src={loader} alt="loading" className='loader' />
    </div>
  )
}