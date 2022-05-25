import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminNavbar from '../components/admin/AdminNavbar'
import ElectionDetailsPage from './admin/ElectionDetails'
import CandidatesPage from './admin/Candidates'
import VotersPage from './admin/Voters'
import AdminLogin from './admin/Login'

import { AuthContext } from '../context/AuthContext'

const AdminPage = () => {
  const { isAdmin } = useContext(AuthContext)

  return (
    <>
      <AdminNavbar />
      <Routes>
        {isAdmin && <Route index element={<ElectionDetailsPage />} />}
        {isAdmin && <Route path="/candidates" element={<CandidatesPage />} />}
        {isAdmin && <Route path="/voters" element={<VotersPage />} />}
      </Routes>
    </>
  )
}

export default AdminPage
