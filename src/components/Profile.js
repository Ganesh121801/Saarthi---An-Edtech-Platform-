// import React from 'react';
// import './profile.css'; // Import the CSS file

// const Profile = () => {
//   return (
//     <div className="profile-container">
//       <h1>Profile Page</h1>
//       <p>Welcome to your profile page. You are not logged in.</p>
//       <p>
//         Here, you can explore some of our features and services. However, for a personalized experience, please
//         <a href="/login">log in</a>.
//       </p>
//     </div>
//   );
// };

// export default Profile;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import './profiles.css';

const Profile = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMediaIcons = () => {
    setShowMediaIcons(!showMediaIcons);
  };

  const profileData = {
    name: 'Gaurav Sharma',
    mobile: '123-456-7890',
    age: 19,
    dateOfBirth: '21 October 2003',
    address: '123 Main St',
    city: 'Mumbai',
    email: 'Gmore@example.com',
    state: 'Maharashtra',
    grade: 'A+',
    gender: 'Male',
  };

  return (
    <div className="profile-page">
      <nav className="main-navbar">
        <div className="logo">
          <h2>
            <span>S</span>aarathi
          </h2>
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <Link to='/Home'>HOME</Link>
            </li>
            <li className={showDropdown ? "course-dropdown active" : "course-dropdown"} onClick={toggleDropdown}>
              <span>COURSES</span>
              <ul className="course-list">
                <li>
                  <a href="#">MY COURSES</a>
                </li>
                <li>
                  <a href="#">ALL COURSES</a>
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
      <div className="profile-container">
        <div className="profile-containers">
          <div className="profile-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU"
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            <h1>{profileData.name}</h1>
            <p>Mobile No: {profileData.mobile}</p>
            <p>Age: {profileData.age}</p>
            <p>Date of Birth: {profileData.dateOfBirth}</p>
            <p>Address: {profileData.address}</p>
            <p>City: {profileData.city}</p>
            <p>Email: {profileData.email}</p>
            <p>State: {profileData.state}</p>
            <p>Grade: {profileData.grade}</p>
            <p>Gender: {profileData.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;





































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { VscAccount } from 'react-icons/vsc';
// import './profile.css';

// export default function Profile() {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const toggleMediaIcons = () => {
//     setShowMediaIcons(!showMediaIcons);
//   };

//   const profileData = {
//     name: 'Gaurav Sharma',
//     mobile: '123-456-7890',
//     age: 19,
//     dateOfBirth: '21 October 2003',
//     address: '123 Main St',
//     city: 'Mumbai',
//     email: 'Gmore@example.com',
//     state: 'Maharashtra',
//     grade: 'A+',
//     gender: 'Male',
//   };

//   return (
//     <div className='profile-page1'>
//      <nav className="main-navbar">
//         {/* 1st logo */}
//         <div className="logo">
//           <h2>
//             <span>S</span>aarathi
//           </h2>
//         </div>

//         {/* 2nd menu part */}
//         <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
//           <ul>
//             <li>
//             <Link to='/Home'>HOME</Link>
//             </li>
//             <li className={showDropdown ? "course-dropdown active" : "course-dropdown"} onClick={toggleDropdown}>
//               <span>COURSES</span>
//               <ul className="course-list">
//                 <li>
//                   <a href="#">MY COURSES</a>
//                 </li>
//                 <li>
//                   <a href="#">ALL COURSES</a>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <a href="#"> COMMUNITY </a>
//             </li>
//             <li>
//               <Link to="/Counselling">COUNSELLING</Link>
//             </li>
//           </ul>
//         </div>

//         {/* 3rd part - Login/signup & Account */}
//         <div className="Account-link">
//           <ul className="Account-link-desktop">
//             <li>
//               <Link to="/AboutUs">ABOUT US</Link>
//             </li>
//             <li>
//               <Link to="/Login">LOGIN</Link>
//             </li>
//             <li>
//               <Link to="/Profile">ACCOUNT</Link>
//             </li>
//             <div className="account-logo" href="#">
//               <a href="#">
//                 <VscAccount />
//               </a>
//             </div>
//           </ul>

//           {/* Hamburger Menu start */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={toggleMediaIcons}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>

//       <div className="profile-container">
//         <div className="profile-containers">
//           <div className="profile-image">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU"
//               alt="Profile"
//             />
//           </div>
//           <div className="profile-details">
//             <h1>{profileData.name}</h1>
//             <p>Mobile No: {profileData.mobile}</p>
//             <p>Age: {profileData.age}</p>
//             <p>Date of Birth: {profileData.dateOfBirth}</p>
//             <p>Address: {profileData.address}</p>
//             <p>City: {profileData.city}</p>
//             <p>Email: {profileData.email}</p>
//             <p>State: {profileData.state}</p>
//             <p>Grade: {profileData.grade}</p>
//             <p>Gender: {profileData.gender}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
