import React, { useContext, useState } from 'react'
import { ContractContext } from '../context/ContractContext'

const AddCandidate = () => {
  const { electionContract, web3 } = useContext(ContractContext)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods
        .addCandidate(name, address)
        .send({ from: accounts[0] })
      alert('Candidate added successfully')
    } catch (err) {
      alert('Add candidate failed')
      console.error(err)
    }

    setName('')
    setAddress('')
  }

  if (electionContract === null) {
    return <div>Loading</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input type="submit" value="Add candidate" />
    </form>
  )
}

export default AddCandidate
