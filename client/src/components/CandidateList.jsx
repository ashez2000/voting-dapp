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
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }

    init()
  }, [])

  if (electionContract === null) {
    return <div>Loadin</div>
  }

  return (
    <div>
      <h2>CandidatesList</h2>
      <ul>
        {candidateList.map((c) => (
          <li key={c[0]}>
            {c[0]}::{c[1]}::{c[2]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CandidateList
