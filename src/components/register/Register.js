import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")

  return (
    <div className='register'>
        <div className='regiser_container'>
            <Input
                type='text'
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className='registerfield'
                placeholder='enter your name'
            />
             <Input
                type='text'
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className='registerfield'
                placeholder='enter your name'
            />
             <Input
                type='text'
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className='registerfield'
                placeholder='enter your name'
            />

        </div>
      
    </div>
  )
}

export default Register
