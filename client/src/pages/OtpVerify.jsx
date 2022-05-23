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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <input className="btn" type="submit" value="verify" />
      </form>
    </div>
  )
}

export default OtpVerifyPage
