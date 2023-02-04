import React from 'react'
import { useState } from 'react'
import  './Login.css'
import {loginfunction} from '../../firebase'


const Login = () => {
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");

  return (
    <div className='login'>
      <div className="login_container">
        <input type="text"
        className='login_textbox'
          placeholder='Enter your Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password"
          placeholder='Enter your password'
          className='login_textbox'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            className='login_btn'
          onClick={()=>{loginfunction(email,password)}}>
            Submit
          </button>
      </div>
    </div>
  )
}

export default Login
