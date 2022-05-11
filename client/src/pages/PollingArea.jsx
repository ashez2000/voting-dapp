import React, { useContext, useEffect, useState } from 'react'
import VoteCard from '../components/VoteCard'
import { ContractContext } from '../context/ContractContext'

const PollingPage = () => {
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
      <h2 className="fw-bold mb-3">Vote for your candidate</h2>
      <div className="row flex">
        {candidateList.map((c) => (
          <VoteCard key={c[0]} candidateName={c[1]} candidateId={c[0]} />
        ))}
      </div>
    </div>
  )
}

export default PollingPage
