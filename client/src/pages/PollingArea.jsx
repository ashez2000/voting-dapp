import React, { useContext, useEffect, useState } from 'react'
import VoteCard from '../components/VoteCard'
import { ContractContext } from '../context/ContractContext'

const PollingPage = () => {
  const { electionContract } = useContext(ContractContext)
  const [candidateList, setCandidateList] = useState([])
  const [status, setStatus] = useState('0')

  useEffect(() => {
    const init = async () => {
      try {
        const response = await electionContract.methods.getCandidates().call()
        const res = await electionContract.methods.getElectionStatus().call()
        setStatus(res)
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

  console.log(candidateList)

  if (status !== '1') {
    return <div>Voting is disabled</div>
  }

  return (
    <div>
      <h2 className="fw-bold mb-3">Vote for your candidate</h2>
      <div className="row flex">
        {candidateList.map((c) => (
          <VoteCard
            key={c[0]}
            candidateId={c[0]}
            candidateName={c[1]}
            candidateParty={c[2]}
          />
        ))}
      </div>
    </div>
  )
}

export default PollingPage
