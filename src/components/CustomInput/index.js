import React from 'react'

export const CustomInput = ({type,value, name, placeholder, onChange, label}) => 
  <div className='Input'>
     <input 
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        required
        autoComplete='off'
        minLength='8'
        onChange={e => onChange(e)}
      />
     <label htmlFor={name}>{label}</label>
   </div>
