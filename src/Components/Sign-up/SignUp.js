import React from "react";
import "./SignUp.css";
import logo from "../../images/New folder/logo2.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup-container container">
      <div className="signup-form">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <input type="text" name="name" id="" placeholder="Your Name" />
          <br />
          <input type="email" name="email" id="" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
          />
          <br />
          <p className="redirect">
            Have an account? <Link to="/login">Login</Link>
          </p>
          <input className="" type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
