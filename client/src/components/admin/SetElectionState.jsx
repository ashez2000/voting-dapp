import React, { useContext } from 'react'
import { ContractContext } from '../../context/ContractContext'

const SetElectionState = () => {
  const { electionContract, web3 } = useContext(ContractContext)

  const startElection = async () => {
    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods.startElection().send({ from: accounts[0] })
      alert('Election Started Successfully')
    } catch (err) {
      alert('Starting Election Failed')
      console.error(err)
    }
  }

  const endElection = async () => {
    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods.endElection().send({ from: accounts[0] })
      alert('Election Ended Successfully')
    } catch (err) {
      alert('Ending Election Failed')
      console.error(err)
    }
  }

  if (electionContract === null) {
    return <div>Loadin</div>
  }

  return (
    <div className="d-grid gap-3">
      <button className="btn btn-lg btn-success" onClick={startElection}>
        START Election
      </button>
      <button className="btn btn-lg btn-danger" onClick={endElection}>
        END Election
      </button>
    </div>
  )
}

export default SetElectionState
