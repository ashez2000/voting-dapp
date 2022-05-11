import React, { useContext, useState } from 'react'
import { ContractContext } from '../context/ContractContext'

import voters from '../data/voters'

const AddVoters = () => {
  const { electionContract, web3 } = useContext(ContractContext)

  const addVoters = async () => {
    try {
      const accounts = await web3.eth.getAccounts()

      await electionContract.methods
        .addVoters(voters)
        .send({ from: accounts[0] })
      alert('Voters added successfully')
    } catch (err) {
      alert('Adding voters failed')
      console.error(err)
    }
  }

  return (
    <div>
      <button className="btn btn-light btn-lg" onClick={addVoters}>
        Import Voters
      </button>
    </div>
  )
}

export default AddVoters
