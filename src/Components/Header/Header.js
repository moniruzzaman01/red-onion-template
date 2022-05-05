import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/New folder/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <Link to="/login">Login</Link>
        <button onClick={() => navigate("/signup")}>Sign up</button>
      </div>
    </nav>
  );
};

export default Header;
