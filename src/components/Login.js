import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:9002/login", user)
      .then((res) => {
        console.log(res.data);
        // You can handle the response here

        // Display a success alert
        window.alert("Login Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", user.email, user.password);
    login();
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const handleGoogleLogin = () => {
    console.log("Continue with Google clicked");
  };

  const handleFacebookLogin = () => {
    console.log("Continue with Facebook clicked");
  };

  const handleMicrosoftLogin = () => {
    console.log("Continue with Microsoft clicked");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  return (
    <div>
      <nav className="main-navbar">
        <div className="logo">
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <Link to="/Home">HOME</Link>
            </li>
            <li className={showDropdown ? "course-dropdown active" : "course-dropdown"} onClick={toggleDropdown}>
              <span>COURSES</span>
              <ul className="course-list">
                <li>
                  <a href="#">MY COURSES</a>
                </li>
                <li>
                <a><Link to='/Blogs'>ALL COURSES</Link></a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">COMMUNITY</a>
            </li>
            <li>
              <Link to="/Counselling">COUNSELLING</Link>
            </li>
          </ul>
        </div>

        <div className="Account-link">
          <ul className="Account-link-desktop">
            <li>
              <Link to="/AboutUs">ABOUT US</Link>
            </li>
            <li>
              <Link to="/Logout">LOGIN</Link>
            </li>
            <li>
              <Link to="/Homel">ACCOUNT</Link>
            </li>
            <div className="account-logo" href="#">
              <a href="#">
                <VscAccount />
              </a>
            </div>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={user.rememberMe}
                onChange={() =>
                  setUser({
                    ...user,
                    rememberMe: !user.rememberMe,
                  })
                }
              />
              Remember Me
            </label>
          </div>
          <div className="form-group">
          <Link to="/Homel">
    <button type="submit">LOGIN</button>
  </Link>
          </div>
          <div className="form-group">
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password
            </button>
          </div>
          <div className="form-group">
            <p>
              Not a member!{" "}
              <strong>
                <Link to="/Register">Register</Link>
              </strong>{" "}
            </p>
          </div>
        </form>
        {/* <div className="social-login">
          <button className="google" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          <button className="Meta" onClick={handleFacebookLogin}>
            Continue with Meta
          </button>
          <button className="Microsoft" onClick={handleMicrosoftLogin}>
            Continue with Microsoft
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Login;
