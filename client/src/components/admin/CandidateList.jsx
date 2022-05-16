import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../../context/ContractContext'

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
      <h2 className="fs-2">Candidates List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
          </tr>
        </thead>
        <tbody>
          {candidateList.map((c) => (
            <tr key={c[0]}>
              <td>{c[1]}</td>
              <td>{c[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CandidateList
