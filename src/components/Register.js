import React, { useState } from "react";
import "./Register.css"; // Make sure to create and link your CSS file
import { Link } from "react-router-dom";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    reEnterPassword: "",
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
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const register = () => {
    const { name, number, email, password, reEnterPassword } = user;
    if (name && number && email && password && password === reEnterPassword) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => {
          console.log(res);
          // Display a success alert
          window.alert("You have successfully registered. Please login now!");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <nav className="main-navbar">
        <div className="logo">
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/Home">HOME</Link>
            </li>
            <li
              className={
                showDropdown ? "course-dropdown active" : "course-dropdown"
              }
              onClick={toggleDropdown}
            >
              <span>COURSES</span>
              <ul className="course-list">
                <li>
                  <a href="#">MY COURSES</a>
                </li>
                <li>
                <a><Link to='/Blogs'>ALL COURSES</Link></a>                </li>
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
              <Link to="/Login">LOGIN</Link>
            </li>
            <li>
              <Link to="/Profile">ACCOUNT</Link>
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

      <div className="regcontainer">
        <div className="register">
          <h1>Register</h1>
          <input
            className="inp"
            type="text"
            name="name"
            value={user.name}
            placeholder="Your Name"
            onChange={handleChange}
          ></input>

          <input
            className="inp"
            type="tel"
            name="number"
            value={user.number}
            placeholder="Your Number"
            onChange={handleChange}
          ></input>

          <input
            className="inp"
            type="text"
            name="email"
            value={user.email}
            placeholder="Your Email"
            onChange={handleChange}
          ></input>

          <input
            className="inp"
            type="password"
            name="password"
            value={user.password}
            placeholder="Your Password"
            onChange={handleChange}
          ></input>

          <input
            className="inp"
            type="password"
            name="reEnterPassword"
            value={user.reEnterPassword}
            placeholder="Re-enter Password"
            onChange={handleChange}
          ></input>

          <div className="button" onClick={register}>
            Register
          </div>
          <div>or</div>
          <div className="button1">
            <Link to="/Home">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
