import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validate from 'validate.js'

export const Login = () => {
  const [inputs, setInputs] = useState({email:'', password:''});
  const handleSubmit = (event) => {
      event.preventDefault()
      let constraints = {
        from: {
          email: true
        }
      };
      let validatedEmail = validate({from:inputs.email},constraints)
      if(validatedEmail!==undefined){
        setInputs(inputs => ({...inputs, 'emailError':'Please enter a valid email address'}))
        return
      } else {
        setInputs(inputs => ({...inputs, 'emailError':undefined}))
        alert('Signed In!')
      }

  }
  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return (
    <div className='Form' key='form'>
       <form onSubmit={handleSubmit}>
          <div className='Input'>
            <input 
              type='email'
              value={inputs.email}
              name='email'
              placeholder='Email'
              required
              autoComplete='off'
              onChange={e => handleInputChange(e)}
            />
            <label htmlFor='email' ></label>
          </div>
          { inputs&& inputs.emailError && <div className='form-error'>{inputs.emailError}</div>}
          <div className='Input'>
            <input type='password' value={inputs.password} name='password' placeholder='Password' required autoComplete='off' minLength='8' onChange={e => handleInputChange(e)} />
            <label htmlFor='password' ></label>
          </div>
          <button id='submit' type="submit"> Sign In</button>
        </form>
         <Link to='/lostpassword'>Lost your password?</Link>
         <Link style={{paddingBottom:'10px'}} to='/signup'>Sign Up</Link>
    </div>
  )
}
