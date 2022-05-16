import React from 'react'

import AddCandidate from '../components/AddCandidate'
import CandidateList from '../components/CandidateList'
import ElectionDetails from '../components/ElectionDetails'
import AddVoters from '../components/AddVoters'
import SetElectionState from '../components/SetElectionState'
import SetElectionDetails from '../components/SetElectionDetails'
import AdminNavbar from '../components/admin/AdminNavbar'

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="row">
        <div className="col-6">
          <AddCandidate />
          <hr />
          <CandidateList />
          <hr />
          <AddVoters />
        </div>
        <div className="col-6">
          <ElectionDetails />
        </div>
      </div>
      <hr />
      <div className="row">
        <SetElectionState />
        <hr />
        <SetElectionDetails />
      </div>
    </div>
  )
}

export default AdminPage
