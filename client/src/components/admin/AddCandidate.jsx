import React, { useContext, useState } from 'react'
import { ContractContext } from '../../context/ContractContext'

const AddCandidate = () => {
  const { electionContract, web3 } = useContext(ContractContext)
  const [name, setName] = useState('')
  const [party, setParty] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods
        .addCandidate(name, party)
        .send({ from: accounts[0] })

      alert('Candidate added successfully')
    } catch (err) {
      alert('Add candidate failed')
      console.error(err)
    }

    setName('')
    setParty('')
  }

  if (electionContract === null) {
    return <div>Loading</div>
  }

  return (
    <div className="border p-3">
      <h2 className="fs-3 text-center text-primary">Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name of candidate"
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            placeholder="Candidates Party"
            required
          />
        </div>
        <div className="d-grid">
          <input
            className="btn btn-primary"
            type="submit"
            value="Add candidate"
          />
        </div>
      </form>
    </div>
  )
}

export default AddCandidate
