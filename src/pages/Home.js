import React from 'react'
import { useDispatch } from 'react-redux'
import { checkLogout } from '../redux/actions/loginActions'

export const Home = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(checkLogout())
  }

  return (
    <div>
      <button type="button" onClick={logout}>LOGOUT</button>
    </div>
  )
}
