import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'

import { ContractProvider } from './context/ContractContext'
import { AuthProvider } from './context/AuthContext'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ContractProvider>
        <App />
      </ContractProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
