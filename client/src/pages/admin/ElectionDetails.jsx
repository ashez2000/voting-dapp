import React from 'react'

import ElectionDetails from '../../components/ElectionDetails'
import SetElectionState from '../../components/SetElectionState'

const ElectionDetailsPage = () => {
  return (
    <div>
      <ElectionDetails />
      <hr />
      <SetElectionState />
    </div>
  )
}

export default ElectionDetailsPage
