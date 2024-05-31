

import './counselling.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';



const Counselling = () => {
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
    <nav className='main-navbar'>
        {/* 1st logo */}
        <div className='logo'>
          <h2>
            <span>S</span>aarthi
          </h2>
        </div>

        {/* 2nd menu part */}
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
            <Link to='/Home'>HOME</Link>
            </li>
            <li
              className={showDropdown ? 'course-dropdown active' : 'course-dropdown'}
              onClick={toggleDropdown}
            >
              <span>COURSES</span>
              <ul className='course-list'>
                <li>
                  <a href='#'>MY COURSES</a>
                </li>
                <li>
                  <a href='#'>ALL COURSES</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'> COMMUNITY </a>
            </li>
            <li>
            <Link to='/Counselling'>COUNSELLING</Link>
            </li>
          </ul>
        </div>

        {/* 3rd part - Login/signup & Account */}
        <div className='Account-link'>
          <ul className='Account-link-desktop'>
            <li>
              <Link to='/AboutUs'>ABOUT US</Link>
            </li>
            <li>
              <Link to='/Signup'>SIGNUP/LOGIN</Link>
            </li>
            <li>
              <a href='/Profile'> ACCOUNT </a>
            </li>
            <div className='account-logo' href='#'>
              <a href='#'>
                <VscAccount />
              </a>
            </div>
          </ul>

          {/* Hamburger Menu start */}
          <div className='hamburger-menu'>
            <a href='#' onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>





     
      <div className="academic-videos-section">
        <h2>COUNSELLING SECTION </h2>
        <div className="video-list">
          <div className="video-item">
            <a href="#">Counselling Video 1</a>
          </div>
          <div className="video-item">
            <a href="#">Counselling Video 2</a>
          </div>
          <div className="video-item">
            <a href="#">Counselling Video 3</a>
          </div>
          <div className="video-item">
            <a href="#">Counselling Video 4</a>
          </div>
          <div className="video-item">
            <a href="#">Counselling Video 5</a>
          </div>
          <div className="video-item">
            <a href="#">Counselling Video 6</a>
          </div>
        </div>
      </div>

  </div>
  )
}

export default Counselling ;