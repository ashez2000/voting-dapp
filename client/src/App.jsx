import React, { useContext, useEffect, useState } from 'react'
import AddCandidate from './components/AddCandidate'
import CandidateList from './components/CandidateList'
import { ContractContext } from './context/ContractContext'

const App = () => {
  const { electionContract } = useContext(ContractContext)

  const [adminAddress, setAdminAddress] = useState('')

  useEffect(() => {
    const init = async () => {
      try {
        const response = await electionContract.methods.getAdmin().call()
        setAdminAddress(response)
      } catch (err) {
        console.error(err)
      }
    }

    init()
  }, [electionContract])

  if (electionContract === null) {
    return <div>Loagin</div>
  }

  return (
    <div>
      <h2>Admin Address : {adminAddress}</h2>
      <CandidateList />
      <AddCandidate />
    </div>
  )
}

export default App
