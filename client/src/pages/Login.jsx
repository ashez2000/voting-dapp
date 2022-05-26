import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { API_URL } from '../const'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email === '') {
      alert('Please enter all fields', 'danger')
    } else {
      const dob = startDate.toLocaleDateString('en-CA')
      try {
        const res = await axios.post(`${API_URL}/auth/login`, { email, dob })
        localStorage.setItem('otpToken', res.data.otpToken)
        navigate('/otpverify')
      } catch (err) {
        console.error('Failed to Login')
      }
    }

    setEmail('')
  }

  return (
    <div className="row">
      <div className="col-6">
        <img
          className="img-fluid mt-5"
          src="/img/login.svg"
          alt="login illustration"
        />
      </div>
      <div className="col-6 mt-5">
        <h4 className="text-center mb-3 fw-bold fs-3">Login</h4>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
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
