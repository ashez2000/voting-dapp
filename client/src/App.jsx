import React, { useEffect, useState } from 'react'

import ElectionContract from './contracts/Election.json'
import getWeb3 from './getWeb3'

const App = () => {
  const [adminAddress, setAdminAddress] = useState('')
  const [web3, setWeb3] = useState(null)

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getWeb3()
        setWeb3(res)

        const networkId = await res.eth.net.getId()
        const deployedNetwork = ElectionContract.networks[networkId]
        const instance = new res.eth.Contract(
          ElectionContract.abi,
          deployedNetwork && deployedNetwork.address
        )

        const response = await instance.methods.getAdmin().call()
        setAdminAddress(response)
      } catch (err) {
        console.log(err)
      }
    }

    init()
  }, [])

  if (web3 === null) {
    return <div>Loagin Web 3</div>
  }

  return (
    <div>
      <h2>Admin Address : {adminAddress}</h2>
    </div>
  )
}

export default App
