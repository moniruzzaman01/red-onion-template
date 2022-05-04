import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/New folder/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <div className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <Link to="/login">Login</Link>
        <button>Sign up</button>
      </div>
    </nav>
  );
};

export default Header;
