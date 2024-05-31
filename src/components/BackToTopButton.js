import React, { useEffect, useState } from 'react';
import './BackToTopButton.css'; 

function BackToTopButton() {
  const [backToTopButton, setBackToToButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToToButton(true);
      } else {
        setBackToToButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='Apps'>
      {backToTopButton && (
        <button className='buttonss' onClick={scrollUp}>
          ^
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
