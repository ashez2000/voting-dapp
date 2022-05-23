import React, { useContext, useEffect, useState } from 'react'

import { ContractContext } from '../context/ContractContext'

const ElectionDetails = () => {
  const { electionContract } = useContext(ContractContext)
  const [status, setStatus] = useState('')
  const [detail, setDetail] = useState({})

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await electionContract.methods
          .getElectionStatus()
          .call()
        setStatus(response)
        const res = await electionContract.methods.getElectionDetails().call()
        setDetail(res)
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
      <h2 className="fs-2 fw-bold text-primary">Election Details</h2>
      <div className="d-flex flex-column ">
        <div>
          <p className="fs-5">Title : {detail && detail[0]}</p>
        </div>
        <div>
          <p className="fs-5">Organization : {detail && detail[1]}</p>
        </div>
        <div>{dispayStatus(status)}</div>
      </div>
    </div>
  )
}

export default ElectionDetails
