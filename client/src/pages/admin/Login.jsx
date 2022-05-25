import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { API_URL } from '../../const'
import { AuthContext } from '../../context/AuthContext'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const { setAdmin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(`${API_URL}/auth/admin`, { password })
      setAdmin()
      localStorage.setItem('admin', true)
      navigate('/admin')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <input className="btn btn-primary" type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
