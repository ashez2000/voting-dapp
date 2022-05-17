import React, { useContext, useState } from 'react'
import { ContractContext } from '../../context/ContractContext'

const SetElectionDetails = () => {
  const { electionContract, web3 } = useContext(ContractContext)

  const [title, setTitle] = useState('')
  const [org, setOrg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods
        .setElectionDetails(title, org)
        .send({ from: accounts[0] })
      alert('ElectionDetails Set Successfully')
    } catch (err) {
      alert('ElectionDetails SET Failed')
      console.error(err)
    }

    setTitle('')
    setOrg('')
  }

  if (electionContract === null) {
    return <div>Loadin</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Election Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Election Organization"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
      </div>

      <div class="d-grid mb-3">
        <input className="btn btn-primary" type="submit" value="Set Detail" />
      </div>
    </form>
  )
}

export default SetElectionDetails
