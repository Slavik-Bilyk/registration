import React, { useState } from 'react'
import '../index.css'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/auth/auth-operations'

const LoginPage = () => {
const dispatch = useDispatch()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')


const handleChange = ({target: {name, value}}) => {
  switch (name) {
    case 'email':
      return setEmail(value)
    case 'password':
      return setPassword(value)
    default:
      return;
  }
}


const handleSubmit = e => {
  e.preventDefault()
  dispatch(logIn({email, password}))
  setEmail('')
  setPassword('')
}

  return (
    <div className='container'>
      <div className='block'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
  )
}

export default LoginPage
