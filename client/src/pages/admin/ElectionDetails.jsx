import React from 'react'

import ElectionDetails from '../../components/ElectionDetails'
import SetElectionState from '../../components/admin/SetElectionState'
import SetElectionDetails from '../../components/admin/SetElectionDetails'

const ElectionDetailsPage = () => {
  return (
    <div className="row">
      <div className="col-4 border py-3">
        <SetElectionDetails />
        <hr />
        <SetElectionState />
      </div>
      <div className="col">
        <ElectionDetails />
      </div>
    </div>
  )
}

export default ElectionDetailsPage
