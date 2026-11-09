import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  // If no one is logged in, send the user to the login page
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "Please log in to view this page." }}
      />
    );
  }
  return children;
}

export default ProtectedRoute;