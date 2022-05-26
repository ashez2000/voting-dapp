import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const AdminNavbar = () => {
  const { isAdmin, logoutAdmin } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <ul className="nav justify-content-center mb-3">
        <li className="nav-item">
          <Link to="/admin" className="nav-link fw-bold fs-5">
            Guidelines
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/details" className="nav-link fw-bold fs-5">
            Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/candidates" className="nav-link fw-bold fs-5">
            Candidates
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/voters" className="nav-link fw-bold fs-5">
            Voters
          </Link>
        </li>
        {isAdmin && (
          <li className="nav-item">
            <span
              className="nav-link fw-bold fs-5"
              onClick={() => {
                logoutAdmin()
                navigate('/')
              }}
            >
              Logout
            </span>
          </li>
        )}
      </ul>
    </>
  )
}

export default AdminNavbar
