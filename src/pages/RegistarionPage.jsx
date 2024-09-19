import React, { useState } from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='container'>
      <div className='block'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit} >
          <div className='form-group'>
            <label htmlFor='inputName' className='form-label'>Name</label>
            <input 
              name='name'
              type='text'
              value={name}
              onChange={handleChange}
              className='form-input'
              id='inputName'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEmail' className='form-label'>Email Address</label>
            <input 
              name='email'
              type='email'
              value={email}
              onChange={handleChange}
              className='form-input'
              id='inputEmail'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputPassword' className='form-label'>Password</label>
            <input
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
              className='form-input'
              id='inputPassword'
            />
          </div>
          <button className='form-btn' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
