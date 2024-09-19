import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import authSelectors from '../redux/auth/auth-selectors'
import Layout from './Layout'
import HomePage from '../pages/HomePage'

const AppBar = () => {
  const location = useLocation()

  return (
    <div>
      <Layout />
      {location.pathname === '/' &&  <HomePage />}
    </div>
  )
}

export default AppBar
