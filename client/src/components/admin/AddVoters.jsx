import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { ContractContext } from '../../context/ContractContext'

import { API_URL } from '../../const'

const AddVoters = () => {
  const { electionContract, web3 } = useContext(ContractContext)
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`${API_URL}/auth/users`)
      setUserList(res.data.users)
    }

    fetchUsers()
  }, [])

  const addVoters = async () => {
    const users = userList.map((u) => u.ethAccount)

    try {
      const accounts = await web3.eth.getAccounts()
      await electionContract.methods
        .addVoters(users)
        .send({ from: accounts[0] })
      alert('Voters added successfully')
    } catch (err) {
      alert('Adding voters failed')
      console.error(err)
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={addVoters}>
          Import Voters
        </button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((c) => (
              <tr key={c._id}>
                <td>{c.username}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddVoters
