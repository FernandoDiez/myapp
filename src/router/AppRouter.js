import React from 'react'
import { useSelector } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { DashboardRoutes } from './DashboardRoutes'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {

  const { isLoggedIn } = useSelector(({ loginReducer }) => loginReducer)

  return (
    <Router>
      <Routes>
        <Route path='/login' element={
          <PublicRoutes isLoggedIn={isLoggedIn}>
            <Login />
          </PublicRoutes>
        } />
        <Route path='/*' element={
          <PrivateRoutes isLoggedIn={isLoggedIn}>
            <DashboardRoutes />
          </PrivateRoutes>
        } />
      </Routes>
    </Router>
  )
}
