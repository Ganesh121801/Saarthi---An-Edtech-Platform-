import React from "react";
import './Logout.css';
function logout() {
  function clearCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const handleLogout = () => {
    // You can add any additional logout logic here if needed
    // For example, you might want to send a request to the server to invalidate the session.

    // Clear the client-side session cookie
    clearCookie("sessionCookieName");

    // Redirect the user to the login page or any other desired page
    // You can use React Router to handle route changes.
    // For simplicity, we'll use window.location to navigate to the login page.
    window.location = "/login"; // Replace with your login page URL
  };

  return (<div className="log">
    <div className="logout-container">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
}

export default logout;
