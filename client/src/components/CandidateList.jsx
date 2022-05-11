import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContractContext'

const CandidateList = () => {
  const { electionContract } = useContext(ContractContext)
  const [candidateList, setCandidateList] = useState([])

  useEffect(() => {
    const init = async () => {
      try {
        const response = await electionContract.methods.getCandidates().call()
        setCandidateList(response)
      } catch (err) {
        console.error(err)
      }
    }

    init()
  }, [electionContract])

  if (electionContract === null) {
    return <div>Loadin</div>
  }

  return (
    <div>
      <h2 className="fs-2 fw-bold text-center">CandidatesList</h2>
      <ul className="list-group list-group-flush">
        {candidateList.map((c) => (
          <li className="list-group-item" key={c[0]}>
            {c[0]} | {c[1]} | {c[2]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CandidateList
