import React, { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../const'

const OtpVerifyPage = () => {
  const [otp, setOtp] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post(`${API_URL}/auth/verifyotp`, {
        otp,
        otpToken: localStorage.getItem('otpToken'),
      })

      console.log(res.data)
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
