import React, { useContext, useEffect, useState } from 'react'

import { ContractContext } from '../context/ContractContext'

const ElectionDetails = () => {
  const { electionContract, electionDetail } = useContext(ContractContext)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await electionContract.methods
          .getElectionStatus()
          .call()
        setStatus(response)
      } catch (err) {
        console.error(err)
      }
    }

    fetch()
  }, [electionContract])

  const dispayStatus = (s) => {
    if (s === '0') {
      return (
        <p className="fs-5">
          Election Status : <span className="badge bg-warning"> INIT </span>
        </p>
      )
    }
    if (s === '1') {
      return (
        <p className="fs-5">
          Election Status : <span className="badge bg-success"> LIVE </span>
        </p>
      )
    }

    return (
      <p className="fs-5">
        Election Status : <span className="badge bg-danger"> OVER </span>
      </p>
    )
  }

  return (
    <div>
      <h2 className="fs-2 fw-bold">Details</h2>
      <div className="d-flex flex-column ">
        <div>
          <p className="fs-5">Title : {electionDetail.title}</p>
        </div>
        <div>
          <p className="fs-5">Organization : {electionDetail.org}</p>
        </div>
        <div>{dispayStatus(status)}</div>
      </div>
    </div>
  )
}

export default ElectionDetails
