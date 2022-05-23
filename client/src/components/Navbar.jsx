import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { logout, isAuthenticated } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <span className="navbar-brand fw-bold">Voting Dapp</span>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/polling" className="nav-link">
                  Polling Area
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link to="/result" className="nav-link">
                  Result
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                  Logout
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
