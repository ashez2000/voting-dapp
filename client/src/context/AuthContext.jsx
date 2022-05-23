import React, { createContext, useReducer } from 'react'

const Types = {
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
}

const INITIAL_STATE = {
  isAuthenticated: false,
  user: localStorage.getItem('user'),
  setUser: () => {},
  logout: () => {},
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        isAuthenticated: true,
        user: action.payload,
      }
    case Types.LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      }
    default:
      return state
  }
}

export const AuthContext = createContext({
  isAuthenticated: false,
  user: localStorage.getItem('user'),
  setUser: () => {},
  logout: () => {},
})

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  const setUser = (user) => {
    localStorage.setItem('user', user)
    dispatch({ type: Types.SET_USER, payload: user })
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: Types.LOGOUT })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        setUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
