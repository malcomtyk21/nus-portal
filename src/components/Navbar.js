import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar({ user }) {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {user ? (
        <>
          <Link to="/academics">Academics</Link>
          <Link to="/admission">Admission</Link>
          <span className="user-email">{user.email}</span>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;