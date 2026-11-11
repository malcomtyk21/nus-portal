import logo from "../assets/nus-logo.png";

function Home({ user }) {
  return (
    <div>
      {user && <h2>Hi {user.email}</h2>}
      <img src={logo} alt="NUS logo" className="logo" />
      <p>NUS is a leading research university in Asia</p>
    </div>
  );
}

export default Home;
