import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AddCandidate from '../components/admin/AddCandidate'
import CandidateList from '../components/admin/CandidateList'
import ElectionDetails from '../components/ElectionDetails'
import AddVoters from '../components/AddVoters'
import SetElectionState from '../components/SetElectionState'
import SetElectionDetails from '../components/SetElectionDetails'
import AdminNavbar from '../components/admin/AdminNavbar'
import CandidatesPage from './admin/Candidates'

const AdminPage = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route index element={<ElectionDetails />} />
        <Route path="/candidates" element={<CandidatesPage />} />
      </Routes>
    </>
  )
}

export default AdminPage
