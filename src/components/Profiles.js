import React from 'react';
import './profile.css'; // Import the CSS file

const Profiles = () => {
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <p>Welcome to your profile page. You are not logged in.</p>
      <p>
        Here, you can explore some of our features and services. However, for a personalized experience, please
        <a href="/login">log in</a>.
      </p>
    </div>
  );
};

export default Profiles;
