import React from 'react'
import circle from '../../Assets/JVX7.gif'
import './Loader.css'

export const Loader = () => {
  return (
    <div className='loader-box'>
      <img src={circle} alt="loading" className='loader' />
    </div>
  )
}