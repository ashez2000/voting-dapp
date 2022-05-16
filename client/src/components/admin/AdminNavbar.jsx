import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <ul className="nav justify-content-center mb-3">
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          Details
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin/candidates" className="nav-link">
          Candidates
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/admin" className="nav-link">
          Voters
        </Link>
      </li>
    </ul>
  )
}

export default AdminNavbar
