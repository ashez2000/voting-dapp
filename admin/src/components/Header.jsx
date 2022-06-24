import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container">
        <span className="navbar-brand">Voting Dapp</span>
        <div>
          <ul className="navbar-nav me-auto mb-b">
            <NavLink to="/details">ConnectWalelt</NavLink>
            <NavLink to="/">Logot</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, children }) => {
  return (
    <li className="nav-item">
      <Link to className="nav-link">
        {children}
      </Link>
    </li>
  )
}

export default Navbar
