import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ContractProvider } from './context/ContractContext'

ReactDOM.render(
  <ContractProvider>
    <App />
  </ContractProvider>,
  document.getElementById('root')
)
