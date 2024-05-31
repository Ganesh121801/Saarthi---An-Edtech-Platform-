import React, { useState } from 'react';
import './Home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import BackToTopButton from './BackToTopButton';

const Home = ({ userAuthenticated, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [videoLinks, setVideoLinks] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const handleStandardClick = (standard, links) => {
    if (selectedStandard === standard) {
      setIsDrawerOpen(false);
      setSelectedStandard(null);
      setVideoLinks([]);
    } else {
      setSelectedStandard(standard);
      setVideoLinks(links);
      setIsDrawerOpen(true);

      window.scrollTo({
        top: document.getElementById('standard-section').offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className='main-navbar'>
        <div className='logo'>
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>
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
                  <a><Link to='/Blogs'>ALL COURSES</Link></a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#'>COMMUNITY</a>
            </li>
            <li>
              <Link to='/Counselling'>COUNSELLING</Link>
            </li>
            <li>
              <Link to='/Quiz'>QUIZ</Link>
            </li>
          </ul>
        </div>
        <div className='Account-link'>
          <ul className='Account-link-desktop'>
            <li>
              <Link to='/AboutUs'>ABOUT US</Link>
            </li>
            {userAuthenticated ? (
              <li>
                <a href='#' onClick={onLogout}>LOGOUT</a>
              </li>
            ) : (
              <li>
                <Link to='/Login'>LOGIN</Link>
              </li>
            )}
            <li>
              <Link to='/Profiles'>ACCOUNT</Link>
            </li>
            <div className='account-logo' href='#'>
              <a href='#'>
                <VscAccount />
              </a>
            </div>
          </ul>
          <div className='hamburger-menu'>
            <a href='#' onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <section className='hero-sections'>
        <div className='start'>
          <p className="welcome-texts">Welcome to</p>
          <h1 className="saarthi-names">SAARATHI !</h1>
        </div>
      </section>
      <br />
      <div className="standard-section" id="standard-section">
        <h1 className='head'>STANDARDS WE TEACH !</h1>
        <div className="standard-list">
          <div className="standard-button" onClick={() => handleStandardClick("8th Standard", [
            "https://youtu.be/xGT82egzQoU?si=wR8ERrKib7YNksXs",
            "https://youtu.be/mLxOVIlb7-k?si=cDDmKzt-96XKimyf",
          ])}>
            <a href="#">8th</a>
          </div>
          <div className="standard-button" onClick={() => handleStandardClick("9th Standard", [
            "https://youtu.be/xGT82egzQoU?si=wR8ERrKib7YNksXs",
            "https://youtu.be/mLxOVIlb7-k?si=cDDmKzt-96XKimyf",
          ])}>
            <a href="#">9th</a>
          </div>
          <div className="standard-button" onClick={() => handleStandardClick("10th Standard", [
            "https://youtu.be/xGT82egzQoU?si=wR8ERrKib7YNksXs",
            "https://youtu.be/mLxOVIlb7-k?si=cDDmKzt-96XKimyf",
          ])}>
            <a href="#">10th</a>
          </div>
          <div className="standard-button" onClick={() => handleStandardClick("11th Standard", [
            "https://youtu.be/xGT82egzQoU?si=wR8ERrKib7YNksXs",
            "https://youtu.be/mLxOVIlb7-k?si=cDDmKzt-96XKimyf",
          ])}>
            <a href="#">11th</a>
          </div>
          <div className="standard-button" onClick={() => handleStandardClick("12th Standard", [
            "https://www.youtube.com/watch?v=VIDEO_ID_7",
            "https://www.youtube.com/watch?v=VIDEO_ID_8",
          ])}>
            <a href="#">12th</a>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="drawer">
          <button onClick={() => setIsDrawerOpen(false)}>Close Drawer</button>
          <h3>{selectedStandard}</h3>
          <div className="video-container">
            {videoLinks.map((link, index) => (
              <iframe
                key={index}
                width="765"
                height="315"
                src={link}
                title={`Demo Video ${index + 1}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ))}
          </div>
        </div>
      )} 
      <br />
      <div className="academic-videos-section">
        <h2>ACADEMIC SECTION</h2>
        <div className="video-list">
          <div className="video-item">
            <a href="#">Academic Video 1</a>
          </div>
          <div className="video-item">
            <a href="#">Academic Video 2</a>
          </div>
          <div className="video-item">
            <a href="#">Academic Video 3</a>
          </div>
          <div className="video-item">
            <a href="#">Academic Video 4</a>
          </div>
          <div className="video-item">
            <a href="#">Academic Video 5</a>
          </div>
          <div className="video-item">
            <a href="#">Academic Video 6</a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h6 className="footer-headings">SAARATHI</h6>
            Revolutionizing The Future!
          </div>
          <div className="footer-section">
            <h6 className="footer-headings">Useful Links</h6>
            <address>
              <p><i className="fas fa-home"></i> Pricing </p>
              <p><i className="fas fa-envelope"></i> Orders</p>
              <p><i className="fas fa-phone"></i> Setting</p>
              <p><i className="fas fa-fax"></i> Help</p>
            </address>
          </div>
          <div className="footer-section">
            <h6 className="footer-headings">Contact</h6>
            <address>
              <p><i className="fas fa-home"></i> MUMBAI 4000025, IN</p>
              <p><i className="fas fa-envelope"></i> Saarthi008@gmail.com</p>
              <p><i className="fas fa-phone"></i> + 91 234 546 23</p>
              <p><i className="fas fa-fax"></i> + 91 234 567 89</p>
            </address>
          </div>
        </div>
        <div className="footer-bottoms">
          <p>&copy; 2023 Saarthi. All rights reserved.</p>
          <BackToTopButton />
        </div>
      </footer>
    </>
  );
};

export default Home;
