import React from 'react'

import AddCandidate from '../components/AddCandidate'
import CandidateList from '../components/CandidateList'
import ElectionDetails from '../components/ElectionDetails'
import AddVoters from '../components/AddVoters'
import SetElectionState from '../components/SetElectionState'

const AdminPage = () => {
  return (
    <div>
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
      </div>
    </div>
  )
}

export default AdminPage
