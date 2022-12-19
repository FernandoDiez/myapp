import { types } from '../types'
import { fetchData } from '../fetchData'

export const checkLogin = (values = 'undefined') => {
  const url = './data/login.json'
  const data = fetchData(url)
  return ((dispatch) => { data.then(data => { dispatch(login(data)) }) })
}

export const checkLogout = (values = 'undefined') => {
  const url = './data/logout.json'
  const data = fetchData(url)
  return ((dispatch) => { data.then(data => { dispatch(login(data)) }) })
}

export const login = (data) => {
  return {
    type: types.login,
    payload: {
      isLoggedIn: data.isLoggedIn
    }
  }
}