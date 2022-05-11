import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContractContext'

const ResultPage = () => {
  const { electionContract } = useContext(ContractContext)
  const [candidateList, setCandidateList] = useState([])

  const result = (candidateList) => {
    let temp = []
    let max = 0

    for (let c of candidateList) {
      if (c[3] > max) {
        temp = [c]
        max = c[3]
      } else if (c[3] == max) {
        temp.push(c)
      } else {
      }
    }

    return temp
  }

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
  }, [electionContract])

  if (electionContract === null) {
    return <div>Loadin</div>
  }

  return (
    <div>
      <h2 className="fw-bold mb-3">Vote for your candidate</h2>
      <div className="row flex">
        {result(candidateList).length > 1 ? (
          <div>Tie</div>
        ) : (
          <div>Single Winner</div>
        )}

        <ul className="list-group list-group-flush">
          {result(candidateList).map((c) => (
            <li className="list-group-item" key={c[0]}>
              {`${c[0]} | ${c[1]} | ${c[2]} | Votes: ${c[3]}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResultPage