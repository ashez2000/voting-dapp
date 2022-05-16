import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminNavbar from '../components/admin/AdminNavbar'
import ElectionDetailsPage from './admin/ElectionDetails'
import CandidatesPage from './admin/Candidates'
import VotersPage from './admin/Voters'

const AdminPage = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route index element={<ElectionDetailsPage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/voters" element={<VotersPage />} />
      </Routes>
    </>
  )
}

export default AdminPage
