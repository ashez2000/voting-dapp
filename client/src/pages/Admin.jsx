import React from 'react'

import AddCandidate from '../components/AddCandidate'
import CandidateList from '../components/CandidateList'

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
          <div class="alert alert-warning" role="alert">
            Status About the Election: <strong>"INIT", "LIVE, "OVER"</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
