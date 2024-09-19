import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSelectors from '../redux/auth/auth-selectors'
import UserMenu from './UserMenu/UserMenu'
import styled from './Layout.module.css'

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

 
  return (
    
    <div>
      <nav className={styled.Navigation}>
       <div className={styled.block}>
         <NavLink to='/'>Главная</NavLink>
       {isLoggedIn && (
         <NavLink to='/notes'>Заметки</NavLink>
         )}
       </div>

        {!isLoggedIn ? (
          <div className={styled.block}>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/registration'>Registration</NavLink>
          </div>
        ) : (
          <UserMenu/>
        )}
      </nav>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}
export default Layout
