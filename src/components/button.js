import React from 'react'

const button = ({text , color , onClick}) => {
  return (
    <button  onClick={onClick} className='btn'  style={{backgroundColor:color}}>
      {text}
    </button>
  )
}

export default button
