import React from 'react'
import { useDispatch } from 'react-redux'
import { checkLogin } from '../redux/actions/loginActions'

export const Login = () => {
  const dispatch = useDispatch()
  const login = () => {
    dispatch(checkLogin())
  }

  return (
    <div>
      <button type="button" onClick={login}>LOGIN</button>
    </div>
  )
}
