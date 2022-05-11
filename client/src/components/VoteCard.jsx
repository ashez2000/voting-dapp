import React, { useState, useContext } from 'react'
import { ContractContext } from '../context/ContractContext'

const VoteCard = ({ candidateName, candidateId }) => {
  const { web3, electionContract } = useContext(ContractContext)
  const [hidden, setHidden] = useState(true)

  const hiddenClass = hidden ? 'd-none' : 'd-flex'
  const toggleHidden = () => setHidden((s) => !s)

  const vote = async (id) => {
    try {
      const accounts = await web3.eth.getAccounts()
      await electionContract.methods.vote(id).send({ from: accounts[0] })
      alert('Voted Successfully')
    } catch (err) {
      alert('Vote Failed')
      console.error(err)
    }
  }

  return (
    <div className="col">
      <div className="card p-2" style={{ maxWidth: '20rem' }}>
        <p className="text-center">{candidateName}</p>
        <button className="btn btn-primary" onClick={toggleHidden}>
          Vote
        </button>

        <div className={`btn-group mt-1 ${hiddenClass}`}>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              vote(candidateId)
              toggleHidden()
            }}
          >
            Yes
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={toggleHidden}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default VoteCard
