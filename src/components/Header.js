import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const  Header = ({title}) =>  {

const onClick=()=> {
  console.log("click")
}


  return (
    <header className='header'>
      <h1  >{title}</h1>
     <Button text='add' color='green' onClick={onClick} />
     
    </header>
  )
}

Header.defaultProps = {
    title:'My First React App',
    subtitle1:'let learn react ',
    subtitle2:'let learn Javascript again ',
    numberofpost: 5
}

Header.propTypes = {
    numberofpost:PropTypes.string
}

const headerStyleSheet = {
    color: 'red' ,
     background:'black'
}



export default Header
