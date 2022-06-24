import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <div className="container">
      <ul className="nav nav-tabs nav-fill mb-5">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/details">Details</NavbarLink>
        <NavbarLink to="/candidates">Candidates</NavbarLink>
        <NavbarLink to="/voters">Voters</NavbarLink>
      </ul>
    </div>
  )
}

const NavbarLink = ({ to, children }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `nav-link active` : `nav-link`
        }
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavLinks
