import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
