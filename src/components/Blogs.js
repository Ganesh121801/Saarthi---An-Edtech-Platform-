import React, { useState } from 'react';
import './Blogs.css';
import BlogPost from './BlogPost';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';

const blogPosts = [
  {
    id: 1,
    title: 'First Video Lecture',
    image: 'image1.jpg',
    description: 'This is the description for Blog Post 1.',
    link: 'https://example.com/link1', // Add an external link for Blog Post 1
  },
  {
    id: 2,
    title: 'Second Video Lecture ',
    image: 'image2.jpg',
    description: 'This is the description for Blog Post 2.',
    link: 'https://example.com/link2', // Add an external link for Blog Post 2
  },
  {
    id: 3,
    title: 'Third Video Lecture',
    image: 'image3.jpg',
    description: 'This is the description for Blog Post 3.',
    link: 'https://example.com/link3', // Add an external link for Blog Post 3
  },
  {
    id: 4,
    title: 'Fourth Video Lecture',
    image: 'image4.jpg',
    description: 'This is the description for Blog Post 4.',
    link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmailrelay.com%2Fen%2Fblog%2F2018%2F03%2F27%2Fwhat-is-a-blog-and-what-is-it-for%2F&psig=AOvVaw3Z-H_8mIFzHBQVOGoAZsfU&ust=1698520511170000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC9rJz4loIDFQAAAAAdAAAAABAE', // Add an external link for Blog Post 4
  },
];



  // Add more blog posts as needed


function Blogs() {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  // You should define the showMediaIcons and showDropdown states and functions here
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setUserAuthenticated(false);
  };

  return (
    <div className="App">
      <nav className="main-navbar">
        <div className="logo">
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>
        <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
          <ul>
            <li>
            <Link to="/Home">HOME</Link>

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
              <a href='#'> COMMUNITY </a>
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
            <li>
              <Link to={userAuthenticated ? '/logout' : '/Login'}>
                {userAuthenticated ? 'LOGOUT' : 'LOGIN'}
              </Link>
            </li>
            <li>
              <Link className='account-logo' to='/Profile'>
                ACCOUNT <a href='#'><VscAccount /></a>
              </Link>
            </li>
          </ul>
          <div className='hamburger-menu'>
            <a href='#' onClick={toggleMediaIcons}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
