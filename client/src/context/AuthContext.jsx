import React, { createContext, useReducer } from 'react'

const Types = {
  SET_USER: 'SET_USER',
  LOGOUT: 'LOGOUT',
  SET_ADMIN: 'SET_ADMIN',
  LOGOUT_ADMIN: 'LOGOUT_ADMIN',
}

const INITIAL_STATE = {
  isAuthenticated: false,
  isAdmin: localStorage.getItem('admin'),
  user: localStorage.getItem('user'),
  setUser: () => {},
  logout: () => {},
  setAdmin: () => {},
  logoutAdmin: () => {},
}

const AuthReducer = (state, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      }
    case Types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    case Types.SET_ADMIN:
      return {
        ...state,
        isAdmin: true,
      }
    case Types.LOGOUT_ADMIN:
      return {
        ...state,
        isAdmin: false,
      }
    default:
      return state
  }
}

export const AuthContext = createContext(INITIAL_STATE)

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

  const setAdmin = () => {
    dispatch({ type: Types.SET_ADMIN })
  }
  const logoutAdmin = () => {
    localStorage.removeItem('admin')
    dispatch({ type: Types.LOGOUT_ADMIN })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        isAdmin: state.isAdmin,
        setUser,
        logout,
        setAdmin,
        logoutAdmin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
