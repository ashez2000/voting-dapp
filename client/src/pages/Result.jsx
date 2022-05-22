import React, { useContext, useEffect, useState } from 'react'
import { ContractContext } from '../context/ContractContext'

const ResultPage = () => {
  const { electionContract } = useContext(ContractContext)
  const [candidateList, setCandidateList] = useState([])
  const [status, setStatus] = useState('0')

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
        const res = await electionContract.methods.getElectionStatus().call()
        setStatus(res)
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

  console.log(status)

  if (status !== '2') {
    return (
      <div>
        <h2 className="text-center">No results published.</h2>
      </div>
    )
  } else {
    return <ResultComponent result={result} candidateList={candidateList} />
  }
}

const ResultComponent = ({ result, candidateList }) => {
  return (
    <div>
      <h2 className="fw-bold mb-3">Results</h2>
      <div className="row flex">
        {result(candidateList).length > 1 ? (
          <div className="fs-4">Tie between candidatidates : </div>
        ) : (
          <div className="fs-4">Winner : </div>
        )}

        <ul className="list-group list-group-flush">
          {result(candidateList).map((c) => (
            <li className="list-group-item" key={c[0]}>
              <h3 className="fs-4">{`${c[1]} | ${c[2]} | Votes : ${c[3]}`}</h3>
            </li>
          ))}
        </ul>

        <hr />

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Party</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidateList.map((c) => (
              <tr key={c[0]}>
                <td>{c[1]}</td>
                <td>{c[2]}</td>
                <td>{c[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultPage
