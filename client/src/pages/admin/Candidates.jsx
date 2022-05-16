import React from 'react'
import AddCandidate from '../../components/admin/AddCandidate'
import CandidateList from '../../components/admin/CandidateList'

const CandidatesPage = () => {
  return (
    <div className="row">
      <div className="col-4">
        <AddCandidate />
      </div>
      <div className="col">
        <CandidateList />
      </div>
    </div>
  )
}

export default CandidatesPage
