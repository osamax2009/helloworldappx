import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {registerfunction } from '../../firebase'

const Register = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    
    const register=()=>{
        if(!name) alert("enter you name ");
        if(!password) alert("enter you password ");
        if(!email) alert("enter you email ");
        registerfunction(email,password,name);
    }

  return (
    <div className='register'>
        <div className='regiser_container'>
            <input
                type='text'
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className='registerfield'
                placeholder='enter your name'
            />
             <input
                type='text'
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                className='registerfield'
                placeholder='enter your email'
            />
             <input
                type='passsword'
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                className='registerfield'
                placeholder='enter your password'
            />
            <button
                className='btn_registerfield'
                onClick={register}
            
            >
                Register New Accoount

            </button>

        </div>
        <div className="">
            if you Already Have account ? <Link to="/" >Go To Login </Link>
            </div>
      
    </div>
  )
}

export default Register
