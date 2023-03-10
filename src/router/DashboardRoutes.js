import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
