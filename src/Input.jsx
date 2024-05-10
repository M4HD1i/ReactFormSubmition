import React, { useState } from 'react';

const Input = ({type, placeh,onChange}) => {
  const [value, setValue]=useState('')
  console.log(value);
  return (
    <input type={type} placeholder={placeh} onChange={onChange} />
  );
}

export default Input;
