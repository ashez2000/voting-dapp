import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Voting Dapp
        </a>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/polling" className="nav-link" href="#">
                Polling Area
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/result" className="nav-link" href="#">
                Result
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
