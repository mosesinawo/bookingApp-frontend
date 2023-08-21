import "./navbar.css"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector(state => state.user)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">lamabooking</span>
        </Link>
        <div className="navItems">
          {user ? user.username : (<>
            <button className="navButton">Register</button>
            <button className="navButton">
              <Link to="/login">Login</Link>
              </button></>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar