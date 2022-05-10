import React from 'react'

import AddCandidate from '../components/AddCandidate'
import CandidateList from '../components/CandidateList'
import ElectionDetails from '../components/ElectionDetails'

const AdminPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <AddCandidate />
          <hr />
          <CandidateList />
        </div>
        <div className="col-6">
          <ElectionDetails />
        </div>
      </div>
    </div>
  )
}

export default AdminPage
