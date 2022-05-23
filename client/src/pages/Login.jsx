import React from 'react'

import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === '') {
      alert('Please enter all fields', 'danger')
    } else {
    }

    setEmail('')
  }

  return (
    <div className="row">
      <div className="col-6">
        <img
          className="img-fluid"
          src="/img/login.jpg"
          alt="login illustration"
        />
      </div>
      <div className="col-6 mt-5">
        <h4 className="text-center mb-3 fw-bold fs-3">Login</h4>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="User ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <input className="form-control" type="date" />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
