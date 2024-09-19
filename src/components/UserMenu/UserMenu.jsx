import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authSelectors from '../../redux/auth/auth-selectors'
import { logOut } from '../../redux/auth/auth-operations'

const UserMenu = () => {

  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)

  return (
    <div>
          <span>Вітаю, {name}</span>
          <button type='button' onClick={() => dispatch(logOut())}>Вийти</button>

    </div>
  )
}

export default UserMenu
