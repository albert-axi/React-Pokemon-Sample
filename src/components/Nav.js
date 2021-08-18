import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Nav = () => {
 
  const theme = useContext(ThemeContext)

  return (
    <nav className="nav-bar" style={{ background: theme.background, color: theme.foreground }}>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokemon</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav