import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Input from './Input';
import logo from './logo.svg';


const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedData({ name, password });
    setName('');
    setPassword('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <form className="form">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="input-container">
          <Input type={'text'} placeh={'Enter your name'} onChange={handleNameChange} value={name} />
          <div className="password-input">
            <Input type={showPassword ? 'text' : 'password'} placeh={'Enter your password'} onChange={handlePasswordChange} value={password} />
          </div>
        </div>
        {submittedData && (
          <div>
            <h2>Submitted User Data:</h2>
            <p>Name: {submittedData.name}</p>
            <p style={{ whiteSpace: 'pre-wrap', letterSpacing: '3px' }}>Password:{showPassword ? submittedData.password : '*********'}</p>
            {showPassword ? (
              <FaEyeSlash onClick={togglePasswordVisibility} />
            ) : (
              <FaEye onClick={togglePasswordVisibility} />
            )}
          </div>
        )}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
