import React from 'react'
import { Link } from 'react-router-dom'

const NavCard = () => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div
        className="portfolio-item mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#portfolioModal1"
      >
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <span>Add</span>
          </div>
        </div>
        <img className="img-fluid" src="/img/cabin.png" alt="..." />
      </div>
    </div>
  )
}

const AdminNavbar = () => {
  return (
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <NavCard />
            <NavCard />
            <NavCard />
          </div>
        </div>
      </section>
      <ul className="nav justify-content-center mb-3 d-none">
        <li className="nav-item">
          <Link to="/admin" className="nav-link fw-bold fs-5">
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
      </ul>
    </>
  )
}

export default AdminNavbar
