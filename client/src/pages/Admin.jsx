import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminNavbar from '../components/admin/AdminNavbar'
import ElectionDetailsPage from './admin/ElectionDetails'
import CandidatesPage from './admin/Candidates'
import VotersPage from './admin/Voters'

import { AuthContext } from '../context/AuthContext'
import GuidelinesPage from './admin/Guidelines'

const AdminPage = () => {
  const { isAdmin } = useContext(AuthContext)

  return (
    <>
      <AdminNavbar />
      <Routes>
        {isAdmin && <Route index element={<GuidelinesPage />} />}
        {isAdmin && <Route path="/details" element={<ElectionDetailsPage />} />}
        {isAdmin && <Route path="/candidates" element={<CandidatesPage />} />}
        {isAdmin && <Route path="/voters" element={<VotersPage />} />}
      </Routes>
    </>
  )
}

export default AdminPage
