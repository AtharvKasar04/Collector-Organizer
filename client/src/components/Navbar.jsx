import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate('/');
  }

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <div className="logoDiv">
          <h2 className="logo">Collectory</h2>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "line1" : ""}`}></div>
        <div className={`line ${menuOpen ? "line2" : ""}`}></div>
        <div className={`line ${menuOpen ? "line3" : ""}`}></div>
      </div>

      <div className={`navbarRight ${menuOpen ? "open" : ""}`}>
        <div className="navLinks">
          <Link to="/recent-collections" className="nav-link">
            Home
          </Link>
          <Link to="/collection" className="nav-link">
            Collection
          </Link>
        </div>

        <button className="logoutButton" onClick={handleLogout}>Logout</button>

        {/* <div className="profile">
          <div className="text">
            <h5>Atharv Kasar</h5>
            <button>View Profile</button>
          </div>
          <div className="profileIcon"></div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
