import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './bootstrap.min.css'
import './index.css'
import App from './App'

import { ContractProvider } from './context/ContractContext'

ReactDOM.render(
  <BrowserRouter>
    <ContractProvider>
      <App />
    </ContractProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
