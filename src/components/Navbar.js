import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/academics">Academics</Link>
      <Link to="/admission">Admission</Link>
    </nav>
  );
}

export default Navbar;