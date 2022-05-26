import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../const'

import { AuthContext } from '../context/AuthContext'

const OtpVerifyPage = () => {
  const [otp, setOtp] = useState('')
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`${API_URL}/auth/verifyotp`, {
        otp,
        otpToken: localStorage.getItem('otpToken'),
      })

      setUser(res.data.user)
      navigate('/')
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
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </div>
          <div className="d-grid">
            <input
              className="btn btn-success"
              type="submit"
              value="verify OTP"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default OtpVerifyPage
