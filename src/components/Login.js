import React, { useState } from 'react'

export const Login = () => {
  const [inputs, setInputs] = useState({email:'', password:''});
  const handleSubmit = (event) => {
      event.preventDefault()
      alert('Signed In!')
  }
  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return (
    <div className='Form'>
       <form onSubmit={handleSubmit}>
        <div className='Input'>
          <input type='email' value={inputs.email} name='email' placeholder='Email' required autoComplete='off' onChange={e => handleInputChange(e)} />
          <label htmlFor='email' ></label>
        </div>
        <div className='Input'>
          <input type='password' value={inputs.password} name='password' placeholder='Password' required autoComplete='off' minLength='8' onChange={e => handleInputChange(e)} />
          <label htmlFor='password' ></label>
        </div>
         <button id='submit' type="submit"> Sign In</button>
       </form>
         <a href='#'>Lost your password?</a>
         <a href='#'>Sign Up</a>
    </div>
  )
}
