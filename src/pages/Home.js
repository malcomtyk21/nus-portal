import logo from "../assets/nus-logo.png";

function Home() {
  return (
    <div>
      <img src={logo} alt="NUS logo" className="logo" />
      <p>NUS is a leading research university in Asia</p>
    </div>
  );
}

export default Home;