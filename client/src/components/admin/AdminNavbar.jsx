import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          Details
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          Voters
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          Candidates
        </Link>
      </li>
    </ul>
  )
}

export default AdminNavbar
