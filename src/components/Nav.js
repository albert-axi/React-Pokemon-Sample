import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav