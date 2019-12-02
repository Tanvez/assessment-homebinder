import React, { useState } from 'react'
import { CustomInput } from '../CustomInput'

const LostPassword = () => {
  const [email, setEmail] = useState('')
  return (
    <div className='Form'>
      <form>
      <label className='custom-label'>Enter your email address to reset your password</label>
      <CustomInput 
        name='email' 
        type='email'
        placeholder='email'
        value={email}
        required
        autoComplete='off'
        onChange={e => setEmail(e.target.value)}
      />
       <button id='submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LostPassword
