import React from "react";
import "./Login.css";
import logo from "../../images/New folder/logo2.png";

const Login = () => {
  return (
    <div className="login-container container">
      <div className="login-form">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <form action="">
          <input type="email" name="email" id="" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
          />
          <br />
          <input className="" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
