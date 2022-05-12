import React, { createContext, useContext, useEffect, useState } from 'react'
import { ContractContext } from './ContractContext'

export const ElectionContext = createContext({})

export const ElectionProvider = (props) => {
  const { electionContract } = useContext(ContractContext)

  const getCandidateList = async () => {
    let error = null
    let response = []

    try {
      // fetching candidates lt
      response = await electionContract.methods.getCandidates().call()
    } catch (err) {
      error = err
    }

    return { candidateList: response, error }
  }

  const getElectionStatus = async () => {
    let error = null
    let response = []

    try {
      response = await electionContract.methods.getElectionStatus().call()
    } catch (err) {
      error = err
    }

    return { electionStatus: response, error }
  }

  const value = {
    getCandidateList,
    getElectionStatus,
  }

  return (
    <ElectionContext.Provider value={value}>
      {props.children}
    </ElectionContext.Provider>
  )
}
