import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'
import VotersPage from './pages/VotersPage'
import CandidatesPage from './pages/CandidatesPage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/candidates" element={<CandidatesPage />} />
          <Route path="/voters" element={<VotersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
