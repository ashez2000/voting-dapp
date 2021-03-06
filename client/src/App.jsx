import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'

import Navbar from './components/Navbar'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import OtpVerifyPage from './pages/OtpVerify'
import PollingPage from './pages/PollingArea'
import ResultPage from './pages/Result'
import AdminLogin from './pages/admin/Login'
import Footer from './components/Footer'

const App = () => {
  const { setUser, isAuthenticated, isAdmin } = useContext(AuthContext)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'))
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          {isAuthenticated && (
            <Route path="/polling" element={<PollingPage />} />
          )}
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          {isAdmin && <Route path="/admin/*" element={<AdminPage />} />}
          <Route path="/result" element={<ResultPage />} />
          {!isAuthenticated && <Route path="/login" element={<LoginPage />} />}
          <Route path="/otpverify" element={<OtpVerifyPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
