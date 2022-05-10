import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import PollingPage from './pages/PollingArea'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/polling" element={<PollingPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
