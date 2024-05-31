
import './AboutUs.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';



const AboutUs = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  return ( 


<div>

<nav className="main-navbar">
        {/* 1st logo */}
        <div className="logo">
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>

        {/* 2nd menu part */}
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
              <a href="#"> COMMUNITY </a>
            </li>
            <li>
              <Link to="/Counselling">COUNSELLING</Link>
            </li>
          </ul>
        </div>

        {/* 3rd part - Login/signup & Account */}
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

          {/* Hamburger Menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>



    <section className="about-us">
      <div className="about-us-content">
  <h1>Welcome to Saarathi</h1>
  <p>
    Saarathi is a project dedicated to [briefly describe the purpose or mission of Saarathi].
  </p>
  <h2>Our Team</h2>
  <ul className="team-list">
    <li>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU" alt="Team Member 2" />
      <h3>Gaurav Sharma</h3>
      <p>DEVELOPER</p>
    </li>
    <li>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU" alt="Team Member 2" />
      <h3>Vinayak Sanap</h3>
      <p>DEVELOPER</p>
    </li>
    <li>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU" alt="Team Member 3" />
      <h3>Ganesh More</h3>
      <p>DEVELOPER</p>
    </li>
  </ul>
  <h2>Our History</h2>
  <p>
    Saarathi was founded in 2023 by . Since then, we have been on a mission to solve root cause of unemployment.
  </p>
  <p>
    We are doing a survey for further understanding of student experience on Ed-Tech platforms. The link is as follows:<br/>
    <a href="https://forms.gle/9ioS8TEGWUDqeHLs7">A Survey towards betterment of education</a>
  </p>
  <h2>Contact Us</h2>
  <p>
    Feel free to reach out to us at shargaursat85@gmail.com.
  </p>
</div>

    </section>
    </div>
  );
};

export default AboutUs;

